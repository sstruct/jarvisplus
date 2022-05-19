import * as Mustache from "mustache"
import * as chalk from "chalk"
import { readerTemplate } from "./templates"
import { Operation, Schema, Spec } from "swagger-schema-official"
import { BaseConverter } from "./baseConverter"
import { Normalizer } from "./normalizer"
import { ParametersArrayToSchemaConverter } from "./parameterArrayToSchemaConverter"
import { ParametersJarFactory } from "./parametersJarFactory"

import {
  DEFINITION_TYPE_ARRAY,
  DEFINITION_TYPE_BOOLEAN,
  DEFINITION_TYPE_INTEGER,
  DEFINITION_TYPE_NUMBER,
  DEFINITION_TYPE_OBJECT,
  DEFINITION_TYPE_STRING,
  PARAMETER_TYPE_BODY,
  PARAMETER_TYPE_FORM_DATA,
  PARAMETER_TYPE_HEADER,
  PARAMETER_TYPE_PAYLOAD,
  PARAMETER_TYPE_QUERY,
  ParameterType,
} from "./swaggerTypes"
import { TypescriptNameNormalizer } from "./typescriptNameNormalizer"
import legacyRequestNameNormalizer from "./legacy/requestNameNormalizer"

export const TYPESCRIPT_TYPE_UNDEFINED = "undefined"
export const TYPESCRIPT_TYPE_VOID = "void"
export const TYPESCRIPT_TYPE_ANY = "any"
export const TYPESCRIPT_TYPE_EMPTY_OBJECT = "{}"

const PARAMETER_PATH_SUFFIX = "PathParameter"
const PARAMETERS_QUERY_SUFFIX = "QueryParameters"
const PARAMETERS_BODY_SUFFIX = "BodyParameters"
const PARAMETERS_FORM_DATA_SUFFIX = "FormDataParameters"
const PARAMETERS_HEADER_SUFFIX = "HeaderParameters"
const PARAMETERS_PAYLOAD_SUFFIX = "PayloadParameters"

export interface SwaggerToTypescriptConverterSettings {
  backend?: string
  targetPath?: string
  // template name or custom template path
  template?: "whatwg-fetch" | "superagent-request" | string
  mergeParam?: boolean
  customAgent?: string
  hasCustomReturnType?: boolean
  legacy?: boolean
  tags?: string[]
  paths?: string[]
}

function getSegmentsFromRef(ref: string): string {
  return typeof ref === "string" ? ref.replace("#/definitions/", "") : ""
}

export class TypescriptConverter implements BaseConverter {
  protected parametersJarFactory: ParametersJarFactory =
    new ParametersJarFactory(this.swagger)
  protected parametersArrayToSchemaConverter: ParametersArrayToSchemaConverter =
    new ParametersArrayToSchemaConverter()

  protected hasValidFilter: boolean

  public constructor(
    protected swagger: Spec,
    protected settings?: SwaggerToTypescriptConverterSettings
  ) {
    this.hasValidFilter =
      !!this.settings.tags?.length || !!this.settings.paths?.length
    this.settings = Object.assign(
      {},
      {
        backend: "",
        template: "superagent-request",
        mergeParam: false,
      },
      settings || {}
    )
  }

  protected normalizer: Normalizer = new TypescriptNameNormalizer({
    customNormalizeRequestName: this.settings.legacy
      ? (method, path) => legacyRequestNameNormalizer(path, method)
      : null,
  })

  public generateParameterTypesForOperation(
    path: string,
    method: string,
    operation: Operation
  ): string {
    if (this.getAPIFilter(path, method, operation) === false) return ""
    const name = this.getNormalizer().normalizeRequestName(method, path)

    const {
      queryParams,
      bodyParams,
      formDataParams,
      headerParams,
      payloadParams,
    } = this.getParametersJarFactory().createFromOperation(operation)

    const parameterTypes: string[] = []

    const appendParameterTypes = (params, suffix): void => {
      if (params.length > 0) {
        const schema =
          this.getParametersArrayToSchemaConverter().convertToObject(params)
        parameterTypes.push(this.generateType(name + suffix, schema))
      }
    }

    if (this.settings.mergeParam) {
      appendParameterTypes(payloadParams, PARAMETERS_PAYLOAD_SUFFIX)
    } else {
      appendParameterTypes(queryParams, PARAMETERS_QUERY_SUFFIX)
      appendParameterTypes(bodyParams, PARAMETERS_BODY_SUFFIX)
      appendParameterTypes(formDataParams, PARAMETERS_FORM_DATA_SUFFIX)
      appendParameterTypes(headerParams, PARAMETERS_HEADER_SUFFIX)
    }

    return parameterTypes.join("\n")
  }

