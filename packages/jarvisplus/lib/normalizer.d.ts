export interface CustomNormalizeRequestName {
    (method: string, path: string): string;
}
export interface Normalizer {
    normalize(name: string): string;
    normalizeRequestName(method: string, path: string): string;
}
