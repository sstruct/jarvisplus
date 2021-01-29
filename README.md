# jarvisplus

- `@terminus/jarvisplus` 根据 swagger 文档生成 `typescript` 客户端代码
- `@terminus/jarvisplus-runtime` jarvisplus 运行时依赖

# 开发 & 发布

`sh
lerna run build

# 根据提示操作

lerna publish
`

## TODO

- [x] 支持单个方法导出（用于 tree shaking 和解构赋值）
- [x] 支持配置文件
  - [x] 配置文件读取
  - [x] 配置文件逻辑
    - [x] swaggerUrl
    - [x] api prefix 参考 nginx 字段名
    - [x] outDir/targetPath
    - [x] template type
- [x] 支持 enum
- [x] 支持 mustache 模版
- [x] 支持 superagent runtime
- [x] 函数参数格式兼容目前（Param in url）
- [ ] 自动/批量替换当前接口
- [ ] 支持模块分拆（包括相同类型提取）
- [ ] 支持更新提示
- [ ] 支持 mock, proxy
- [ ] 支持 init 初始化引导页面
- [x] 支持旧版 name normalizer
- [x] 生成 client API/type 顺序调整
- [x] 保留函数/字段注释
- [x] 请求函数参数格式优化，默认不传 undefined
- [x] 支持中文变量名