  private referredDefinitions = new Set()

  public generateOperation(
    path: string,
    method: string,
    operation: Operation
  ): string {
    const name = this.getNormalizer().normalizeRequestName(method, path)
    const {
      payloadParams,
      pathParams,
      queryParams,
      bodyParams,
      formDataParams,
      headerParams,
    } = this.getParametersJarFactory().createFromOperation(operation)

    let output = ""

    let parameters: string[] = []

    const payloadInType: string[] = []
    const payloadIn: { [key: string]: string[] } = {}

    if (!this.settings.mergeParam) {
      parameters = pathParams.map((parameter) => {
        return `${
          parameter.name
        }${PARAMETER_PATH_SUFFIX}: ${this.generateTypeValue(
          parameter as unknown as Schema
        )}`
      })
    }

    const args: Partial<Record<ParameterType, boolean>> = {
      // [PARAMETER_TYPE_PATH]: true,
    }

    const appendParametersArgs = (paramsType, params, paramsSuffix) => {
      if (params.length > 0) {
        if (this.settings.mergeParam) {
          if (paramsType === PARAMETER_TYPE_PAYLOAD) {
            parameters.push(`${paramsType}: ${name}${paramsSuffix}`)
            args[paramsType] = true
          } else {
            payloadIn[paramsType] = params
              .map((param) => {
                if (typeof param?.schema?.$ref === "string") {
                  const segments = getSegmentsFromRef(param.schema.$ref)
                  const referred = this.swagger.definitions[segments]
                  if (!referred) {
                    throw new Error(
                      `cannot find reference ${param.schema.$ref}`
                    )
                  }
                  this.referredDefinitions.add(segments)
                  return Object.keys(referred.properties)
                }
                return param.name
              })
              .flat()
            if (!payloadInType.includes(paramsType)) {
              payloadInType.push(paramsType)
            }
          }
        } else {
          parameters.push(`${paramsType}: ${name}${paramsSuffix}`)
          args[paramsType] = true
        }
      }
    }

    if (this.settings.mergeParam) {
      appendParametersArgs(
        PARAMETER_TYPE_PAYLOAD,
        payloadParams,
        PARAMETERS_PAYLOAD_SUFFIX
      )
    }

    appendParametersArgs(
      PARAMETER_TYPE_QUERY,
      queryParams,
      PARAMETERS_QUERY_SUFFIX
    )
    appendParametersArgs(
      PARAMETER_TYPE_BODY,
      bodyParams,
      PARAMETERS_BODY_SUFFIX
    )
    appendParametersArgs(
      PARAMETER_TYPE_FORM_DATA,
      formDataParams,
      PARAMETERS_FORM_DATA_SUFFIX
    )
    appendParametersArgs(
      PARAMETER_TYPE_HEADER,
      headerParams,
      PARAMETERS_HEADER_SUFFIX
    )

    const responseTypes =
      Object.entries(operation.responses || {})
        .map(([code, response]) => {
          return this.generateTypeValue(response)
        })
        .filter(
          (value, index, self) =>
            self.indexOf(value) === index && value !== "any"
        )
        .join(" | ") || TYPESCRIPT_TYPE_VOID

    output += Mustache.render(readerTemplate("singleMethod"), {
      // method summary
      summary:
        this.getNormalizer().normalizeSummary(operation.summary) || false,
      // method name
      name,
      // method parameters
      parameters: parameters.join(", "),
      payloadIn:
        Object.keys(payloadIn).length > 1
          ? JSON.stringify(payloadIn)
          : undefined,
      payloadInType: payloadInType.length === 1 ? payloadInType[0] : undefined,
      // request arguments(payload | query, body, formData)
      requestArgs: Object.keys(args).filter((arg) => args[arg]),
      // define path keyword const/let
      definePath: pathParams.length > 0 ? "let" : "const",
      path,
      pathParams,
      // decorate path params' name with curly braces
      pathParamName: function () {
        return `{${this.name}}`
      },
      method: method.toUpperCase(),
      responseTypes,
      hasCustomReturnType: this.settings.hasCustomReturnType,
    })

    return output
  }

