import * as yargs from "yargs"
import * as path from "path"
import * as chalk from "chalk"
import { Spec } from "swagger-schema-official"
import { Command } from "./commands/command"
import { writerFactory } from "./writer/writerFactory"
import { readerFactory } from "./fileReader/readerFactory"
import { ConfigType, TargetOptions } from "./fileReader/fileReader"
import { CommandOptions } from "./commands/options"
import { defaultCommand, generateAPIByPath } from "./commands"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../package.json")

const commandCore = async (command, options) => {
  if (options.swaggerUrl) {
    console.log(
      "Generating SDK based on remote url: ",
      chalk.green(options.swaggerUrl)
    )
  } else if (options.file) {
    console.log(
      "Generating SDK based on local file: ",
      chalk.green(path.resolve(options.file))
    )
  }
  const reader = readerFactory({
    file: options.file,
    swaggerUrl: options.swaggerUrl,
  })

  let customAgentRelativePath = null
  let hasCustomReturnType = false
  if (options.customAgent) {
    customAgentRelativePath = path.relative(
      path.dirname(options.targetPath),
      options.customAgent
    )
    const customAgentCwdPath = path.join(process.cwd(), options.customAgent)
    const customAgentContent = readerFactory({
      file: customAgentCwdPath.endsWith(".ts")
        ? customAgentCwdPath
        : `${customAgentCwdPath}.ts`,
      plain: true,
    })() as string
    if (customAgentContent.includes("export type CustomReturnType")) {
      hasCustomReturnType = true
    }
  }

  try {
    const spec = (await reader()) as Spec

    const targetGroups = options.targets

    const invokeCommand = (commonOptions) => (targetOptions: TargetOptions) => {
      const output = command(spec, {
        backend: commonOptions.backend,
        template: commonOptions.template,
        mergeParam: commonOptions.mergeParam,
        tags: targetOptions.tags,
        paths: targetOptions.paths,
        customAgent: customAgentRelativePath
          ? `./${customAgentRelativePath}`
          : null,
        hasCustomReturnType,
        nameConvention: commonOptions.nameConvention,
        legacy: commonOptions.legacy,
      })
      const writer = writerFactory({
        targetPath: targetOptions.targetPath,
        writeToDisk: commonOptions.writeToDisk,
      })
      writer(output)
    }

    if (Array.isArray(targetGroups) && targetGroups.length > 0) {
      targetGroups.forEach((target) =>
        invokeCommand(options)({
          tags: target.tags,
          paths: target.paths,
          targetPath: target.targetPath,
        })
      )
    } else {
      invokeCommand(options)({
        tags: options.tags,
        paths: options.paths,
        targetPath: options.targetPath,
      })
    }
    if (options.writeToDisk) {
      console.log(
        chalk.green("🚀 SDK generated successfully for:"),
        chalk.green(options.swaggerUrl || path.resolve(options.file))
      )
    }
  } catch (e) {
    if (args.debug) throw e
    console.error(
      chalk.red("❌ Unexpected error with:"),
      chalk.red(options.swaggerUrl || path.resolve(options.file), "\n"),
      chalk.red(" -> Reason:", e.message)
    )
  }
}

const useCommand = (command: Command) => (args: CommandOptions) => {
  if (typeof args.config === "string" && Array.isArray(args.swaggers)) {
    args.swaggers.forEach((swagger) => {
      commandCore(command, {
        file: swagger.file,
        swaggerUrl: swagger.swaggerUrl,
        backend: swagger.backend,
        targets: swagger.targets,
        targetPath: swagger.targetPath,
        tags: swagger.tags,
        paths: args.paths?.length ? args.paths : swagger.paths,
        template: args.template,
        mergeParam: args.mergeParam,
        customAgent: args.customAgent,
        legacy: args.legacy,
        writeToDisk: args.writeToDisk,
        nameConvention: args.nameConvention,
      })
    })
  } else {
    commandCore(command, {
      file: args.file,
      backend: args.backend,
      targetPath: args.targetPath,
      template: args.template,
      mergeParam: args.mergeParam,
      paths: args.paths,
      legacy: args.legacy,
      writeToDisk: args.writeToDisk,
      nameConvention: args.nameConvention,
    })
  }
}

let configs = {} as ConfigType

function normalizeAPICommandConfigMiddleware<T>(argv: T & ConfigType): T {
  const swagger = argv.swagger
  const selectedSwagger = [
    argv.swaggers.find(
      (item) => item.swaggerUrl === swagger || item.file === swagger
    ),
  ]
  return { ...argv, swaggers: selectedSwagger }
}

const args = yargs
  .options({
    config: {
      config: true,
      alias: ["f", "configFile"],
      description: "Jarvis config file path",
      default: ".jarvis.yml",
      configParser: (file) => {
        const reader = readerFactory({ file })
        return (configs = reader())
      },
    },
    file: {
      type: "string",
      alias: "f",
      description: "Local swagger file path",
      required: false,
    },
    legacy: {
      type: "boolean",
      description: "Enable legacy mode(NOT RECOMMENDED)",
      required: false,
      default: false,
    },
    writeToDisk: {
      alias: "w",
      type: "boolean",
      description: "Enable write to targetPath",
      required: false,
      default: true,
    },
    debug: {
      type: "boolean",
      alias: "d",
      description: "Enable debug or development mode",
      required: false,
    },
  })
  .command(
    "$0",
    "Generate models and client",
    (yargsBundle) => yargsBundle,
    useCommand(defaultCommand)
  )
  .command(
    "api",
    "Generate specific API by paths",
    (yargsBundle) => {
      const swagger =
        configs.swaggers?.map((item) => item.swaggerUrl || item.file) || []
      if (swagger.length === 0) {
        throw new Error(
          chalk.yellow(
            "Can't find any swagger source file, please check your .jarvis.yml or specify --swagger"
          )
        )
      }

      return yargsBundle
        .options({
          paths: {
            type: "string",
            description: "API paths",
            required: true,
            default: [],
            array: true,
          },
          swagger: {
            alias: "s",
            description: "Choose your swagger:",
            required: true,
            default: swagger[0] || "",
            defaultDescription:
              "FIRST Swagger config(file) will selected by DEFAULT",
          },
          writeToDisk: {
            default: false,
          },
        })
        .middleware([normalizeAPICommandConfigMiddleware])
    },
    useCommand(generateAPIByPath)
  )
  .example([
    ["$0 --config .your_jarvis.yml", "Use custom .jarvis.yml config file"],
    [
      "api --path /api/v2/pet /api/v2/store",
      "Generate api for path '/api/v2/pet' & '/api/v2/store'",
    ],
    [
      "api --path /api/v2/pet --swagger https://pet.io/swagger-doc/v2/api-docs",
      "Generate api based on swagger url",
    ],
  ])
  .epilogue(
    `For more information, find our source code at ${pkg.repository.url}`
  )
  .scriptName("jarvisplus")
  .version(pkg.version).argv

if (process.env.DEBUG) {
  // tslint:disable-next-line no-console
  console.log(args)
}
