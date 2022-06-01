import { Spec } from "swagger-schema-official"
import { FileReaderOptions } from "./options"
import { NameConvention } from "../nameNormalizer/options"
import { TemplateType } from "../templates/options"

export type FileReader<T = Spec> = (options: FileReaderOptions) => T

export type TargetOptions = {
  /**
   * 写入文件路径
   */
  targetPath: string
  /**
   * 仅生成配置的 tag 的接口
   */
  tags?: string | string[]
  /**
   * 仅生成指定 path 的接口
   * 支持路径，如 /api/v2/pet
   * 或'方法:路径'，如 get:/api/v2/pet
   */
  paths?: string[]
}

export type ConfigType = {
  swaggers: ({
    /**
     * swagger 文档远程地址，支持 json、yaml
     */
    swaggerUrl?: string
    /**
     * swagger 文档本地文件路径，支持 json、yaml
     */
    file?: string
    backend?: string
    alias: string // TODO 暂未支持
    targets?: TargetOptions
    /**
     * 是否写入磁盘，默认为 true
     */
    writeToDisk?: boolean
  } & TargetOptions)[]
  /**
   * 指定 swagger 地址文件路径
   */
  swagger?: string
  /**
   * api client 生成的类型. 现在仅支持 ts
   */
  targetLanguage: "ts"
  /**
   * 所依赖的请求模块, default: whatwg-fetch
   */
  template: TemplateType
  /**
   * 此配置仅当 template 为 superagent-request 时可用
   * 自定义 superagent 路径，可自行添加 headers 或中间件，不传则使用默认 superagent
   */
  customAgent?: string
  /**
   * 请求参数（path param, query, body, formData) 是否合并到一起，默认为 false
   */
  mergeParam?: boolean
  /*
   * 函数命名风格 default: camelCase
   * 注意：camelCase 和 PascalCase 将强制将接口地址中的 "-" "_" 去除
   */
  nameConvention?: NameConvention
  /**
   * 是否启用旧版模式（暂时仅支持请求方法命名，即将弃用，使用 nameConvention: legacy 代替）
   */
  legacy?: boolean
  /**
   * TODO: 输出的 mock 文件位置。如果需要开启mock功能的话，需要配置此地址。
   */
  enableMock?: boolean
}
