import * as request from "superagent"
import {
  parsePayloadParameters,
  prepareFetchHeaders,
  prepareFetchBody,
} from "./utils"
import type {
  ApiResponse,
  RequestParameterType,
  RequestFactoryType,
} from "./utils"

type RequestCallback =
  | (request.SuperAgentStatic & request.Request)
  | request.SuperAgentStatic

export interface SuperagentRequestFactoryOptions {
  request?: RequestCallback

  onResponse?(any): request.Response

  onError?(any): request.ResponseError
}

const SuperagentRequestFactory =
  (
    baseUrl: string,
    options: SuperagentRequestFactoryOptions
  ): RequestFactoryType<ApiResponse<any>> =>
  (_args) => {
    const args = parsePayloadParameters(_args)
    const { path, query, body, formData, method, headers } = args

    const fetchOptions: RequestParameterType = {
      method: method,
      headers: prepareFetchHeaders({ headers }),
    }

    if (body !== undefined) {
      fetchOptions.body = body
    } else if (formData && Object.keys(formData).length > 0) {
      fetchOptions.body = Object.keys(formData).reduce((data, key) => {
        data.append(key, formData[key])
        return data
      }, new FormData())
    } else if (formData) {
      fetchOptions.body = formData
    }

    const callback: RequestCallback = ["function", "object"].includes(
      typeof options.request
    )
      ? options.request
      : request

    const handleResponse = (response) => {
      if (typeof options.onResponse === "function")
        return options.onResponse(response)
      return response
    }
    const handleError = (error) => {
      if (typeof options.onError === "function") return options.onError(error)
      throw error
    }

    const fullUrl = [baseUrl, path].join("")
    const agentMethod = method.toLocaleLowerCase()

    switch (agentMethod) {
      case "delete":
        return callback[agentMethod](fullUrl)
          .query(query)
          .then((res) => handleResponse(res))
          .catch((err) => handleError(err))
      case "get": {
        // compatible with historical apis
        if (fetchOptions.body !== undefined) {
          return callback[agentMethod](fullUrl)
            .query(query)
            .query(fetchOptions.body)
            .then((res) => handleResponse(res))
            .catch((err) => handleError(err))
        }
        return callback[agentMethod](fullUrl)
          .query(query)
          .then((res) => handleResponse(res))
          .catch((err) => handleError(err))
      }
      default:
        return callback[agentMethod](fullUrl)
          .query(query)
          .send(fetchOptions.body || {})
          .then((res) => handleResponse(res))
          .catch((err) => handleError(err))
    }
  }

export default SuperagentRequestFactory
