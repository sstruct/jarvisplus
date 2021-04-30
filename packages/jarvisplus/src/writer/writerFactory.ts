import { prettierWriterComposite } from "./prettierWriterComposite"
import { stdoutWriter } from "./stdoutWriter"
import { fsWriter } from "./fsWriter"
import { WriterOptions } from "./options"
import { Writer } from "./writer"

export const writerFactory = (options: WriterOptions): Writer => {
  if (options.writeToDisk) {
    if (typeof options.targetPath !== "string" || options.targetPath === "") {
      throw new Error("invalid targetPath, file path string expected")
    }
    return (output, customOptions) =>
      prettierWriterComposite(fsWriter)(output, customOptions || options)
  }
  return (output, customOptions) =>
    prettierWriterComposite(stdoutWriter)(output, customOptions || options)
}
