import * as path from "path"
import { readerFactory } from "../fileReader/readerFactory"
import { DEFAULT_TEMPLATES, DEFAULT_TEMPLATES_SUITES } from "./options"
import type { FileNames, TemplatesSuite } from "./options"

function appendFileNames(path) {
  return {
    header: require.resolve(path + "/header.mustache"),
    method: require.resolve(path + "/method.mustache"),
  }
}

/**
 * resolve 方法，支持查找本地, node_modules 文件
 * @TODO 优化
 * @param template
 */
export const resolveTemplateSuite = (template: string): TemplatesSuite => {
  if (DEFAULT_TEMPLATES.includes(template)) {
    const suite = DEFAULT_TEMPLATES_SUITES[template]
    return Object.keys(suite).reduce((rec, cur) => {
      rec[cur] = path.resolve(__dirname, `../templates/${suite[cur]}.mustache`)
      return rec
    }, {}) as TemplatesSuite
  } else {
    try {
      const relativePath = path.relative(__dirname, template)
      return appendFileNames(relativePath)
    } catch (e) {
      return appendFileNames(template)
    }
  }
}

export const readerTemplate = (file: FileNames): string => {
  const reader = readerFactory({ file })
  return reader() as string
}
