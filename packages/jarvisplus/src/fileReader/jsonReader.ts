import { FileReaderOptions } from "./options"
import { FileReader } from "./fileReader"
import * as fs from "fs"

export const jsonReader: FileReader<any> = <T extends unknown>(
  options: FileReaderOptions
): T => {
  const content = fs.readFileSync(options.file, {
    encoding: "utf8",
    flag: "r",
  })
  return JSON.parse(content) as T
}
