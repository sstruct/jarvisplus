# jarvisplus

> A SwaggerAPI 2.0 TypeScript SDK generator inspired by [swagger-typescript-client-generator](https://github.com/psrebniak/swagger-typescript-client-generator)

- `jarvisplus` 根据 swagger 文档生成 `typescript` 客户端代码
- `jarvisplus-runtime` jarvisplus 运行时依赖

# 开发 & 发布

```shell
lerna run build
```

# 根据提示操作

```shell
lerna publish
```

## Features

- [x] 支持单个方法导出（用于 tree shaking 和解构赋值）
- [x] 支持 yaml 配置文件
- [x] 支持 superagent、whatwg-fetch、自定义 runtime
- [x] 支持模块分拆（包括相同类型提取）
- [x] 支持旧版 name normalizer
- [x] 保留函数/字段注释
- [x] 请求函数参数格式优化，默认不传 undefined
- [x] 支持中文变量名
- [x] 支持同一源文件生成多个目标文件
- [x] 支持根据 tags, path 过滤生成结果
- [ ] 支持 exclude 部分结果
- [ ] 支持 mock
- [ ] 支持 auth 参数
- [ ] 支持 init 命令，初始化引导
- [x] 支持自定义 templates
- [x] 支持自定义 agent
- [ ] 支持自定义函数命名规则
- [ ] 支持 node 接口
- [ ] 支持 [OpenAPI v3](https://swagger.io/specification/)
- [ ] 完善的文档；自动生成配置文件文档
