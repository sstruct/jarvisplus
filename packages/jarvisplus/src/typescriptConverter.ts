import * as Mustache from "mustache"
import * as chalk from "chalk"
import * as get from "lodash.get"
import * as defaults from "lodash.defaults"
import {
  Operation,
  Parameter,
  Reference,
  Schema,
  Spec,
} from "swagger-schema-official"
import type { TemplatesSuite, TemplateType } from "./templates/options"
import type { NameConvention } from "./nameNormalizer/options"
import { readerTemplate, resolveTemplateSuite } from "./templates"
import { BaseConverter } from "./baseConverter"
import { Normalizer } from "./nameNormalizer/normalizer"
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
  PARAMETER_TYPE_PATH,
  PARAMETER_TYPE_PAYLOAD,
  PARAMETER_TYPE_QUERY,
  ParameterType,
} from "./swaggerTypes"
import { TypescriptNameNormalizer } from "./nameNormalizer/typescriptNameNormalizer"

export const TYPESCRIPT_TYPE_UNDEFINED = "undefined"
export const TYPESCRIPT_TYPE_VOID = "void"
export const TYPESCRIPT_TYPE_ANY = "any"
export const TYPESCRIPT_TYPE_EMPTY_OBJECT = "{}"

const PARAMETER_PATH_SUFFIX = "PathParameter"
const PARAMETERS_QUERY_SUFFIX = "QueryParameters"
const PARAMETERS_BODY_SUFFIX = "BodyParameters"
const PARAMETERS_FORM_DATA_SUFFIX = "FormDataParameters"
const PARAMETERS_HEADER_SUFFIX = "HeaderParameters"
const PARAMETERS_PAYLOAD_SUFFIX = "Parameters"

export interface SwaggerToTypescriptConverterSettings {
  backend?: string
  targetPath?: string
  // template name or custom template path
  template?: TemplateType
  mergeParam?: boolean
  customAgent?: string
  hasCustomReturnType?: boolean
  legacy?: boolean
  tags?: string[]
  paths?: string[]
  nameConvention?: NameConvention
}

function getRefSegments(ref: string): string[] {
  const prefixes = ["definitions", "parameters", "responses"]
  if (typeof ref === "string") {
    /**
     * example: #/definitions/some/typename -> ["definitions", "some/typename"]
     * @TODO: support OpenAPI 3.0: "#/components/examples|schemas|parameters|headers|responses/webhook-config"
     */
    for (const prefix of prefixes) {
      if (ref.startsWith(`#/${prefix}`)) {
        return [prefix, ref.replace(`#/${prefix}/`, "")]
      }
    }
  }
  return []
}

const defaultSettings = {
  backend: "",
  template: "superagent-request",
  mergeParam: false,
  nameConvention: "camelCase",
}

export class TypescriptConverter implements BaseConverter {
  protected parametersJarFactory: ParametersJarFactory =
    new ParametersJarFactory(this.swagger)
  protected parametersArrayToSchemaConverter: ParametersArrayToSchemaConverter =
    new ParametersArrayToSchemaConverter()
  protected normalizer: Normalizer = null

  protected hasValidFilter: boolean

  public constructor(
    protected swagger: Spec,
    protected settings?: SwaggerToTypescriptConverterSettings,
    protected templatesSuite?: TemplatesSuite
  ) {
    this.hasValidFilter =
      !!this.settings.tags?.length || !!this.settings.paths?.length
    this.settings = defaults(settings, defaultSettings)
    this.templatesSuite = resolveTemplateSuite(this.settings.template)

    this.normalizer = new TypescriptNameNormalizer({
      nameConvention: this.settings.nameConvention,
      legacy: this.settings.legacy,
    })
  }

  public generateParameterTypesForOperation(
    path: string,
    method: string,
    operation: Operation
  ): string {
    if (this.getAPIFilter(path, method, operation) === false) return ""
    const name = this.getNormalizer().normalizeRequestName(method, path)

    const {
      pathParams,
      queryParams,
      bodyParams,
      formDataParams,
      headerParams,
      payloadParams,
    } = this.getParametersJarFactory().createFromOperation(operation)

    const parameterTypes: string[] = []

    const appendParameterTypes = (_params, suffix): void => {
      if (_params.length > 0) {
        const params = _params.map(
          (param) => this.getDefinitionFromRef(param).parameter
        )
        const schema =
          this.getParametersArrayToSchemaConverter().convertToObject(params)
        parameterTypes.push(this.generateType(name + suffix, schema))
      }
    }

    if (this.settings.mergeParam) {
      appendParameterTypes(payloadParams, PARAMETERS_PAYLOAD_SUFFIX)
    } else {
      appendParameterTypes(pathParams, PARAMETER_PATH_SUFFIX)
      appendParameterTypes(queryParams, PARAMETERS_QUERY_SUFFIX)
      appendParameterTypes(bodyParams, PARAMETERS_BODY_SUFFIX)
      appendParameterTypes(formDataParams, PARAMETERS_FORM_DATA_SUFFIX)
      appendParameterTypes(headerParams, PARAMETERS_HEADER_SUFFIX)
    }

    return parameterTypes.join("\n")
  }

