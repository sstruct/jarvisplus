import { serialize } from "./serialize"

export interface ApiResponse<T> extends Response {
  json(): Promise<T>
}

export type RequestFactoryType = ({
  path,
  query,
  body,
  formData,
  headers,
  method,
  configuration,
}: {
  path: string
  query?: any
  body?: any
  formData?: any
  headers?: any
  method: string
  configuration: any
}) => Promise<ApiResponse<any>>

export type WhatWgFetchFunctionType = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>

export interface WhatWgFetchRequestFactoryOptions {
  requestInit: Omit<RequestInit, "body" | "method">
  fetch?: WhatWgFetchFunctionType
}

const WhatWgFetchRequestFactory =
  (
    baseUrl: string,
    options: WhatWgFetchRequestFactoryOptions
  ): RequestFactoryType =>
  ({ path, query, body, formData, headers, method, configuration: never }) => {
    const headersObject = new Headers(options.requestInit.headers || {})

    new Headers(headers).forEach((value, key) => {
      headersObject.set(key, String(value))
    })

    const fetchOptions: RequestInit = Object.assign({}, options.requestInit, {
      method: method,
      headers: headersObject,
    })

    if (body && typeof body === "string") {
      fetchOptions.body = body
    } else if (
      body &&
      typeof body === "object" &&
      Object.keys(body).length > 0
    ) {
      fetchOptions.body = JSON.stringify(body)
    } else if (formData && Object.keys(formData).length > 0) {
      fetchOptions.body = Object.keys(formData).reduce((data, key) => {
        data.append(key, formData[key])
        return data
      }, new FormData())
    } else if (formData) {
      fetchOptions.body = formData
    }

    const hasQuery = query && Object.keys(query).length > 0
    const fullUrl = [
      baseUrl,
      path,
      hasQuery ? (path.includes("?") ? "&" : "?") : "",
      hasQuery ? serialize(query) : "",
    ].join("")

    const callback: WhatWgFetchFunctionType =
      typeof options.fetch === "function" ? options.fetch : fetch

    return callback(fullUrl, fetchOptions)
  }

export const withHeaders = (
  requestFactory: RequestFactoryType,
  overrideHeaders: Headers
): RequestFactoryType => {
  return ({ path, query, body, formData, headers, method, configuration }) => {
    const headersObject = new Headers(headers || {})
    new Headers(overrideHeaders).forEach((value, key) => {
      headersObject.set(key, String(value))
    })
    return requestFactory({
      path,
      query,
      body,
      formData,
      headers: headersObject,
      method,
      configuration,
    })
  }
}

export default WhatWgFetchRequestFactory
