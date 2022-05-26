/* eslint-disable */

import { request } from "@terminus/mall-utils";

/**
 * @description 查询文章分类列表
 */
export function getApiContentArticle_categoryList(
  payload: getApiContentArticle_categoryListParameters
): Promise<Array<文章类目>> {
  return request("/api/content/article-category/list", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 分页查询文章分类
 */
export function getApiContentArticle_categoryPage(
  payload: getApiContentArticle_categoryPageParameters
): Promise<Paging文章类目> {
  return request("/api/content/article-category/page", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询文章分类父类
 */
export function getApiContentArticle_categoryQuery_parant(
  payload: getApiContentArticle_categoryQuery_parantParameters
): Promise<文章类目> {
  return request("/api/content/article-category/query-parant", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询文章分类
 */
export function getApiContentArticle_categoryQuery_with_children(
  payload: getApiContentArticle_categoryQuery_with_childrenParameters
): Promise<文章类目> {
  return request("/api/content/article-category/query-with-children", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询文章分类以及其父类
 */
export function getApiContentArticle_categoryQuery_with_parent(
  payload: getApiContentArticle_categoryQuery_with_parentParameters
): Promise<文章类目> {
  return request("/api/content/article-category/query-with-parent", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 创建文章
 */
export function postApiContentArticleCreate(
  payload: postApiContentArticleCreateParameters
): Promise<文章> {
  return request("/api/content/article/create", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 创建UGC文章
 */
export function postApiContentArticleCreate_UGC(
  payload: postApiContentArticleCreate_UGCParameters
): Promise<文章> {
  return request("/api/content/article/create-UGC", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 删除
 */
export function postApiContentArticleDelete(
  payload: postApiContentArticleDeleteParameters
): Promise<boolean> {
  return request("/api/content/article/delete", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 查询文章列表
 */
export function getApiContentArticleList(
  payload: getApiContentArticleListParameters
): Promise<Array<文章>> {
  return request("/api/content/article/list", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 分页
 */
export function getApiContentArticlePage(
  payload: getApiContentArticlePageParameters
): Promise<Paging文章精简信息> {
  return request("/api/content/article/page", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询个人文章
 */
export function getApiContentArticlePage_personal_article(
  payload: getApiContentArticlePage_personal_articleParameters
): Promise<Paging文章精简信息> {
  return request("/api/content/article/page-personal-article", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 根据id查询
 */
export function getApiContentArticleQuery(
  payload: getApiContentArticleQueryParameters
): Promise<文章> {
  return request("/api/content/article/query", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询商品关联文章
 */
export function getApiContentArticleQuery_by_shop_item(
  payload: getApiContentArticleQuery_by_shop_itemParameters
): Promise<Paging文章> {
  return request("/api/content/article/query-by-shop-item", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 修改文章
 */
export function postApiContentArticleUpdate(
  payload: postApiContentArticleUpdateParameters
): Promise<boolean> {
  return request("/api/content/article/update", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 修改UGC文章
 */
export function postApiContentArticleUpdate_UGC(
  payload: postApiContentArticleUpdate_UGCParameters
): Promise<boolean> {
  return request("/api/content/article/update-UGC", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 更新状态
 */
export function postApiContentArticleUpdate_status(
  payload: postApiContentArticleUpdate_statusParameters
): Promise<boolean> {
  return request("/api/content/article/update-status", {
    payload,
    payloadIn: "query",
    method: "POST",
  });
}

/**
 * @description 批量评论
 */
export function postApiContentCommentBatch_create(
  payload: postApiContentCommentBatch_createParameters
): Promise<Array<评论>> {
  return request("/api/content/comment/batch-create", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 评论
 */
export function postApiContentCommentCreate(
  payload: postApiContentCommentCreateParameters
): Promise<评论> {
  return request("/api/content/comment/create", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 删除
 */
export function postApiContentCommentDelete(
  payload: postApiContentCommentDeleteParameters
): Promise<boolean> {
  return request("/api/content/comment/delete", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 分页查询文章评论
 */
export function getApiContentCommentPag_article_comment(
  payload: getApiContentCommentPag_article_commentParameters
): Promise<Paging文章评论> {
  return request("/api/content/comment/pag-article-comment", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 分页查询文章评论
 */
export function getApiContentCommentPage_article_comment_by_recipient(
  payload: getApiContentCommentPage_article_comment_by_recipientParameters
): Promise<Paging评论> {
  return request("/api/content/comment/page-article-comment-by-recipient", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 分页查询评论带用户倾向
 */
export function getApiContentCommentPage_comment_with_UP(
  payload: getApiContentCommentPage_comment_with_UPParameters
): Promise<Paging评论> {
  return request("/api/content/comment/page-comment-with-UP", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 分页查询评论
 */
export function getApiContentCommentPage_comment_with_children(
  payload: getApiContentCommentPage_comment_with_childrenParameters
): Promise<Paging评论> {
  return request("/api/content/comment/page-comment-with-children", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询评论所在页数
 */
export function getApiContentCommentQuery_pageNo_by_id(
  payload: getApiContentCommentQuery_pageNo_by_idParameters
): Promise<number> {
  return request("/api/content/comment/query-pageNo-by-id", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 回复
 */
export function postApiContentCommentReply(
  payload: postApiContentCommentReplyParameters
): Promise<评论> {
  return request("/api/content/comment/reply", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 匹配区域站点
 */
export function getApiContentDistrictMatch(
  payload: getApiContentDistrictMatchParameters
): Promise<区域站点> {
  return request("/api/content/district/match", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询文件路径
 */
export function getApiContentFileList_file_path(
  payload: getApiContentFileList_file_pathParameters
): Promise<Array<文件>> {
  return request("/api/content/file/list-file-path", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 根据类型分页查询文件
 */
export function getApiContentFilePage_by_type(
  payload: getApiContentFilePage_by_typeParameters
): Promise<Paging文件> {
  return request("/api/content/file/page-by-type", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询投放计划列表
 */
export function getApiContentLaunchList(
  payload: getApiContentLaunchListParameters
): Promise<Array<投放计划>> {
  return request("/api/content/launch/list", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 匹配投放计划列表
 */
export function getApiContentLaunchMatch(
  payload: getApiContentLaunchMatchParameters
): Promise<投放周期> {
  return request("/api/content/launch/match", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询投放计划
 */
export function getApiContentLaunchQuery(
  payload: getApiContentLaunchQueryParameters
): Promise<投放计划> {
  return request("/api/content/launch/query", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 批量取消用户倾向
 */
export function postApiContentUpBatch_cancel(
  payload: postApiContentUpBatch_cancelParameters
): Promise<boolean> {
  return request("/api/content/up/batch-cancel", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 取消用户倾向
 */
export function postApiContentUpCancel(
  payload: postApiContentUpCancelParameters
): Promise<boolean> {
  return request("/api/content/up/cancel", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 新增用户倾向
 */
export function postApiContentUpCreate(
  payload: postApiContentUpCreateParameters
): Promise<用户倾向> {
  return request("/api/content/up/create", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description 查询是否已操作
 */
export function getApiContentUpList_is_op(
  payload: getApiContentUpList_is_opParameters
): Promise<Array<是否已经操作过目标主体>> {
  return request("/api/content/up/list-is-op", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 分页查询足迹/搜藏列表
 */
export function getApiContentUpPage_UP_item(
  payload: getApiContentUpPage_UP_itemParameters
): Promise<Array<是否已经操作过目标主体>> {
  return request("/api/content/up/page-UP-item", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询个人用户倾向统计
 */
export function getApiContentUpPersonal_statistics(
  payload: getApiContentUpPersonal_statisticsParameters
): Promise<个人中心数据> {
  return request("/api/content/up/personal-statistics", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description 查询用户倾向统计
 */
export function getApiContentUpQuery_statistics(
  payload: getApiContentUpQuery_statisticsParameters
): Promise<Array<用户倾向统计>> {
  return request("/api/content/up/query-statistics", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

export type getApiContentArticle_categoryListParameters = {
  /** 类型 in query */
  categoryType?: Array<string>;
  /** ID in query */
  id?: Array<number>;
  /** 级别 in query */
  level?: number;
  /** 名称 in query */
  name?: string;
  /** 父节点ID in query */
  parentId?: Array<number>;
  /** 状态 in query */
  status?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticle_categoryPageParameters = {
  /** 类型 in query */
  categoryType?: Array<string>;
  /** ID in query */
  id?: Array<number>;
  /** 级别 in query */
  level?: number;
  /** 名称 in query */
  name?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 父节点ID in query */
  parentId?: Array<number>;
  /** 状态 in query */
  status?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticle_categoryQuery_parantParameters = {
  /** 类型 in query */
  categoryType?: Array<string>;
  /** ID in query */
  id?: Array<number>;
  /** 级别 in query */
  level?: number;
  /** 名称 in query */
  name?: string;
  /** 父节点ID in query */
  parentId?: Array<number>;
  /** 状态 in query */
  status?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticle_categoryQuery_with_childrenParameters = {
  /** 类型 in query */
  categoryType?: Array<string>;
  /** ID in query */
  id?: Array<number>;
  /** 级别 in query */
  level?: number;
  /** 名称 in query */
  name?: string;
  /** 父节点ID in query */
  parentId?: Array<number>;
  /** 状态 in query */
  status?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticle_categoryQuery_with_parentParameters = {
  /** 类型 in query */
  categoryType?: Array<string>;
  /** ID in query */
  id?: Array<number>;
  /** 级别 in query */
  level?: number;
  /** 名称 in query */
  name?: string;
  /** 父节点ID in query */
  parentId?: Array<number>;
  /** 状态 in query */
  status?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type postApiContentArticleCreateParameters =
  文章创建请求; /** request in body */

export type postApiContentArticleCreate_UGCParameters =
  文章创建请求; /** request in body */

export type postApiContentArticleDeleteParameters =
  文章删除请求; /** request in body */

export type getApiContentArticleListParameters = {
  /** ID in query */
  id?: Array<number>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticlePageParameters = {
  /** 文章类型 in query */
  articleType?: Array<string>;
  /** 类目Id in query */
  categoryId?: Array<number>;
  /** ID in query */
  id?: Array<number>;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 状态 in query */
  status?: Array<string>;
  /** 标题 in query */
  title?: string;
  /** in query */
  "createdBy.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "createdBy._fields"?: Record<string, unknown>;
  /** in query */
  "createdBy._modelKey"?: string;
  /** in query */
  "createdBy._version"?: number;
  /** in query */
  "createdBy.avatar"?: string;
  /** in query */
  "createdBy.bizAppKey"?: string;
  /** in query */
  "createdBy.createdAt"?: string;
  /** in query */
  "createdBy.email"?: string;
  /** in query */
  "createdBy.enabled"?: boolean;
  /** in query */
  "createdBy.id"?: number;
  /** in query */
  "createdBy.locale"?: string;
  /** in query */
  "createdBy.locked"?: boolean;
  /** in query */
  "createdBy.mobile"?: string;
  /** in query */
  "createdBy.nickname"?: string;
  /** in query */
  "createdBy.password"?: string;
  /** in query */
  "createdBy.pwdExpireAt"?: string;
  /** in query */
  "createdBy.updatedAt"?: string;
  /** in query */
  "createdBy.username"?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticlePage_personal_articleParameters = {
  /** 文章类型 in query */
  articleType?: Array<string>;
  /** 类目Id in query */
  categoryId?: Array<number>;
  /** ID in query */
  id?: Array<number>;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 状态 in query */
  status?: Array<string>;
  /** 标题 in query */
  title?: string;
  /** in query */
  "createdBy.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "createdBy._fields"?: Record<string, unknown>;
  /** in query */
  "createdBy._modelKey"?: string;
  /** in query */
  "createdBy._version"?: number;
  /** in query */
  "createdBy.avatar"?: string;
  /** in query */
  "createdBy.bizAppKey"?: string;
  /** in query */
  "createdBy.createdAt"?: string;
  /** in query */
  "createdBy.email"?: string;
  /** in query */
  "createdBy.enabled"?: boolean;
  /** in query */
  "createdBy.id"?: number;
  /** in query */
  "createdBy.locale"?: string;
  /** in query */
  "createdBy.locked"?: boolean;
  /** in query */
  "createdBy.mobile"?: string;
  /** in query */
  "createdBy.nickname"?: string;
  /** in query */
  "createdBy.password"?: string;
  /** in query */
  "createdBy.pwdExpireAt"?: string;
  /** in query */
  "createdBy.updatedAt"?: string;
  /** in query */
  "createdBy.username"?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticleQueryParameters = {
  /** ID in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentArticleQuery_by_shop_itemParameters = {
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 关联Id in query */
  relationalId?: number;
  /** 关联类型 in query */
  relationalType?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type postApiContentArticleUpdateParameters =
  文章修改请求; /** request in body */

export type postApiContentArticleUpdate_UGCParameters =
  文章修改请求; /** request in body */

export type postApiContentArticleUpdate_statusParameters = {
  /** ID in query */
  id?: number;
  /** 状态 in query */
  status?: string;
  /** 用户 in query */
  userId?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type postApiContentCommentBatch_createParameters = {
  /** requests in body */
  requests: Array<评论创建请求_2>;
};

export type postApiContentCommentCreateParameters =
  评论创建请求; /** request in body */

export type postApiContentCommentDeleteParameters =
  评论根据Id修改请求; /** request in body */

export type getApiContentCommentPag_article_commentParameters = {
  /** 文章Id in query */
  articleIds?: Array<number>;
  /** 文章标题 in query */
  articleTitles?: Array<string>;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "commentRecipient.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "commentRecipient._fields"?: Record<string, unknown>;
  /** in query */
  "commentRecipient._modelKey"?: string;
  /** in query */
  "commentRecipient._version"?: number;
  /** in query */
  "commentRecipient.avatar"?: string;
  /** in query */
  "commentRecipient.bizAppKey"?: string;
  /** in query */
  "commentRecipient.createdAt"?: string;
  /** in query */
  "commentRecipient.email"?: string;
  /** in query */
  "commentRecipient.enabled"?: boolean;
  /** in query */
  "commentRecipient.id"?: number;
  /** in query */
  "commentRecipient.locale"?: string;
  /** in query */
  "commentRecipient.locked"?: boolean;
  /** in query */
  "commentRecipient.mobile"?: string;
  /** in query */
  "commentRecipient.nickname"?: string;
  /** in query */
  "commentRecipient.password"?: string;
  /** in query */
  "commentRecipient.pwdExpireAt"?: string;
  /** in query */
  "commentRecipient.updatedAt"?: string;
  /** in query */
  "commentRecipient.username"?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentCommentPage_article_comment_by_recipientParameters = {
  /** 文章Id in query */
  articleIds?: Array<number>;
  /** 文章标题 in query */
  articleTitles?: Array<string>;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "commentRecipient.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "commentRecipient._fields"?: Record<string, unknown>;
  /** in query */
  "commentRecipient._modelKey"?: string;
  /** in query */
  "commentRecipient._version"?: number;
  /** in query */
  "commentRecipient.avatar"?: string;
  /** in query */
  "commentRecipient.bizAppKey"?: string;
  /** in query */
  "commentRecipient.createdAt"?: string;
  /** in query */
  "commentRecipient.email"?: string;
  /** in query */
  "commentRecipient.enabled"?: boolean;
  /** in query */
  "commentRecipient.id"?: number;
  /** in query */
  "commentRecipient.locale"?: string;
  /** in query */
  "commentRecipient.locked"?: boolean;
  /** in query */
  "commentRecipient.mobile"?: string;
  /** in query */
  "commentRecipient.nickname"?: string;
  /** in query */
  "commentRecipient.password"?: string;
  /** in query */
  "commentRecipient.pwdExpireAt"?: string;
  /** in query */
  "commentRecipient.updatedAt"?: string;
  /** in query */
  "commentRecipient.username"?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentCommentPage_comment_with_UPParameters = {
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentCommentPage_comment_with_childrenParameters = {
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentCommentQuery_pageNo_by_idParameters = {
  /** 文章Id in query */
  articleId?: number;
  /** 文章标题 in query */
  articleTitle?: string;
  /** ID in query */
  id?: number;
  /** 目标主体Id in query */
  targetId?: number;
  /** 目标主体类型 in query */
  targetType?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type postApiContentCommentReplyParameters =
  评论创建请求_1; /** request in body */

export type getApiContentDistrictMatchParameters = {
  /** 市ID in query */
  cityId?: number;
  /** 客户端 in query */
  client?: string;
  /** 省ID in query */
  provinceId?: number;
  /** 区ID in query */
  regionId?: number;
  /** 类型 in query */
  type?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentFileList_file_pathParameters = {
  /** 文件类型 in query */
  fileType?: string;
  /** ID in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentFilePage_by_typeParameters = {
  /** 文件类型 in query */
  fileType?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 父节点 in query */
  parentId?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentLaunchListParameters = {
  /** ID in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentLaunchMatchParameters = {
  /** ID in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type getApiContentLaunchQueryParameters = {
  /** ID in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type postApiContentUpBatch_cancelParameters =
  用户倾向取消请求; /** request in body */

export type postApiContentUpCancelParameters =
  用户倾向取消请求_1; /** request in body */

export type postApiContentUpCreateParameters =
  用户倾向新增请求; /** request in body */

export type getApiContentUpList_is_opParameters = {
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** in query */
  "operator.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "operator._fields"?: Record<string, unknown>;
  /** in query */
  "operator._modelKey"?: string;
  /** in query */
  "operator._version"?: number;
  /** in query */
  "operator.avatar"?: string;
  /** in query */
  "operator.bizAppKey"?: string;
  /** in query */
  "operator.createdAt"?: string;
  /** in query */
  "operator.email"?: string;
  /** in query */
  "operator.enabled"?: boolean;
  /** in query */
  "operator.id"?: number;
  /** in query */
  "operator.locale"?: string;
  /** in query */
  "operator.locked"?: boolean;
  /** in query */
  "operator.mobile"?: string;
  /** in query */
  "operator.nickname"?: string;
  /** in query */
  "operator.password"?: string;
  /** in query */
  "operator.pwdExpireAt"?: string;
  /** in query */
  "operator.updatedAt"?: string;
  /** in query */
  "operator.username"?: string;
};

export type getApiContentUpPage_UP_itemParameters = {
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** in query */
  "operator.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "operator._fields"?: Record<string, unknown>;
  /** in query */
  "operator._modelKey"?: string;
  /** in query */
  "operator._version"?: number;
  /** in query */
  "operator.avatar"?: string;
  /** in query */
  "operator.bizAppKey"?: string;
  /** in query */
  "operator.createdAt"?: string;
  /** in query */
  "operator.email"?: string;
  /** in query */
  "operator.enabled"?: boolean;
  /** in query */
  "operator.id"?: number;
  /** in query */
  "operator.locale"?: string;
  /** in query */
  "operator.locked"?: boolean;
  /** in query */
  "operator.mobile"?: string;
  /** in query */
  "operator.nickname"?: string;
  /** in query */
  "operator.password"?: string;
  /** in query */
  "operator.pwdExpireAt"?: string;
  /** in query */
  "operator.updatedAt"?: string;
  /** in query */
  "operator.username"?: string;
};

export type getApiContentUpPersonal_statisticsParameters = {
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** in query */
  "operator.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "operator._fields"?: Record<string, unknown>;
  /** in query */
  "operator._modelKey"?: string;
  /** in query */
  "operator._version"?: number;
  /** in query */
  "operator.avatar"?: string;
  /** in query */
  "operator.bizAppKey"?: string;
  /** in query */
  "operator.createdAt"?: string;
  /** in query */
  "operator.email"?: string;
  /** in query */
  "operator.enabled"?: boolean;
  /** in query */
  "operator.id"?: number;
  /** in query */
  "operator.locale"?: string;
  /** in query */
  "operator.locked"?: boolean;
  /** in query */
  "operator.mobile"?: string;
  /** in query */
  "operator.nickname"?: string;
  /** in query */
  "operator.password"?: string;
  /** in query */
  "operator.pwdExpireAt"?: string;
  /** in query */
  "operator.updatedAt"?: string;
  /** in query */
  "operator.username"?: string;
};

export type getApiContentUpQuery_statisticsParameters = {
  /** 目标主体Id in query */
  targetId?: Array<number>;
  /** 目标主体类型 in query */
  targetType?: Array<string>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** in query */
  "operator.__trantorExtendFields"?: Record<string, unknown>;
  /** in query */
  "operator._fields"?: Record<string, unknown>;
  /** in query */
  "operator._modelKey"?: string;
  /** in query */
  "operator._version"?: number;
  /** in query */
  "operator.avatar"?: string;
  /** in query */
  "operator.bizAppKey"?: string;
  /** in query */
  "operator.createdAt"?: string;
  /** in query */
  "operator.email"?: string;
  /** in query */
  "operator.enabled"?: boolean;
  /** in query */
  "operator.id"?: number;
  /** in query */
  "operator.locale"?: string;
  /** in query */
  "operator.locked"?: boolean;
  /** in query */
  "operator.mobile"?: string;
  /** in query */
  "operator.nickname"?: string;
  /** in query */
  "operator.password"?: string;
  /** in query */
  "operator.pwdExpireAt"?: string;
  /** in query */
  "operator.updatedAt"?: string;
  /** in query */
  "operator.username"?: string;
};

export type Attachment = {
  files?: Array<File>;
};

export type File = {
  name?: string;
  type?: string;
  url?: string;
};

export type Paging文件 = {
  count?: number;
  data?: Array<文件>;
  total?: number;
};

export type Paging文章 = {
  count?: number;
  data?: Array<文章>;
  total?: number;
};

export type Paging文章类目 = {
  count?: number;
  data?: Array<文章类目>;
  total?: number;
};

export type Paging文章精简信息 = {
  count?: number;
  data?: Array<文章精简信息>;
  total?: number;
};

export type Paging文章评论 = {
  count?: number;
  data?: Array<文章评论>;
  total?: number;
};

export type Paging评论 = {
  count?: number;
  data?: Array<评论>;
  total?: number;
};

export type User = {
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User;
  /** 用户名  */
  username: string;
};

export type User_1 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type User_2 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type User_3 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type User_4 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type User_5 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type User_6 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type User_7 = {
  __trantorExtendFields?: Record<string, unknown>;
  _modelKey?: string;
  /** 数据版本  */
  _version: number;
  /** 头像  */
  avatar?: string;
  /** 所属应用  */
  bizAppKey?: string;
  /** 创建时间  */
  createdAt: string;
  /** 创建人  */
  createdBy?: User_7;
  /** 邮箱  */
  email?: string;
  /** 启用  */
  enabled?: boolean;
  /** 标识  */
  id: number;
  /** 语言  */
  locale?: string;
  /** 锁定  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  /** 密码过期时间  */
  pwdExpireAt?: string;
  /** 更新时间  */
  updatedAt: string;
  /** 最后修改人  */
  updatedBy?: User_7;
  /** 用户名  */
  username: string;
};

export type 个人中心数据 = {
  /** 数据版本  */
  _version?: number;
  /** 个人文章数  */
  articleCount?: number;
  /** 用户文章被喜欢数  */
  articleLikedCount?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 收藏商品数量  */
  favoriteItemCount?: number;
  /** 浏览足迹数量  */
  footPrintCount?: number;
  /** 唯一标识  */
  id?: number;
  /** 更新时间  */
  updatedAt?: string;
};

export type 区域站点 = {
  /** 数据版本  */
  _version?: number;
  /** 客户端  */
  client?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 地址  */
  districtSiteAddressList?: Array<区域站点地址>;
  /** 地址字符串  */
  districtSiteAddressString?: string;
  /** 域名  */
  domain?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 名称  */
  name?: string;
  /** 类型  */
  type?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 区域站点地址 = {
  /** 数据版本  */
  _version?: number;
  /** 市Id  */
  cityId?: number;
  /** 市名称  */
  cityName?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 区域站点  */
  districtSite?: 区域站点;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 省Id  */
  provinceId?: number;
  /** 省名称  */
  provinceName?: string;
  /** 区Id  */
  regionId?: number;
  /** 区名称  */
  regionName?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 投放周期 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 数据方式  */
  dataMode?: string;
  /** 优先级  */
  dataPriority?: string;
  /** 生效时间  */
  effectTime?: string;
  /** 过期时间  */
  expireTime?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 投放图片  */
  imageList?: Array<投放图片>;
  /** 投放商品  */
  itemList?: Array<投放商品>;
  /** 投放消息  */
  newsList?: Array<投放消息>;
  /** 更新时间  */
  updatedAt?: string;
};

export type 投放商品 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 目标Id  */
  objectId?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 投放图片 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 图片地址  */
  imageUrl?: string;
  /** 链接地址  */
  linkUrl?: string;
  /** 标题  */
  title?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 投放消息 = {
  /** 数据版本  */
  _version?: number;
  /** 背景颜色  */
  backgroundColor?: string;
  /** 内容  */
  content?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 图片地址  */
  iconUrl?: string;
  /** 唯一标识  */
  id?: number;
  /** 链接地址  */
  linkUrl?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 投放计划 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 生效状态  */
  effectStatus?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 计划名称  */
  launchName?: string;
  /** 投放周期  */
  launchPeriodList?: Array<投放周期>;
  /** 编辑状态  */
  launchStatus?: string;
  /** 投放组类型  */
  launchType?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 文件 = {
  /** 数据版本  */
  _version?: number;
  /** 子节点  */
  children?: Array<文件>;
  /** 创建时间  */
  createdAt?: string;
  /** 当前路径  */
  currentPath?: Array<文件>;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 文件总数  */
  fileCount?: number;
  /** 文件创建时间  */
  fileCreateTime?: string;
  /** 文件深度  */
  fileDepth?: number;
  /** 文件扩展类型  */
  fileExtension?: string;
  /** 文件额外信息  */
  fileExtraInfo?: string;
  /** 文件名称  */
  fileName?: string;
  /** 保存路径  */
  filePath?: string;
  /** 文件大小  */
  fileSize?: number;
  /** 文件类型  */
  fileType?: string;
  /** 文件类型名称  */
  fileTypeName?: string;
  /** 文件url  */
  fileUrl?: string;
  /** 唯一标识  */
  id?: number;
  /** 父节点  */
  parentNode?: 文件;
  /** 移动到回收站时间  */
  recycleTime?: string;
  /** 总数  */
  total?: number;
  /** 更新时间  */
  updatedAt?: string;
};

export type 文章 = {
  /** 数据版本  */
  _version?: number;
  /** 文章类型  */
  articleType?: string;
  /** 文章类目  */
  category?: 文章类目;
  /** 评论数  */
  commentCount?: number;
  /** 文章内容  */
  content?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 文章描述  */
  description?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 触点端url  */
  frontUrl?: string;
  /** 文章海报url  */
  headImageUrl?: string;
  /** 唯一标识  */
  id?: number;
  /** 图片  */
  images?: Attachment;
  /** 文章关键字  */
  keyword?: string;
  /** 最后评论/回复时间  */
  lastCommentAt?: string;
  /** 点赞数  */
  likeCount?: number;
  /** 浏览数  */
  lookCount?: number;
  /** 关联Id  */
  relationalIds?: Array<number>;
  /** 关联类型  */
  relationalType?: string;
  /** 排序值  */
  sortNum?: number;
  /** 文章状态  */
  status?: string;
  /** 文章标题  */
  title?: string;
  /** 是否置顶  */
  top?: string;
  /** 置顶时间  */
  topAt?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 文章修改请求 = {
  /** 文章类型  */
  articleType?: string;
  /** 文章类目  */
  categoryId?: number;
  /** 文章内容  */
  content?: string;
  /** 文章描述  */
  description?: string;
  /** 文章海报url  */
  headImageUrl?: string;
  /** id  */
  id?: number;
  /** 图片  */
  images?: Attachment;
  /** 文章关键字  */
  keyword?: string;
  /** 关联Id  */
  relationalIds?: Array<number>;
  /** 关联类型  */
  relationalType?: string;
  /** 排序值  */
  sortNum?: number;
  /** 文章标题  */
  title?: string;
  /** 是否置顶  */
  top?: string;
  /** 用户  */
  userId?: number;
};

export type 文章分类精简信息 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 类目名称  */
  name?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 文章创建请求 = {
  /** 文章类型  */
  articleType?: string;
  /** 文章类目  */
  categoryId?: number;
  /** 文章内容  */
  content?: string;
  /** 文章描述  */
  description?: string;
  /** 文章海报url  */
  headImageUrl?: string;
  /** 图片  */
  images?: Attachment;
  /** 文章关键字  */
  keyword?: string;
  /** 关联Id  */
  relationalIds?: Array<number>;
  /** 关联类型  */
  relationalType?: string;
  /** 排序值  */
  sortNum?: number;
  /** 文章状态  */
  status?: string;
  /** 文章标题  */
  title?: string;
  /** 是否置顶  */
  top?: string;
};

export type 文章删除请求 = {
  /** ID  */
  id?: number;
  /** IDS  */
  ids?: Array<number>;
  /** 用户  */
  userId?: number;
};

export type 文章类目 = {
  /** 数据版本  */
  _version?: number;
  /** 当前类目下的文章数  */
  articleNum?: number;
  /** categoryType  */
  categoryType?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 类目描述  */
  description?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 是否有子节点  */
  hasChildren?: boolean;
  /** 唯一标识  */
  id?: number;
  /** 分页中是否是第一页的第一个  */
  isFirst?: boolean;
  /** 分页中是否是最后一页的最后一个  */
  isLast?: boolean;
  /** 类目层级  */
  level?: number;
  /** 类目名称  */
  name?: string;
  /** 父级类目  */
  parent?: 文章类目;
  /** 排序值  */
  sortNum?: number;
  /** 类目状态  */
  status?: string;
  /** 子类目  */
  subCategories?: Array<文章类目>;
  /** 更新时间  */
  updatedAt?: string;
};

export type 文章精简信息 = {
  /** 数据版本  */
  _version?: number;
  /** 分类  */
  category?: 文章分类精简信息;
  /** 评论数  */
  commentCount?: number;
  /** 关注数  */
  concernCount?: number;
  /** 文章内容  */
  content?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 文章描述  */
  description?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 收藏数  */
  favoritesCount?: number;
  /** 文章海报url  */
  headImageUrl?: string;
  /** ID  */
  id?: number;
  /** 文章关键字  */
  keyword?: string;
  /** 点赞数  */
  likeCount?: number;
  /** 浏览数  */
  lookCount?: number;
  /** 已经操作过的操作类型  */
  operated?: Array<string>;
  /** 文章状态  */
  status?: string;
  /** 文章标题  */
  title?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 文章评论 = {
  /** 数据版本  */
  _version?: number;
  /** 文章信息  */
  article?: 文章;
  /** 评论信息  */
  comment?: 评论;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 更新时间  */
  updatedAt?: string;
};

export type 是否已经操作过目标主体 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 已经操作过的操作类型  */
  operated?: Array<string>;
  /** 目标主体Id  */
  targetId?: number;
  /** 目标主体类型  */
  targetType?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 用户倾向 = {
  /** 数据版本  */
  _version?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 唯一标识  */
  id?: number;
  /** 操作类型  */
  operationType?: string;
  /** 操作人  */
  operator?: User;
  /** 目标主体Id  */
  targetId?: number;
  /** 目标主体所属用户  */
  targetOwner?: User;
  /** 目标主体类型  */
  targetType?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 用户倾向取消请求 = {
  /** ID  */
  id?: number;
  /** 操作类型  */
  opType?: string;
  /** 用户  */
  operator?: User_7;
  /** 目标主体类型  */
  targetType?: string;
};

export type 用户倾向取消请求_1 = {
  /** ID  */
  id?: number;
  /** 操作类型  */
  opType?: string;
  /** 用户  */
  operator?: User_7;
  /** 目标主体类型  */
  targetType?: string;
};

export type 用户倾向新增请求 = {
  /** 操作类型  */
  opType?: string;
  /** 用户  */
  operator?: User_5;
  /** 目标主体Id  */
  targetId?: number;
  /** 目标主体类型  */
  targetType?: string;
};

export type 用户倾向统计 = {
  /** 数据版本  */
  _version?: number;
  /** 平均评分  */
  averageRate?: number;
  /** 评论数  */
  commentCount?: number;
  /** 关注数  */
  concernCount?: number;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 收藏数  */
  favoritesCount?: number;
  /** 精选数量  */
  featureCount?: number;
  /** 带图数量  */
  hasImagesCount?: number;
  /** 带追评数量  */
  hasReviewCount?: number;
  /** 唯一标识  */
  id?: number;
  /** 点赞数  */
  likeCount?: number;
  /** 浏览数  */
  lookCount?: number;
  /** 回复数  */
  replyCommentCount?: number;
  /** 目标主体Id  */
  targetId?: number;
  /** 目标主体类型  */
  targetType?: string;
  /** 更新时间  */
  updatedAt?: string;
};

export type 评论 = {
  /** 数据版本  */
  _version?: number;
  /** 回复的数量  */
  childrenCount?: number;
  /** 评论接受者  */
  commentRecipient?: User;
  /** 评论人  */
  commentator?: User;
  /** 评论人类型  */
  commentatorType?: string;
  /** 评论内容  */
  content?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 额外信息  */
  extra?: Record<string, unknown>;
  /** 是否有图  */
  hasImage?: boolean;
  /** 是否有追评  */
  hasReview?: boolean;
  /** 唯一标识  */
  id?: number;
  /** 评论图片  */
  images?: Attachment;
  /** 是否精选  */
  isFeature?: boolean;
  /** 点赞数  */
  likeCount?: number;
  /** 父节点  */
  parentId?: number;
  /** 回复目标状态是否已发布  */
  postIsPublish?: boolean;
  /** 评分  */
  rateDict?: string;
  /** 回复目标内容  */
  refContent?: string;
  /** 回复信息  */
  replyComments?: Array<评论>;
  /** 追评信息  */
  reviewComments?: Array<评论>;
  /** 状态  */
  statusDict?: string;
  /** 目标主体id  */
  targetId?: number;
  /** 目标主体拥有者  */
  targetOwner?: User;
  /** 目标主体类型  */
  targetType?: string;
  /** 根节点  */
  topId?: number;
  /** 更新时间  */
  updatedAt?: string;
};

export type 评论创建请求 = {
  /** 评论接受者  */
  commentRecipient?: User_4;
  /** 评论人  */
  commentator?: User_4;
  /** 评论人类型  */
  commentatorType?: string;
  /** 评论内容  */
  content?: string;
  /** 评论图片  */
  images?: Attachment;
  /** 是否精选  */
  isFeature?: boolean;
  /** 父节点  */
  parentId?: number;
  /** 评分  */
  rateDict?: string;
  /** 状态  */
  statusDict?: string;
  /** 目标主体id  */
  targetId?: number;
  /** 目标主体拥有者  */
  targetOwner?: User_4;
  /** 目标主体类型  */
  targetType?: string;
  /** 根节点  */
  topId?: number;
};

export type 评论创建请求_1 = {
  /** 评论接受者  */
  commentRecipient?: User_4;
  /** 评论人  */
  commentator?: User_4;
  /** 评论人类型  */
  commentatorType?: string;
  /** 评论内容  */
  content?: string;
  /** 评论图片  */
  images?: Attachment;
  /** 是否精选  */
  isFeature?: boolean;
  /** 父节点  */
  parentId?: number;
  /** 评分  */
  rateDict?: string;
  /** 状态  */
  statusDict?: string;
  /** 目标主体id  */
  targetId?: number;
  /** 目标主体拥有者  */
  targetOwner?: User_4;
  /** 目标主体类型  */
  targetType?: string;
  /** 根节点  */
  topId?: number;
};

export type 评论创建请求_2 = {
  /** 评论接受者  */
  commentRecipient?: User_4;
  /** 评论人  */
  commentator?: User_4;
  /** 评论人类型  */
  commentatorType?: string;
  /** 评论内容  */
  content?: string;
  /** 评论图片  */
  images?: Attachment;
  /** 是否精选  */
  isFeature?: boolean;
  /** 父节点  */
  parentId?: number;
  /** 评分  */
  rateDict?: string;
  /** 状态  */
  statusDict?: string;
  /** 目标主体id  */
  targetId?: number;
  /** 目标主体拥有者  */
  targetOwner?: User_4;
  /** 目标主体类型  */
  targetType?: string;
  /** 根节点  */
  topId?: number;
};

export type 评论根据Id修改请求 = {
  /** 评论人  */
  commentator?: User_3;
  /** ID  */
  id?: number;
};
