import { Parameter, Schema } from "swagger-schema-official"
import { PARAMETER_TYPE_BODY } from "./swaggerTypes"

export class ParametersArrayToSchemaConverter {
  public convertToObject(
    parameters: (Parameter & Schema & { schema?: Schema; in?: string })[]
  ): Schema {
    if (!Array.isArray(parameters)) {
      throw new Error("invalid argument")
    }

    const schema: Schema = {
      type: "object",
      required: parameters
        .filter((param) => Boolean(param.required))
        .map((param) => param.name),
      properties: {},
    }

    parameters.forEach((param) => {
      if (typeof param.title === "string") {
        const properties = param.properties
        for (const property in properties) {
          properties[property]["in"] = PARAMETER_TYPE_BODY
        }
        schema.properties = {
          ...schema.properties,
          ...properties,
        }
      } else if (typeof param.schema?.properties === "object") {
        schema.properties = param.schema.properties
      } else {
        schema.properties[param.name] = (param as any) as Schema
      }
    })

    return schema
  }

  public convertToUnion(parameters: Parameter[]): Schema {
    if (!Array.isArray(parameters)) {
      throw new Error("invalid argument")
    }

    return {
      allOf: (parameters as any) as Schema[],
    }
  }
}
