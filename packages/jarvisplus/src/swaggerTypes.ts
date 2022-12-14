import { BaseParameter } from "swagger-schema-official"
export type ParameterType = BaseParameter["in"]

export const PARAMETER_TYPE_PATH: ParameterType = "path"
export const PARAMETER_TYPE_BODY: ParameterType = "body"
export const PARAMETER_TYPE_FORM_DATA: ParameterType = "formData"
export const PARAMETER_TYPE_QUERY: ParameterType = "query"
export const PARAMETER_TYPE_HEADER: ParameterType = "header"
export const PARAMETER_TYPE_PAYLOAD = "payload"

export const DEFINITION_TYPE_ENUM = "enum"
export const DEFINITION_TYPE_STRING = "string"
export const DEFINITION_TYPE_NUMBER = "number"
export const DEFINITION_TYPE_INTEGER = "integer"
export const DEFINITION_TYPE_BOOLEAN = "boolean"
export const DEFINITION_TYPE_OBJECT = "object"
export const DEFINITION_TYPE_ARRAY = "array"
