import * as yargs from "yargs"
import { ConfigType } from "../fileReader/fileReader"

export interface CliCommandOptions {
  config?: string
  file?: string
  backend?: string
  targetPath?: string
  legacy?: boolean
  paths?: string[]
  writeToDisk?: boolean
}

export type CommandOptions = CliCommandOptions &
  Partial<yargs.Arguments<ConfigType>>
