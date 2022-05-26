/* eslint-disable */

import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description 删除
 */
export function deleteApiBasicAddressDeleteById(
  payload: deleteApiBasicAddressDeleteByIdParameters
): Promise<boolean> {
  const path = `/api/basic/address/delete/${payload["id"]}`;
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description 查询
 */
export function getApiBasicAddressList(): Promise<Array<收货地址>> {
  const path = "/api/basic/address/list";
  return request({ path, method: "GET" });
}

/**
 * @description 保存
 */
export function postApiBasicAddressSave(
  payload: postApiBasicAddressSaveParameters
): Promise<收货地址> {
  const path = "/api/basic/address/save";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 查询行政区划
 */
export function getApiBasicDistrictPage(
  payload: getApiBasicDistrictPageParameters
): Promise<Paging行政区划> {
  const path = "/api/basic/district/page";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 删除
 */
export function deleteApiBasicInvoiceDeleteById(
  payload: deleteApiBasicInvoiceDeleteByIdParameters
): Promise<boolean> {
  const path = `/api/basic/invoice/delete/${payload["id"]}`;
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description 查询
 */
export function getApiBasicInvoiceList(): Promise<Array<发票>> {
  const path = "/api/basic/invoice/list";
  return request({ path, method: "GET" });
}

/**
 * @description 保存
 */
export function postApiBasicInvoiceSave(
  payload: postApiBasicInvoiceSaveParameters
): Promise<发票> {
  const path = "/api/basic/invoice/save";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 查询列表
 */
export function getApiBasicLanguageList(): Promise<Array<LanguageVO>> {
  const path = "/api/basic/language/list";
  return request({ path, method: "GET" });
}

/**
 * @description 查询开屏广告
 */
export function getApiBasicMobile_appStartup(
  payload: getApiBasicMobile_appStartupParameters
): Promise<开屏广告> {
  const path = "/api/basic/mobile-app/startup";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 查询最新版本
 */
export function getApiBasicMobile_appVersion(
  payload: getApiBasicMobile_appVersionParameters
): Promise<APP版本> {
  const path = "/api/basic/mobile-app/version";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 消息计数
 */
export function getApiBasicNoticeStation_letterCount(): Promise<StationLetterCountVO> {
  const path = "/api/basic/notice/station-letter/count";
  return request({ path, method: "GET" });
}

/**
 * @description 消息分组
 */
export function getApiBasicNoticeStation_letterGroup(): Promise<
  Array<StationLetterGroupVO>
> {
  const path = "/api/basic/notice/station-letter/group";
  return request({ path, method: "GET" });
}

/**
 * @description 消息列表
 */
export function getApiBasicNoticeStation_letterPage(
  payload: getApiBasicNoticeStation_letterPageParameters
): Promise<PagingStationLetterVO> {
  const path = "/api/basic/notice/station-letter/page";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 消息全部已读
 */
export function putApiBasicNoticeStation_letterRead_all(): Promise<void> {
  const path = "/api/basic/notice/station-letter/read-all";
  return request({ path, method: "PUT" });
}

/**
 * @description 消息已读
 */
export function putApiBasicNoticeStation_letterReadById(
  payload: putApiBasicNoticeStation_letterReadByIdParameters
): Promise<void> {
  const path = `/api/basic/notice/station-letter/read/${payload["id"]}`;
  return request({ path, payload, method: "PUT" });
}

/**
 * @description 查询国家地区
 */
export function getApiBasicRegionPage(
  payload: getApiBasicRegionPageParameters
): Promise<Paging国家地区> {
  const path = "/api/basic/region/page";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 校验是否满足注销条件
 */
export function postApiBasicUserCheck_destroy(): Promise<boolean> {
  const path = "/api/basic/user/check-destroy";
  return request({ path, method: "POST" });
}

/**
 * @description 根据手机号或邮件注销
 */
export function postApiBasicUserDestroy(
  payload: postApiBasicUserDestroyParameters
): Promise<boolean> {
  const path = "/api/basic/user/destroy";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 发送用户注销验证码
 */
export function postApiBasicUserSend_destroy_sms(
  payload: postApiBasicUserSend_destroy_smsParameters
): Promise<boolean> {
  const path = "/api/basic/user/send-destroy-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

export type deleteApiBasicAddressDeleteByIdParameters = {
  /** id in path */
  id: number;
};

export type postApiBasicAddressSaveParameters =
  收货地址; /** addressTO in body */

export type getApiBasicDistrictPageParameters = {
  /** 层级 in query */
  level?: number;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 父级地址ID in query */
  parentId?: number;
  /** 国家地区ID in query */
  regionId?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type deleteApiBasicInvoiceDeleteByIdParameters = {
  /** id in path */
  id: number;
};

export type postApiBasicInvoiceSaveParameters = 发票; /** invoiceTO in body */

export type getApiBasicMobile_appStartupParameters = {
  /** 系统类型 in query */
  type?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiBasicMobile_appVersionParameters = {
  /** 版本名称 in query */
  name?: string;
  /** 当前版本号 in query */
  num?: string;
  /** 系统类型 in query */
  type?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiBasicNoticeStation_letterPageParameters = {
  /** 分组类型ID in query */
  typeId?: number;
  /** in query */
  no?: number;
  /** in query */
  size?: number;
  /** in query */
  skipCount?: boolean;
};

export type putApiBasicNoticeStation_letterReadByIdParameters = {
  /** id in path */
  id: number;
};

export type getApiBasicRegionPageParameters = {
  /** 别名 in query */
  alias?: string;
  /** 编码 in query */
  code?: string;
  /** 名称 in query */
  name?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 简称 in query */
  shortName?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type postApiBasicUserDestroyParameters =
  UserDestroyRequest; /** request in body */

export type postApiBasicUserSend_destroy_smsParameters =
  UserSmsCodeRequest; /** request in body */

export type APP版本 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 版本描述  */
  desc?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 是否强制更新  */
  isForced?: boolean;
  /** 版本名称  */
  name?: string;
  /** 版本号  */
  num?: string;
  /** 正式版链接  */
  officialUrl?: string;
  /** 系统类型  */
  type?: string;
  /** 内测版链接  */
  unofficialUrl?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type GeoLocation = {
  lat?: number;
  lon?: number;
};

export type LanguageVO = {
  /** 语言编码  */
  code?: string;
  /** 唯一标识  */
  id?: number;
  /** 是否默认  */
  isDefault?: boolean;
};

export type PagingStationLetterVO = {
  count?: number;
  data?: Array<StationLetterVO>;
  total?: number;
};

export type Paging国家地区 = {
  count?: number;
  data?: Array<国家地区>;
  total?: number;
};

export type Paging行政区划 = {
  count?: number;
  data?: Array<行政区划>;
  total?: number;
};

export type StationLetterCountVO = {
  /** 已读数  */
  isReadCount?: number;
  /** 总数  */
  totalCount?: number;
  /** 未读数  */
  unReadCount?: number;
};

export type StationLetterGroupVO = {
  /** 分组类型别名  */
  alias?: string;
  /** 分组图标  */
  icon?: string;
  /** 分组类型ID  */
  id?: number;
  /** 最新站内信消息  */
  latest?: StationLetterVO;
  /** 分组类型名称  */
  name?: string;
  /** 未读数  */
  unReadCount?: number;
};

export type StationLetterVO = {
  /** 内容  */
  content?: string;
  /** 摘要  */
  digest?: string;
  /** ID  */
  id?: number;
  /** 是否已读  */
  isRead?: boolean;
  /** 是否系统消息  */
  isSystem?: boolean;
  /** 标题  */
  title?: string;
};

export type UserDestroyRequest = {
  /** 邮箱  */
  email?: string;
  /** 邮箱验证码  */
  emailCode?: string;
  /** 手机号  */
  mobile?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 短信验证码  */
  smsCode?: string;
};

export type UserSmsCodeRequest = {
  /** 验证码  */
  captcha?: string;
  /** 手机号  */
  mobile?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** Token  */
  token?: string;
};

export type 发票 = {
  /** 数据版本  */
  _version?: number;
  /** 公司  */
  company?: string;
  /** 内容  */
  content?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 电子邮箱  */
  email?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 发票类型  */
  invoiceType?: string;
  /** 是否默认  */
  isDefault?: boolean;
  /** 注册地址  */
  regAddress?: string;
  /** 银行账号  */
  regBankAccount?: string;
  /** 银行账号  */
  regBankName?: string;
  /** 注册电话  */
  regPhone?: string;
  /** 纳税人代码  */
  taxpayerCode?: string;
  /** 抬头  */
  title?: string;
  /** 抬头类型  */
  titleType?: string;
  /** 更新时间  */
  updatedAt?: string;
  /** 用户ID  */
  userId?: number;
};

export type 国家地区 = {
  /** 数据版本  */
  _version?: number;
  /** 别名  */
  alias?: string;
  /** 编码  */
  code?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 币种  */
  currency?: 货币;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 是否默认  */
  isDefault?: boolean;
  /** 是否内地  */
  isLocal?: boolean;
  /** 语言  */
  language?: 系统语言;
  /** 名称  */
  name?: string;
  /** 简称  */
  shortName?: string;
  /** 时区  */
  timeZone?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 开屏广告 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 图片  */
  image?: string;
  /** 状态  */
  status?: string;
  /** 系统类型  */
  type?: string;
  /** 更新时间  */
  updatedAt?: string;
  /** 跳转URL  */
  url?: string;
};

export type 收货地址 = {
  /** 数据版本  */
  _version?: number;
  /** 区号  */
  areacode?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 详细地址  */
  detail?: string;
  /** 行政区划  */
  districtList?: Array<行政区划>;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 收货人名  */
  firstName?: string;
  /** 完整地址  */
  fullAddress?: string;
  /** 唯一标识  */
  id?: number;
  /** 是否默认  */
  isDefault?: boolean;
  /** 收货人姓  */
  lastName?: string;
  /** 地理坐标  */
  location?: GeoLocation;
  /** POI  */
  poi?: string;
  /** 邮编  */
  postcode?: string;
  /** 收货人  */
  receiverName?: string;
  /** 手机号  */
  receiverPhone?: string;
  /** 国家(地区)  */
  region?: 国家地区;
  /** 更新时间  */
  updatedAt?: string;
  /** 用户ID  */
  userId?: number;
};

export type 系统语言 = {
  /** 数据版本  */
  _version?: number;
  /** 语言  */
  code?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 状态  */
  status?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 行政区划 = {
  /** 数据版本  */
  _version?: number;
  /** 别名  */
  alias?: string;
  /** 编码  */
  code?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 是否叶子地址  */
  isLeaf?: boolean;
  /** 层级  */
  level?: number;
  /** 名称  */
  name?: string;
  /** 父级地址  */
  parent?: 行政区划;
  /** 邮政编码  */
  postcode?: string;
  /** 国家(地区)  */
  region?: 国家地区;
  /** 简称  */
  shortName?: string;
  /** 状态  */
  status?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 货币 = {
  /** 数据版本  */
  _version?: number;
  /** 币种  */
  code?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 符号  */
  symbol?: string;
  /** 单位  */
  unit?: string;
  /** 更新时间  */
  updatedAt?: string;
};