  private referredDefinitions = new Set()

  public getDefinitionFromRef(param: Parameter | Reference | Schema): {
    parameter: Schema | Parameter
    segment?: string
  } {
    if ((param as Reference).$ref) {
      const segments = getRefSegments((param as Reference).$ref)
      const parameter = get(this.swagger, segments)
      const segment = segments[segments.length - 1]
      if (!parameter) {
        console.log(
          chalk.yellow(`Cannot find reference for "${segment}", skipped.`)
        )
      }
      this.referredDefinitions.add(segment)
      return { parameter, segment }
    }
    return { parameter: param } as { parameter: Schema }
  }

  public prepareOperation(operation: Operation) {
    if (Array.isArray(operation.parameters)) {
      operation.parameters = operation.parameters.map(
        (param) => this.getDefinitionFromRef(param).parameter as Parameter
      )
    }
    return operation
  }

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
    } = this.getParametersJarFactory().createFromOperation(
      this.prepareOperation(operation)
    )

    let output = ""

    const parameters: string[] = []
    const payloadInType: string[] = []
    const payloadIn: { [key: string]: string[] } = {}

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
                  const parameter = this.getDefinitionFromRef(param.schema)
                    .parameter as Schema
                  return Object.keys(parameter.properties)
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

    if (!this.settings.mergeParam) {
      appendParametersArgs(
        PARAMETER_TYPE_PATH,
        pathParams,
        PARAMETER_PATH_SUFFIX
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

    output += Mustache.render(readerTemplate(this.templatesSuite.method), {
      mergeParam: this.settings.mergeParam,
      // method summary
      summary:
        this.getNormalizer().normalizeSummary(operation.summary) || false,
      // method name
      name,
      // method parameters
      parameters: parameters.join(", "),
      pathParams,
      payloadIn:
        Object.keys(payloadIn).length > 1
          ? JSON.stringify(payloadIn)
          : undefined,
      payloadInType: payloadInType.length === 1 ? payloadInType[0] : undefined,
      // request arguments(payload | query, body, formData)
      requestArgs: Object.keys(args).filter((arg) => args[arg]),
      path: path
        .replace(/\{/g, this.settings.mergeParam ? '${payload["' : '${path["')
        .replace(/\}/g, `"]}`),
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
        const definition = this.swagger.definitions[name]
        if (!definition) {
          collectedDefinitions.add(name)
          console.log(chalk.yellow(`Unknown model "${name}", skipped.`))
        }
        if (
          !collectedDefinitions.has(name) &&
          this.referredDefinitions.has(name)
        ) {
          this.generateTypeValue(definition, {
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
      const { segment } = this.getDefinitionFromRef(definition)
      return this.getNormalizer().normalize(segment)
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
            let str = ""
            // @ts-expect-error add proper type
            if (typeof def?.schema?.$ref === "string") {
              schemaProperties[name] = def
            } else {
              const isRequired = (definition.required || []).includes(name)
              str += getPropertyDescription(def)
              str += `'${name}'${
                isRequired ? "" : "?"
              }: ${this.generateTypeValue(def, {
                parentName: options?.parentName,
                name,
              })}`
            }
            return str
          })
          .join("\n")
        output += "\n}"
      }

      let isEmpty = output.replace(/\n/g, "") === TYPESCRIPT_TYPE_EMPTY_OBJECT
      if (isEmpty) output = ""

      output += Object.entries(schemaProperties)
        .map(([name, def]) => {
          // @ts-expect-error add proper type
          const { segment } = this.getDefinitionFromRef(def.schema)
          const seg = `${isEmpty ? "" : "& "}${this.getNormalizer().normalize(
            segment
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
        return "Record<string, unknown>"
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
    output += Mustache.render(readerTemplate(this.templatesSuite.header), {
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
