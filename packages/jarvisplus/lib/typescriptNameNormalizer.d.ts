import { Normalizer, CustomNormalizeRequestName } from "./normalizer";
export declare class TypescriptNameNormalizer implements Normalizer {
    protected customNormalizeRequestName: CustomNormalizeRequestName;
    constructor(prop?: {
        customNormalizeRequestName?: CustomNormalizeRequestName;
    });
    normalize(name: string): string;
    normalizeRequestName(method: string, path: string): string;
}
