import { FileReaderOptions } from "./options"
import { FileReader } from "./fileReader"
import * as fs from "fs"
import * as yaml from "js-yaml"

export const yamlReader: FileReader<any> = <T extends unknown>(
  options: FileReaderOptions
): T => {
  const content = fs.readFileSync(options.file, {
    encoding: "utf8",
    flag: "r",
  })
  return yaml.load(content) as T
}