  public generateType(name: string, definition: Schema): string {
    return `export type ${this.getNormalizer().normalize(name)} = ${
      typeof definition.title === "string"
        ? this.getNormalizer().normalize(definition.title)
        : this.generateTypeValue(definition)
    }\n`
  }

  public collectReferredDefinitions(definitions) {
    const collectedDefinitions = new Set()
    // Collect referred definitions before generating
    while (this.referredDefinitions.size > collectedDefinitions.size) {
      this.referredDefinitions.forEach((name: string) => {
        if (!this.swagger.definitions[name]) {
          collectedDefinitions.add(name)
          console.log(chalk.yellow(`Unknown model "${name}", skipped.`))
        }
        if (
          !collectedDefinitions.has(name) &&
          this.referredDefinitions.has(name)
        ) {
          this.generateTypeValue(this.swagger.definitions[name], {
            parentName: name,
          })
          collectedDefinitions.add(name)
        }
      })
    }
  }

  public generateDefinitionTypes(
    definitions: Array<[name: string, definition: Schema]>
  ): string {
    if (this.hasValidFilter) {
      this.collectReferredDefinitions(definitions)
    }

    return definitions
      .map(([name, definition]) => {
        if (this.hasValidFilter && !this.referredDefinitions.has(name)) {
          return ""
        }
        return `export type ${this.getNormalizer().normalize(
          name
        )} = ${this.generateTypeValue(definition, { parentName: name })}\n
      ${this.generateEnumForDefinitionType(name, definition)}\n`
      })
      .join("\n")
  }

  public generateEnumForDefinitionType(
    name: string,
    definition: Schema
  ): string {
    const hasProperties =
      definition.properties && Object.keys(definition.properties).length > 0
    if (hasProperties) {
      return Object.entries(definition.properties)
        .map(([typeName, def]) => {
          if (Array.isArray(def.enum)) {
            const normalizedName = this.getNormalizer().normalize(
              `${name}/${typeName}`
            )
            return `export enum ${normalizedName} {
           ${def.enum.map((ele) => `"${ele}" = "${ele}"`).join(",")}
        }`
          }
          return ""
        })
        .join("\n")
    }
    return ""
  }

