## 生成模版参数

### Header

```typescript
{
  RequestFactoryName: string // this.settings.template,
  customAgent: string // this.settings.customAgent,
  hasCustomReturnType: boolean // this.settings.hasCustomReturnType,
  // base path
  baseUrl: string // this.settings.backend,
}
```

### Method

```typescript
{
  mergeParam: boolean // 是否合并参数
  // method summary
  summary: string | undefined
  // method name
  name: string
  // method parameters
  parameters: string // 请求参数
  hasPathParams: boolean // 是否有 path 参数，有的话 path 要用 string literal(``) 包裹，否则用单引号
  payloadIn: Record // 参数描述
  payloadInType: string | undefined // payload 类型
  // request arguments(payload | query, body, formData)
  requestArgs: array // 请求参数
  path: string // 请求路径
  method: string // 请求方法
  responseTypes: string // 返回类型
  hasCustomReturnType: boolean // 是否有自定义返回类型
}
```
