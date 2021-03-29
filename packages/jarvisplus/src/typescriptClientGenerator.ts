import { Spec } from "swagger-schema-official"
import { BaseConverter } from "./baseConverter"

export class TypescriptClientGenerator {
  constructor(protected swagger: Spec, protected converter: BaseConverter) {}

  public generateSingleFile(clientName: string): string {
    return [
      this.generateClient(clientName),
      this.generateParameterTypesForOperations(),
      this.generateModels(),
    ].join("\n")
  }

  public generateModels(): string {
    return this.converter.generateDefinitionTypes(
      []
        .concat(Object.entries(this.swagger.definitions || {}))
        .concat(Object.entries(this.swagger.responses || {}))
    ) as string
  }

  public generateParameterTypesForOperations(): string {
    return Object.entries(this.swagger.paths)
      .map(([path, methods]) => {
        return Object.entries(methods)
          .map(([method, operation]) => {
            return this.converter.generateParameterTypesForOperation(
              path,
              method,
              operation
            )
          })
          .join("\n")
      })
      .join("\n")
  }

  public generateClient(clientName: string): string {
    return this.converter.generateClient(clientName)
  }
}
