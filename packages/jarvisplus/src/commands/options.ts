import * as yargs from "yargs"
import { ConfigType } from "../fileReader/fileReader"

export interface CliCommandOptions {
  allowVoidParameterTypes?: boolean
  configFile?: string
  file?: string
  backend?: string
  targetPath?: string
  legacy?: boolean
}

export type CommandOptions = CliCommandOptions &
  Partial<yargs.Arguments<ConfigType>>
