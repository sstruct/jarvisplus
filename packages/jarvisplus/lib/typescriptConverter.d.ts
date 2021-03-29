import { Operation, Schema, Spec } from "swagger-schema-official";
import { BaseConverter } from "./baseConverter";
import { Normalizer } from "./normalizer";
import { ParametersArrayToSchemaConverter } from "./parameterArrayToSchemaConverter";
import { ParametersJarFactory } from "./parametersJarFactory";
export declare const TYPESCRIPT_TYPE_UNDEFINED = "undefined";
export declare const TYPESCRIPT_TYPE_VOID = "void";
export declare const TYPESCRIPT_TYPE_ANY = "any";
export declare const TYPESCRIPT_TYPE_EMPTY_OBJECT = "{}";
export interface SwaggerToTypescriptConverterSettings {
    backend?: string;
    targetPath?: string;
    template?: "whatwg-fetch" | "superagent-request" | string;
    mergeParam?: boolean;
    customAgent?: string;
    legacy?: boolean;
    tags?: string[];
}
export declare class TypescriptConverter implements BaseConverter {
    protected swagger: Spec;
    protected settings?: SwaggerToTypescriptConverterSettings;
    protected parametersJarFactory: ParametersJarFactory;
    protected parametersArrayToSchemaConverter: ParametersArrayToSchemaConverter;
    constructor(swagger: Spec, settings?: SwaggerToTypescriptConverterSettings);
    protected normalizer: Normalizer;
    generateParameterTypesForOperation(path: string, method: string, operation: Operation): string;
    private requiredDefinitionAndResponses;
    generateOperation(path: string, method: string, operation: Operation): string;
    generateType(name: string, definition: Schema): string;
    generateDefinitionTypes(definitions: Array<[name: string, definition: Schema]>): string;
    generateEnumForDefinitionType(name: string, definition: Schema): string;
    generateTypeValue(definition: Schema & {
        schema?: Schema;
    }, options?: {
        parentName: string;
        name?: string;
    }): string;
    filterByTags: ([method, operation]: [any, any]) => boolean;
    generateClient(name: string): string;
    getNormalizer(): Normalizer;
    getParametersJarFactory(): ParametersJarFactory;
    getParametersArrayToSchemaConverter(): ParametersArrayToSchemaConverter;
}
