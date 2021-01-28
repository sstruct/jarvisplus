import { BodyParameter, Operation, Parameter, Spec } from "swagger-schema-official";
import { ParametersJar } from "./parametersJar";
import { ParameterType } from "./swaggerTypes";
export declare class ParametersJarFactory {
    protected swagger: Spec;
    constructor(swagger: Spec);
    createFromOperation(operation: Operation): ParametersJar;
    protected getOperationParameters(operation: Operation): Parameter[];
    protected getOperationParametersByType(operation: Operation, type: ParameterType): Parameter[];
    protected mapParameters(operation: Operation): BodyParameter[];
    protected mapAuthorization(operation: Operation): import("swagger-schema-official").Security[];
}
