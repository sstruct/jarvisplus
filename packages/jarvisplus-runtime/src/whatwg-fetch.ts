import { serialize } from "./serialize"
import {
  parsePayloadParameters,
  prepareFetchHeaders,
  prepareFetchBody,
} from "./utils"
import type { ApiResponse, RequestFactoryType } from "./utils"

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
  ): RequestFactoryType<ApiResponse<any>> =>
  (_args) => {
    const args = parsePayloadParameters(_args)
    const {
      path,
      query,
      body,
      formData,
      method,
      headers,
      configuration: never,
    } = args

    const fetchOptions: RequestInit = Object.assign({}, options.requestInit, {
      method: method,
      headers: prepareFetchHeaders({
        initHeaders: options.requestInit.headers || {},
        headers,
      }),
    })
    fetchOptions.body = prepareFetchBody({ body, formData })

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
  requestFactory: RequestFactoryType<ApiResponse<any>>,
  overrideHeaders: Headers
): RequestFactoryType<ApiResponse<any>> => {
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
