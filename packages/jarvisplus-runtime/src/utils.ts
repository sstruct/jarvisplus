import { serialize } from "./serialize"

export interface ApiResponse<T> extends Response {
  json(): Promise<T>
}

export type RequestParameterType = {
  path?: string
  query?: any
  body?: any
  formData?: any
  headers?: any
  method: string
  configuration?: any
}

export type ParsePayloadParameters = {
  payload?: unknown
  payloadIn?: string | { [key: string]: string[] }
}

export type RequestFactoryType<T> = ({
  path,
  payload,
  payloadIn,
  query,
  body,
  formData,
  headers,
  method,
}: RequestParameterType & ParsePayloadParameters) => Promise<T>

const getParametersFromPayloadWithParamNames = (
  payload: unknown,
  paramNames: string[]
): string | { [name: string]: unknown } => {
  if (payload && typeof payload === "string") return payload
  if (!Array.isArray(paramNames)) return
  const parameters = {}
  paramNames.forEach((name) => {
    if (Object.hasOwnProperty.call(payload, name)) {
      parameters[name] = payload[name]
    }
  })
  return parameters
}

export const parsePayloadParameters = (
  args: ParsePayloadParameters
): RequestParameterType => {
  const { payload, payloadIn, ...rest } = args
  if (!payload && !payloadIn) return args as RequestParameterType
  const result = {}
  if (typeof payloadIn === "string") {
    result[payloadIn] = payload
  } else if (payloadIn) {
    Object.keys(payloadIn).forEach((type) => {
      result[type] = getParametersFromPayloadWithParamNames(
        payload,
        payloadIn[type]
      )
    })
  }
  return { ...result, ...rest } as RequestParameterType
}

export const prepareFetchHeaders = ({
  initHeaders,
  headers,
  options: { plain = false } = {},
}: {
  initHeaders?: HeadersInit
  headers: HeadersInit
  options?: { plain?: boolean }
}): Headers | Record<string, string> => {
  const headersObject = new Headers(initHeaders || {})
  new Headers(headers).forEach((value, key) => {
    headersObject.set(key, String(value))
  })
  return plain ? Object.fromEntries(headersObject.entries()) : headersObject
}

export const prepareFetchBody = ({
  body,
  formData,
}: {
  body: Body
  formData: FormData
}): BodyInit => {
  if (body && typeof body === "string") {
    return body
  } else if (body && typeof body === "object" && Object.keys(body).length > 0) {
    return JSON.stringify(body)
  } else if (formData && Object.keys(formData).length > 0) {
    return Object.keys(formData).reduce((data, key) => {
      data.append(key, formData[key])
      return data
    }, new FormData())
  } else if (formData) {
    return formData
  }
}

export const prepareFetchUrl = ({
  baseUrl,
  query,
  path,
  stringify = serialize,
}: {
  baseUrl?: string
  query?: { [key: string]: string }
  path: string
  stringify?(any): string
}): string => {
  const hasQuery = query && Object.keys(query).length > 0
  return [
    baseUrl,
    path,
    hasQuery ? (path.includes("?") ? "&" : "?") : "",
    hasQuery ? stringify(query) : "",
  ].join("")
}
