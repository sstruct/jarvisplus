import { FileReaderOptions } from "./options"
import { jsonReader } from "./jsonReader"
import { yamlReader } from "./yamlReader"
import { remoteJsonReader } from "./remoteJsonReader"
import { plainTextReader } from "./plainTextReader"

export const readerFactory = (options: FileReaderOptions) => {
  if (
    typeof options.file !== "string" &&
    typeof options.swaggerUrl !== "string"
  ) {
    throw new Error("invalid type for file/swaggerUrl option, string expected")
  }

  if (options.swaggerUrl) {
    return () => remoteJsonReader(options)
  }

  if (options.file.endsWith(".json")) {
    return () => jsonReader(options)
  }

  if (options.file.endsWith(".yml") || options.file.endsWith(".yaml")) {
    return () => yamlReader(options)
  }

  if (options.plain === true || options.file.endsWith(".mustache")) {
    return () => plainTextReader(options) as string
  }

  throw new Error(
    `cannot create reader for ${options.file}. Supported formats: json, yml, yaml, mustache, or you can explicit use plain as an option`
  )
}
