import legacyRequestNameNormalizer from "../legacy/requestNameNormalizer"
import { Normalizer, CustomNormalizeRequestName } from "./normalizer"
import type { NameConvention } from "./options"

export class TypescriptNameNormalizer implements Normalizer {
  // @TODO: support custom normalizer
  protected currentNormalizeRequestName: CustomNormalizeRequestName
  protected nameConvention: NameConvention
  constructor(
    prop: { nameConvention?: NameConvention; legacy?: boolean } = {}
  ) {
    // @TODO: legacy options will be deprecated
    if (prop.legacy || prop.nameConvention === "legacy") {
      this.currentNormalizeRequestName = (method, path) =>
        legacyRequestNameNormalizer(path, method)
    }
    this.nameConvention = prop.nameConvention
  }
  public normalize(name: string): string {
    const Separator = ["camelCase", "PascalCase"].includes(this.nameConvention)
      ? /[/.\-_]/g
      : /[/.]/g
    return name
      .split(Separator)
      .filter(Boolean)
      .map((segment) => {
        if (segment.startsWith("{") && segment.endsWith("}")) {
          segment =
            "By" +
            segment[1].toUpperCase() +
            segment.substring(2, segment.length - 1)
        }
        return segment
      })
      .map((str) => {
        // remove punctuations in name, e.g.:  "（），。,.", return "any" if nothing left
        // ref 1. https://stackoverflow.com/a/6671856/5121972
        // ref 2. http://www.regular-expressions.info/unicode.html#category
        return (
          str
            .replace(/[^\p{L}\p{N}^\p{Pd}\p{Pc}]*/gu, "")
            .replace(/\p{Pd}\p{Pc}*/gu, "_") || "any"
        )
      })
      .map((str, index) => {
        if (this.nameConvention === "PascalCase") {
          return str[0].toUpperCase() + str.substr(1)
        }
        if (["camelCase", "camelSnake_case"].includes(this.nameConvention)) {
          return index === 0 ? str : str[0].toUpperCase() + str.substr(1)
        }
        return str
      })
      .join(this.nameConvention === "snake_case" ? "_" : "")
  }
  public normalizeRequestName(method: string, path: string): string {
    if (typeof this.currentNormalizeRequestName === "function") {
      return this.currentNormalizeRequestName(method, path)
    }
    return this.normalize(`${method}${path}`)
  }

  public normalizeSummary(summary: string): string {
    if (!summary) return summary
    return summary.replace("/*", "(").replace("*/", ")")
  }
}
