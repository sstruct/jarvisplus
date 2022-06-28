# jarvisplus

根据 swagger 文档生成 `typescript` 客户端代码

## 安装

```shell
npm install --global @terminus/jarvisplus
```

## 用法

```shell
# 根据配置文件生成接口
jarvisplus --config .jarvis.yml

# 根据接口路径单独生成/更新接口
jarvisplus api --paths '/api/v2/to/somewhere'
```

## 参数

- 配置文件路径：`--config, -f` - jarvis config file path

- 更多请参考：`jarvisplus --help`

## 配置文件格式

```yml
swaggers:
  - swaggerUrl?: string # 远程 swagger 文件, url 请带上 /v2/api-docs
  - file?: string # 本地 json/yaml 格式的 swagger 文件。优先使用远程 swaggerUrl
    backend?: string # 自定义后端地址
    alias?: string # @TODO 暂未支持
    targetPath: string # 生成接口文件路径（相对于项目根目录）
    tags: # 根据 tags 筛选，仅生成对应 tag 下的接口和数据模型。和 paths 选项同时使用时，优先使用 paths
      - tag_a
      - tag_b
    paths: # 根据 paths 筛选，仅生成对应路径的接口和数据模型。和 tags 选项同时使用时，优先使用 paths
      - /api/v2/pet
      - get:/api/v2/store
    targets: # 支持生成多个接口文件，每项分别配置 targetPath 和过滤选项，用于手动拆分不同接口
      - targetPath: /path/to/your-target-1.sdk.ts
        tags:
          - tag_a
      - targetPath: /path/to/your-target-2.sdk.ts
        paths:
          - /api/v2/pet
# api client 生成的类型. 现在仅支持 ts（默认值）
targetLanguage: ts
# 所依赖的请求模块 superagent-request | whatwg-fetch | utils-request | dir_path(自定义模版路径，参考 templates 文件夹 README)
template: "superagent-request"
# 自定义 superagent 路径，可自行添加 headers 或中间件，不传则使用默认 superagent (此配置仅当 template 为 superagent-request 时可用)
customAgent?: string
# 请求参数（path param, query, body, formData) 是否合并到一起，默认为 false
# 重要 ⚠️：此选项开启时，不支持 body 类型不为对象（如 Array, String, Boolean 等）且同时含有 `path, query` 等参数的接口
mergeParam?: boolean
# 函数命名风格 camelCase(default) | PascalCase | snake_case | camelSnake_case | legacy
nameConvention: PascalCase

# 是否开启旧版模式（暂时仅支持旧版方法名生成规则，名称可能存在错误，不建议使用）
legacy?: boolean
# TODO 以下配置项暂未支持
# 输出的 mock 文件位置。如果需要开启mock功能的话，需要配置此地址。
enableMock?: boolean
```

## Changelog

### 2.3.1-beta.2

- Fix
  - 读取文件错误（JSON 格式错误，网络错误等）提示信息格式优化

### 2.3.1-beta.1

- Fix
  - 兼容 path parameter(parameter.properties) 为空对象的情况

### 2.3.1-beta.0

- 打包结果格式调整 es5 -> es2019

### 2.3.0

- Features
  - 支持用户自定义模版
  - 新增支持 utils-request 模版
  - 新增支持更多的命名规范配置 nameConvention
    - 原 legacy: boolean 配置项后续会被废弃
- Fixes
  - 对用户更友好的错误提示
  - mergeParam 模式下模版格式优化
  - 默认方法请求地址格式优化，string replace 替换为 string template
  - 请求参数类型名简化: fooPayloadParameter -> fooParameter
  - 修复 mergeParam 为 false 时模版错误
  - 优化：精简带参数的 path 模版格式

### 2.2.1

- 支持引用类型的 path parameter
- 内部依赖升级；更新测试用例

### 2.2.0

- 支持按 paths 筛选接口（参考配置文档 paths）
- 代码优化，新增 `jarvisplus api` 命令

### 2.1.2

- 新增：支持 CustomReturnType（customAgent）
- 修复：类型 required 生成错误

### 2.1.1

- 支持按 tags 筛选部分接口（参考配置文档 tags）
- 支持 schema param 类型

### 2.1.0

- 支持 legacy 模式
  - 支持旧版方法名生成规则（因为存在历史问题，不建议使用）
- 单独生成 Model 中的 enum 类型，供外部使用
- 优化请求参数中 schema 格式
