export const DEFAULT_TEMPLATES = ["whatwg-fetch", "superagent-request"]

export type TemplateType = typeof DEFAULT_TEMPLATES[number] | string

export type FileNames = "default.method" | "default.header" | string

export type TemplatesSuite = { header: FileNames; method: FileNames }

export const DEFAULT_TEMPLATES_SUITES: Record<TemplateType, TemplatesSuite> = {
  "whatwg-fetch": {
    header: "./default.header",
    method: "./default.method",
  },
  "superagent-request": {
    header: "./default.header",
    method: "./default.method",
  },
}
