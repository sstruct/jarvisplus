import { Parameter, Schema } from "swagger-schema-official"
import { ParameterType, PARAMETER_TYPE_BODY } from "./swaggerTypes"

export type PayloadParameterType = { in?: ParameterType; schema?: Schema }
export type ConvertToObjectParam = (Parameter | Schema | PayloadParameterType)[]

export class ParametersArrayToSchemaConverter {
  public convertToObject(parameters: ConvertToObjectParam): Schema {
    if (!Array.isArray(parameters)) {
      throw new Error("invalid argument")
    }

    const schema: Schema = {
      type: "object",
      required: (parameters as Parameter[])
        .filter((param) => Boolean(param.required))
        .map((param) => param.name),
      properties: {},
    }

    parameters.forEach((param) => {
      if (typeof (param as Schema).title === "string") {
        const properties = (param as Schema).properties
        for (const property in properties) {
          properties[property]["in"] = PARAMETER_TYPE_BODY
        }
        schema.properties = {
          ...schema.properties,
          ...properties,
        }
      } else if (
        typeof (param as PayloadParameterType).schema?.properties === "object"
      ) {
        schema.properties = (param as PayloadParameterType).schema.properties
      } else {
        schema.properties[(param as Parameter).name] =
          param as unknown as Schema
      }
    })

    return schema
  }

  public convertToUnion(parameters: Parameter[]): Schema {
    if (!Array.isArray(parameters)) {
      throw new Error("invalid argument")
    }

    return {
      allOf: parameters as unknown as Schema[],
    }
  }
}