  public generateTypeValue(
    definition: Schema & { schema?: Schema },
    options?: { parentName: string; name?: string }
  ): string {
    if (definition.schema) {
      return this.generateTypeValue(definition.schema)
    }

    if (definition.$ref) {
      const segments = getSegmentsFromRef(definition.$ref)
      this.referredDefinitions.add(segments)
      return this.getNormalizer().normalize(segments)
    }

    if (Array.isArray(definition.enum)) {
      if (options?.parentName && options?.name) {
        return this.getNormalizer().normalize(
          `${options.parentName}/${options.name}`
        )
      }
    }

    if (Array.isArray(definition.allOf) && definition.allOf.length > 0) {
      return (
        definition.allOf
          .map((schema) => this.generateTypeValue(schema))
          .join(" & ") || TYPESCRIPT_TYPE_VOID
      )
    }

    switch (definition.type) {
      case DEFINITION_TYPE_STRING: {
        return definition.enum
          ? definition.enum.map((ele) => `"${ele}"`).join(" | ")
          : definition.type
      }
      case DEFINITION_TYPE_BOOLEAN: {
        return definition.type
      }
      case DEFINITION_TYPE_NUMBER:
      case DEFINITION_TYPE_INTEGER: {
        return DEFINITION_TYPE_NUMBER
      }
      case DEFINITION_TYPE_ARRAY: {
        return `Array<${this.generateTypeValue(definition.items as Schema)}>`
      }
    }

    const getPropertyDescription = (def) => {
      let output = ""
      const description = def.description
      const defIn = def["in"]
      if (description) {
        output += `/** ${description} ${defIn ? `in ${defIn}` : ""} */\n`
      } else if (defIn) {
        output += `/** in ${defIn} */\n`
      }
      return output
    }

    if (
      definition.type === DEFINITION_TYPE_OBJECT ||
      (!definition.type &&
        (definition.allOf ||
          definition.properties ||
          definition.additionalProperties))
    ) {
      let output = ""

      const hasProperties =
        definition.properties && Object.keys(definition.properties).length > 0
      const schemaProperties = {}

      if (hasProperties) {
        output += "{\n"
        output += Object.entries(definition.properties)
          .map(([name, def]) => {
            let output = ""
            // @ts-expect-error add proper type
            if (typeof def?.schema?.$ref === "string") {
              schemaProperties[name] = def
            } else {
              const isRequired = (definition.required || []).includes(name)
              output += getPropertyDescription(def)
              output += `'${name}'${
                isRequired ? "" : "?"
              }: ${this.generateTypeValue(def, {
                parentName: options?.parentName,
                name,
              })}`
            }
            return output
          })
          .join("\n")
        output += "\n}"
      }

      let isEmpty = output.replace(/\n/g, "") === "{}"
      if (isEmpty) {
        output = ""
      }

      output += Object.entries(schemaProperties)
        .map(([name, def]) => {
          // @ts-expect-error add proper type
          const segments = getSegmentsFromRef(def.schema.$ref)
          const referred = this.swagger.definitions[segments]
          if (!referred) {
            // @ts-expect-error add proper type
            throw new Error(`cannot find reference ${def.schema.$ref}`)
          }
          this.referredDefinitions.add(segments)
          const seg = `${isEmpty ? "" : "& "}${this.getNormalizer().normalize(
            segments
          )} ${getPropertyDescription(def)}`
          isEmpty = false
          return seg
        })
        .join("")

      if (
        definition.additionalProperties &&
        typeof definition.additionalProperties === "object"
      ) {
        if (hasProperties) {
          output += " & "
        }
        output +=
          `{ [key: string]: ` +
          this.generateTypeValue(definition.additionalProperties) +
          " }"
      }

      if (output.trim().length === 0) {
        return TYPESCRIPT_TYPE_EMPTY_OBJECT
      }
      return output
    }

    return TYPESCRIPT_TYPE_ANY
  }

  public filterByTags = ([method, operation] = []): boolean => {
    if (Array.isArray(operation.tags) && operation.tags.length > 0) {
      return this.settings.tags.includes(operation.tags[0])
    }
    return true
  }

  public filterByPaths = (method: string, path: string): boolean => {
    if (
      this.settings.paths.includes(path) ||
      this.settings.paths.includes(`${method}:${path}`)
    ) {
      return true
    }
    return false
  }

  public getAPIFilter = (path: string, method: string, operation): boolean => {
    if (this.settings.paths?.length) {
      return this.filterByPaths(method, path)
    }
    if (this.settings.tags?.length) {
      return this.filterByTags([method, operation])
    }
    return true
  }

  public generateClient(name: string): string {
    let output = ""
    output += Mustache.render(readerTemplate("methodModule"), {
      RequestFactoryName: this.settings.template,
      customAgent: this.settings.customAgent,
      hasCustomReturnType: this.settings.hasCustomReturnType,
      // base path
      baseUrl: this.settings.backend,
    })
    output += "\n"
    output += Object.entries(this.swagger.paths)
      .map(([path, methods]) => {
        return Object.entries(methods)
          .filter(([method, operation]) =>
            this.getAPIFilter(path, method, operation)
          )
          .map(([method, operation]) => {
            return this.generateOperation(path, method, operation)
          })
          .join("\n")
      })
      .join("\n")
    return output
  }

  public getNormalizer(): Normalizer {
    return this.normalizer
  }

  public getParametersJarFactory(): ParametersJarFactory {
    return this.parametersJarFactory
  }

  public getParametersArrayToSchemaConverter(): ParametersArrayToSchemaConverter {
    return this.parametersArrayToSchemaConverter
  }
}
