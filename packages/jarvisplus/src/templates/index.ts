import * as path from "path"
import { readerFactory } from "../fileReader/readerFactory"

type TemplateType = "superagent-request" | "util-request" | string

type FileNames =
  | "superagent.method"
  | "superagent.header"
  | "mall.header"
  | "mall.method"
  | string

export type TemplatesSuite = {
  header: FileNames
  method: FileNames
}

export const readerTemplate = (name: FileNames): string => {
  const file = path.resolve(__dirname, `../templates/${name}.mustache`)
  const reader = readerFactory({ file })
  try {
    return reader() as string
  } catch (error) {
    throw new Error(`template ${name} not found at ${file}`)
  }
}

export const defaultTemplatesSuites: Record<TemplateType, TemplatesSuite> = {
  "superagent-request": {
    header: "superagent.header",
    method: "superagent.method",
  },
  "util-request": {
    header: "mall.header",
    method: "mall.method",
  },
}
