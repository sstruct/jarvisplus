import { Normalizer, CustomNormalizeRequestName } from "./normalizer"

export class TypescriptNameNormalizer implements Normalizer {
  protected customNormalizeRequestName: CustomNormalizeRequestName
  constructor(
    prop: { customNormalizeRequestName?: CustomNormalizeRequestName } = {}
  ) {
    this.customNormalizeRequestName = prop.customNormalizeRequestName
  }
  public normalize(name: string): string {
    return name
      .split(/[/.]/g)
      .filter(Boolean)
      .map((segment: string) => {
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
        return index === 0 ? str : str[0].toUpperCase() + str.substr(1)
      })
      .join("")
  }
  public normalizeRequestName(method: string, path: string): string {
    if (typeof this.customNormalizeRequestName === "function") {
      return this.customNormalizeRequestName(method, path)
    }
    return this.normalize(`${method}${path}`)
  }

  public normalizeSummary(summary: string): string {
    if (!summary) return summary
    return summary.replace("/*", "(").replace("*/", ")")
  }
}
