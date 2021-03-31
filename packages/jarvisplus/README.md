# jarvisplus

根据 swagger 文档生成 `typescript` 客户端代码

## 安装

```shell
npm install --global @terminus/jarvisplus
```

## 用法

```shell
jarvisplus --configFile .jarvis.yml
```

## 参数

- `--configFile, -f` - jarvis config file path

## 配置文件格式

```yml
swaggers:
  - swaggerUrl?: string # 后端swagger地址, url请带上 /v2/api-docs
  - file?: string # 本地 swagger 文件, 支持 json/yml，有 swaggerUrl 时，优先使用 swaggerUrl
    backend?: string
    alias: string
    targetPath: string
    tags: # 根据 tags 筛选，仅生成对应 tag 下的接口和数据模型
      - tag_1
      - tag_2
# api client 生成的类型. 现在仅支持 js ts
target_language: "ts" | "js"
# 所依赖的请求模块, default: whatwg-fetch
template: "whatwg-fetch" | "superagent-request"
# 此配置仅当 template 为 superagent-request 时可用
# 自定义 superagent 路径，可自行添加 headers 或中间件，不传则使用默认 superagent
customAgent?: string
# 是否开启 API 校验。默认为false。开启
check_api: boolean
# 方法名称上忽略 alias
ignore_alias: boolean
# 输出的 mock 文件位置。如果需要开启mock功能的话，需要配置次地址。
need_mock: boolean
# gateway_url: http://dev.gateway.mall.cnooc.com.cn
gateway_url: string
# models存放的文件夹
modelFolder: boolean
# 请求参数（path param, query, body, formData) 是否合并到一起，默认为 false
# 重要 ⚠️：此选项开启时，不支持 body 类型不为对象（如 Array, String, Boolean 等）且同时含有 `path, query` 等参数的接口
mergeParam?: boolean
# 是否开启旧版模式（暂时仅支持旧版方法名生成规则，因为存在历史问题，不建议使用）
legacy?: boolaen
```

## Changelog

### 2.1.0-alpha.1

- 支持 legacy 模式
  - 支持旧版方法名生成规则（因为存在历史问题，不建议使用）
- 单独生成 Model 中的 enum 类型，供外部使用
- 优化请求参数中 schema 格式
