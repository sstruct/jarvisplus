import {
  Operation,
  Parameter,
  Reference,
  Spec,
  Security,
} from "swagger-schema-official"
import { ParametersJar } from "./parametersJar"
import {
  PARAMETER_TYPE_BODY,
  PARAMETER_TYPE_FORM_DATA,
  PARAMETER_TYPE_HEADER,
  PARAMETER_TYPE_PATH,
  PARAMETER_TYPE_QUERY,
  ParameterType,
} from "./swaggerTypes"

export class ParametersJarFactory {
  constructor(protected swagger: Spec) {}

  public createFromOperation(operation: Operation): ParametersJar {
    return {
      payloadParams: this.getOperationParameters(operation),
      pathParams: this.getOperationParametersByType(
        operation,
        PARAMETER_TYPE_PATH
      ),
      queryParams: this.getOperationParametersByType(
        operation,
        PARAMETER_TYPE_QUERY
      ),
      bodyParams: this.getOperationParametersByType(
        operation,
        PARAMETER_TYPE_BODY
      ),
      formDataParams: this.getOperationParametersByType(
        operation,
        PARAMETER_TYPE_FORM_DATA
      ),
      headerParams: this.getOperationParametersByType(
        operation,
        PARAMETER_TYPE_HEADER
      ),
    }
  }

  protected getOperationParameters(operation: Operation): Parameter[] {
    const parameters = this.mapParameters(operation)
    const authorization = this.mapAuthorization(operation)
    return [].concat(parameters).concat(authorization)
  }

  protected getOperationParametersByType(
    operation: Operation,
    type: ParameterType
  ): Parameter[] {
    const parameters = this.mapParameters(operation)
    const authorization = this.mapAuthorization(operation)

    return []
      .concat(parameters)
      .concat(authorization)
      .filter((parameter) => parameter?.in === type)
  }

  protected mapParameters(operation: Operation): (Parameter | Reference)[] {
    return operation.parameters || []
  }

  protected mapAuthorization(operation: Operation): Security[] {
    return (operation.security || [])
      .reduce((prev: string[], current): string[] => {
        return prev.concat(Object.keys(current))
      }, [])
      .map((name: string) => {
        return this.swagger.securityDefinitions[name]
      })
  }
}
