/* eslint-disable */

import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description 清理ACL缓存
 */
export function GetApiAclAclCacheClear(
  payload: GetApiAclAclCacheClearParameters
): Promise<Responseboolean> {
  const path = "/api/acl/acl-cache/clear";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 应用管理-创建应用
 */
export function PostApiAclAppCreate(
  payload: PostApiAclAppCreateParameters
): Promise<ResponseAppInfo> {
  const path = "/api/acl/app/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 应用管理-删除应用
 */
export function PostApiAclAppDelete(
  payload: PostApiAclAppDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/app/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 应用管理-查询应用详情
 */
export function GetApiAclAppDetail(
  payload: GetApiAclAppDetailParameters
): Promise<ResponseAppInfo> {
  const path = "/api/acl/app/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 应用管理-检查应用是否存在
 */
export function PostApiAclAppExist(
  payload: PostApiAclAppExistParameters
): Promise<Responseboolean> {
  const path = "/api/acl/app/exist";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 应用管理-分页查询项目下的应用
 */
export function GetApiAclAppPaging(
  payload: GetApiAclAppPagingParameters
): Promise<ResponsePagingAppInfo> {
  const path = "/api/acl/app/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 应用管理-更新应用
 */
export function PostApiAclAppUpdate(
  payload: PostApiAclAppUpdateParameters
): Promise<Responseboolean> {
  const path = "/api/acl/app/update";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 角色授权-添加角色授权
 */
export function PostApiAclAuthorizeRoleAdd(
  payload: PostApiAclAuthorizeRoleAddParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/add";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 删除批量业务节点的角色关联
 */
export function PostApiAclAuthorizeRoleBatchBizNodeDeleteRoleRelations(
  payload: PostApiAclAuthorizeRoleBatchBizNodeDeleteRoleRelationsParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/batchBizNodeDeleteRoleRelations";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description clearAclUserRoleCache
 */
export function PostApiAclAuthorizeRoleClearAclUserRoleCache(
  payload: PostApiAclAuthorizeRoleClearAclUserRoleCacheParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/clearAclUserRoleCache";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 批量建立业务节点和角色关联关系
 */
export function PostApiAclAuthorizeRoleCreateRoleRelations(
  payload: PostApiAclAuthorizeRoleCreateRoleRelationsParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/createRoleRelations";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 创建角色和目标对象的关联关系
 */
export function PostApiAclAuthorizeRoleCreateRoleRelationsByRoleId(
  payload: PostApiAclAuthorizeRoleCreateRoleRelationsByRoleIdParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/createRoleRelationsByRoleId";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 角色授权-删除角色授权
 */
export function PostApiAclAuthorizeRoleDelete(
  payload: PostApiAclAuthorizeRoleDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 直接删除节点和目标对象的关联关系
 */
export function PostApiAclAuthorizeRoleDeleteRoleRelations(
  payload: PostApiAclAuthorizeRoleDeleteRoleRelationsParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/deleteRoleRelations";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 角色授权-编辑角色
 */
export function PostApiAclAuthorizeRoleEdit(
  payload: PostApiAclAuthorizeRoleEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 角色关系表扩展字段分页查询
 */
export function GetApiAclAuthorizeRoleExtendPaging(
  payload: GetApiAclAuthorizeRoleExtendPagingParameters
): Promise<Response分页查询结果RoleRelationUserInfo> {
  const path = "/api/acl/authorize/role/extend/paging";
  return request({ path, payload, payloadIn: "body", method: "GET" });
}

/**
 * @description 角色授权-分页查询已经授权的角色
 */
export function GetApiAclAuthorizeRoleFindWithCreateby(
  payload: GetApiAclAuthorizeRoleFindWithCreatebyParameters
): Promise<ResponseListRoleInfo> {
  const path = "/api/acl/authorize/role/find-with-createby";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 根据biz对象查询角色关联关系
 */
export function GetApiAclAuthorizeRoleFindRoleRelationByBiz(
  payload: GetApiAclAuthorizeRoleFindRoleRelationByBizParameters
): Promise<ResponseListRoleRelationInfo> {
  const path = "/api/acl/authorize/role/findRoleRelationByBiz";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色授权-分页查询已经授权的角色
 */
export function GetApiAclAuthorizeRolePaging(
  payload: GetApiAclAuthorizeRolePagingParameters
): Promise<Response分页查询结果RoleRelationPagingInfo> {
  const path = "/api/acl/authorize/role/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色授权-分页查询未授权的角色
 */
export function GetApiAclAuthorizeRolePagingUnauthorized(
  payload: GetApiAclAuthorizeRolePagingUnauthorizedParameters
): Promise<Response分页查询结果RoleUnAuthorizedInfo> {
  const path = "/api/acl/authorize/role/paging/unauthorized";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色授权-编辑角色(2)
 */
export function PostApiAclAuthorizeRoleUpdateRoleRelations(
  payload: PostApiAclAuthorizeRoleUpdateRoleRelationsParameters
): Promise<Responseboolean> {
  const path = "/api/acl/authorize/role/updateRoleRelations";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 查询所有权限
 */
export function GetApiAclClientPermissionAll(
  payload: GetApiAclClientPermissionAllParameters
): Promise<ResponseQueryAllPermissionsInfo> {
  const path = "/api/acl/client/permission/all";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 获取用户所有权限点
 */
export function PostApiAclClientPermissionAll(
  payload: PostApiAclClientPermissionAllParameters
): Promise<ResponseListAuthorizationInfo> {
  const path = "/api/acl/client/permission/all";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限批量鉴权
 */
export function PostApiAclClientPermissionAuth(
  payload: PostApiAclClientPermissionAuthParameters
): Promise<Responseboolean> {
  const path = "/api/acl/client/permission/auth";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限点批量鉴权
 */
export function PostApiAclClientPermissionAuthentication(
  payload: PostApiAclClientPermissionAuthenticationParameters
): Promise<ResponseAuthenticationInfo> {
  const path = "/api/acl/client/permission/authentication";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 数据权限查询
 */
export function PostApiAclClientPermissionDataRuleQuery(
  payload: PostApiAclClientPermissionDataRuleQueryParameters
): Promise<ResponseDataPermissionAuthInfo> {
  const path = "/api/acl/client/permission/data/rule/query";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description url批量鉴权
 */
export function PostApiAclClientPermissionUrlAuth(
  payload: PostApiAclClientPermissionUrlAuthParameters
): Promise<ResponseAuthenticationInfo> {
  const path = "/api/acl/client/permission/url/auth";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description grant DataPermission to role
 */
export function PostApiAclDataPermissionGrant(
  payload: PostApiAclDataPermissionGrantParameters
): Promise<Responseboolean> {
  const path = "/api/acl/data-permission/grant";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Query granted DataPermission by role id
 */
export function GetApiAclDataPermissionGranted(
  payload: GetApiAclDataPermissionGrantedParameters
): Promise<ResponseRoleGrantDataPermission> {
  const path = "/api/acl/data-permission/granted";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description findRoleBusinessDataPermissionGrantedState
 */
export function GetApiAclDataPermissionGrantedStateRoleByRoleId(
  payload: GetApiAclDataPermissionGrantedStateRoleByRoleIdParameters
): Promise<ResponseSetlong> {
  const path = `/api/acl/data-permission/granted-state/role/${payload["roleId"]}`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description saveRoleDataPermission
 */
export function PostApiAclDataPermissionRoleByRoleId(
  payload: PostApiAclDataPermissionRoleByRoleIdParameters
): Promise<Responseboolean> {
  const path = `/api/acl/data-permission/role/${payload["roleId"]}`;
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description findAllInheritedRoleGrantDataPermission
 */
export function GetApiAclDataPermissionRoleByRoleIdPermissionByPermissionId(
  payload: GetApiAclDataPermissionRoleByRoleIdPermissionByPermissionIdParameters
): Promise<ResponseListRoleGrantDataPermission> {
  const path = `/api/acl/data-permission/role/${payload["roleId"]}/permission/${payload["permissionId"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description 查询用户数据权限
 */
export function GetApiAclDataPermissionUserByUserIdModelByModelKey(
  payload: GetApiAclDataPermissionUserByUserIdModelByModelKeyParameters
): Promise<ResponseModelDataPermission> {
  const path = `/api/acl/data-permission/user/${payload["userId"]}/model/${payload["modelKey"]}`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 查询数据权限demo树
 */
export function GetApiAclDemoTree(
  payload: GetApiAclDemoTreeParameters
): Promise<ResponseMapstringobject> {
  const path = "/api/acl/demo/tree";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-校验权限分组是否存在
 */
export function GetApiAclFeaturePermissionGroupCheck(
  payload: GetApiAclFeaturePermissionGroupCheckParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/group/check";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-创建权限分组
 */
export function PostApiAclFeaturePermissionGroupCreate(
  payload: PostApiAclFeaturePermissionGroupCreateParameters
): Promise<Responselong> {
  const path = "/api/acl/feature/permission/group/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-删除权限分组
 */
export function PostApiAclFeaturePermissionGroupDelete(
  payload: PostApiAclFeaturePermissionGroupDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/group/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-查询权限分组详情
 */
export function GetApiAclFeaturePermissionGroupDetail(
  payload: GetApiAclFeaturePermissionGroupDetailParameters
): Promise<ResponseFeatureGroupInfo> {
  const path = "/api/acl/feature/permission/group/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-修改权限分组
 */
export function PostApiAclFeaturePermissionGroupEdit(
  payload: PostApiAclFeaturePermissionGroupEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/group/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-创建分组下子功能权限
 */
export function PostApiAclFeaturePermissionGroupPermissionCreate(
  payload: PostApiAclFeaturePermissionGroupPermissionCreateParameters
): Promise<Responselong> {
  const path = "/api/acl/feature/permission/group/permission/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-批量创建功能权限
 */
export function PostApiAclFeaturePermissionPermissionBatchCreate(
  payload: PostApiAclFeaturePermissionPermissionBatchCreateParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/permission/batch-create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-校验功能权限是否存在
 */
export function GetApiAclFeaturePermissionPermissionCheck(
  payload: GetApiAclFeaturePermissionPermissionCheckParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/permission/check";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-创建应用或者权限下子功能权限
 */
export function PostApiAclFeaturePermissionPermissionCreate(
  payload: PostApiAclFeaturePermissionPermissionCreateParameters
): Promise<ResponsePermissionInfo> {
  const path = "/api/acl/feature/permission/permission/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-删除功能权限
 */
export function PostApiAclFeaturePermissionPermissionDelete(
  payload: PostApiAclFeaturePermissionPermissionDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/permission/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-查询功能权限详情
 */
export function GetApiAclFeaturePermissionPermissionDetail(
  payload: GetApiAclFeaturePermissionPermissionDetailParameters
): Promise<ResponsePermissionInfo> {
  const path = "/api/acl/feature/permission/permission/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-修改功能权限
 */
export function PostApiAclFeaturePermissionPermissionEdit(
  payload: PostApiAclFeaturePermissionPermissionEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/feature/permission/permission/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-分页查询权限列表
 */
export function PostApiAclFeaturePermissionPermissionPaging(
  payload: PostApiAclFeaturePermissionPermissionPagingParameters
): Promise<ResponsePagingPermissionInfo> {
  const path = "/api/acl/feature/permission/permission/paging";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 功能权限管理-查询权限树（不带选中状态,用于功能权限管理）
 */
export function GetApiAclFeaturePermissionTree(
  payload: GetApiAclFeaturePermissionTreeParameters
): Promise<ResponseListFeaturePermissionTreeInfo> {
  const path = "/api/acl/feature/permission/tree";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-根据授权类型查询权限树
 */
export function GetApiAclFeaturePermissionTreeChecked(
  payload: GetApiAclFeaturePermissionTreeCheckedParameters
): Promise<ResponseListFeaturePermissionTreeInfo> {
  const path = "/api/acl/feature/permission/tree/checked";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 功能权限管理-根据用户查询权限树
 */
export function GetApiAclFeaturePermissionTreeCheckedByUser(
  payload: GetApiAclFeaturePermissionTreeCheckedByUserParameters
): Promise<ResponseListFeaturePermissionTreeInfo> {
  const path = "/api/acl/feature/permission/tree/checked-by-user";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description saveDefaultAuthRule
 */
export function PostApiAclGlobalDataPermissionDefaultAuthRule(
  payload: PostApiAclGlobalDataPermissionDefaultAuthRuleParameters
): Promise<Responseboolean> {
  const path = "/api/acl/global-data-permission/default-auth-rule";
  const payloadIn = { query: ["roleId"], body: ["globalDataPermissionList"] };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 根据id获取
 */
export function GetApiAclGlobalDataPermissionFindByRole(
  payload: GetApiAclGlobalDataPermissionFindByRoleParameters
): Promise<ResponseListGlobalDataPermissionInfo> {
  const path = "/api/acl/global-data-permission/find-by-role";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description authenticateForRresource
 */
export function PostApiAclPermissionAuthenticateForResource(
  payload: PostApiAclPermissionAuthenticateForResourceParameters
): Promise<boolean> {
  const path = "/api/acl/permission/authenticate-for-resource";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 查询数据权限详情
 */
export function GetApiAclPermissionAuthorizationDetail(
  payload: GetApiAclPermissionAuthorizationDetailParameters
): Promise<ResponseFindPermissionAuthorizationResponse> {
  const path = "/api/acl/permission/authorization/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description createPermission
 */
export function PostApiAclPermissionCreate(
  payload: PostApiAclPermissionCreateParameters
): Promise<PermissionInfo> {
  const path = "/api/acl/permission/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description deletePermission
 */
export function PostApiAclPermissionDelete(
  payload: PostApiAclPermissionDeleteParameters
): Promise<boolean> {
  const path = "/api/acl/permission/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 为指定类型指定对象授权
 */
export function PostApiAclPermissionGrant(
  payload: PostApiAclPermissionGrantParameters
): Promise<ResponseListPermissionAuthorizationInfo> {
  const path = "/api/acl/permission/grant";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description listPermission
 */
export function PostApiAclPermissionList(
  payload: PostApiAclPermissionListParameters
): Promise<Array<PermissionInfo>> {
  const path = "/api/acl/permission/list";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description updatePermission
 */
export function PatchApiAclPermissionUpdate(
  payload: PatchApiAclPermissionUpdateParameters
): Promise<boolean> {
  const path = "/api/acl/permission/update";
  return request({ path, payload, payloadIn: "body", method: "PATCH" });
}

/**
 * @description 项目管理-校验查询是否存在
 */
export function GetApiAclProjectCheck(
  payload: GetApiAclProjectCheckParameters
): Promise<Responseboolean> {
  const path = "/api/acl/project/check";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 项目管理-创建项目
 */
export function PostApiAclProjectCreate(
  payload: PostApiAclProjectCreateParameters
): Promise<ResponseProjectInfo> {
  const path = "/api/acl/project/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 项目管理-删除项目
 */
export function PostApiAclProjectDelete(
  payload: PostApiAclProjectDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/project/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 项目管理-查询项目详情
 */
export function GetApiAclProjectDetail(
  payload: GetApiAclProjectDetailParameters
): Promise<ResponseProjectInfo> {
  const path = "/api/acl/project/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 项目管理-修改项目信息
 */
export function PostApiAclProjectEdit(
  payload: PostApiAclProjectEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/project/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 项目管理-通过名称模糊查询项目列表
 */
export function GetApiAclProjectFuzzy(
  payload: GetApiAclProjectFuzzyParameters
): Promise<ResponseListProjectInfo> {
  const path = "/api/acl/project/fuzzy";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 项目管理-查询查询项目列表
 */
export function GetApiAclProjectList(
  payload: GetApiAclProjectListParameters
): Promise<ResponseListProjectInfo> {
  const path = "/api/acl/project/list";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 项目管理-分页查询查询项目列表
 */
export function GetApiAclProjectPaging(
  payload: GetApiAclProjectPagingParameters
): Promise<Response分页查询结果ProjectInfo> {
  const path = "/api/acl/project/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色管理-查询所有项目对应的角色
 */
export function GetApiAclRoleAll(): Promise<ResponseList项目和它下面对应的角色> {
  const path = "/api/acl/role/all";
  return request({ path, method: "GET" });
}

/**
 * @description 角色管理-校验应用下角色是否存在
 */
export function GetApiAclRoleCheck(
  payload: GetApiAclRoleCheckParameters
): Promise<Responseboolean> {
  const path = "/api/acl/role/check";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色管理-创建角色
 */
export function PostApiAclRoleCreate(
  payload: PostApiAclRoleCreateParameters
): Promise<ResponseRoleInfo> {
  const path = "/api/acl/role/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 角色管理-删除角色
 */
export function PostApiAclRoleDelete(
  payload: PostApiAclRoleDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/role/delete";
  return request({ path, payload, payloadIn: "query", method: "POST" });
}

/**
 * @description 角色管理-查询角色详情
 */
export function GetApiAclRoleDetail(
  payload: GetApiAclRoleDetailParameters
): Promise<ResponseRoleInfo> {
  const path = "/api/acl/role/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色管理-查询角色列表详情
 */
export function GetApiAclRoleDetails(
  payload: GetApiAclRoleDetailsParameters
): Promise<ResponseListRoleInfo> {
  const path = "/api/acl/role/details";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色管理-修改角色
 */
export function PostApiAclRoleEdit(
  payload: PostApiAclRoleEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/role/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据角色id集合查询角色列表
 */
export function GetApiAclRoleListRolesByRoleIds(
  payload: GetApiAclRoleListRolesByRoleIdsParameters
): Promise<ResponseListRoleInfo> {
  const path = "/api/acl/role/listRolesByRoleIds";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 角色管理-查询角色列表
 */
export function GetApiAclRolePaging(
  payload: GetApiAclRolePagingParameters
): Promise<Response分页查询结果RoleInfo> {
  const path = "/api/acl/role/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 分页查询角色信息
 */
export function GetApiAclRolePagingRole(
  payload: GetApiAclRolePagingRoleParameters
): Promise<Response分页查询结果RoleInfo> {
  const path = "/api/acl/role/pagingRole";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 多归属查询分页角色信息
 */
export function GetApiAclRolePagingRoleByAffiliations(
  payload: GetApiAclRolePagingRoleByAffiliationsParameters
): Promise<Response分页查询结果RoleInfo> {
  const path = "/api/acl/role/pagingRoleByAffiliations";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 同步任务管理-创建同步任务
 */
export function PostApiAclSynctaskCreate(
  payload: PostApiAclSynctaskCreateParameters
): Promise<Responselong> {
  const path = "/api/acl/synctask/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 同步任务管理-删除同步任务
 */
export function PostApiAclSynctaskDelete(
  payload: PostApiAclSynctaskDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/synctask/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 同步任务管理-修改同步任务信息
 */
export function PostApiAclSynctaskEdit(
  payload: PostApiAclSynctaskEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/synctask/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 同步任务管理-查找同步任务详情
 */
export function PostApiAclSynctaskFind(
  payload: PostApiAclSynctaskFindParameters
): Promise<ResponseFindSyncTaskDetailInfo> {
  const path = "/api/acl/synctask/find";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 同步任务管理-同步任务列表
 */
export function GetApiAclSynctaskList(
  payload: GetApiAclSynctaskListParameters
): Promise<ResponseListListSyncTaskInfo> {
  const path = "/api/acl/synctask/list";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 同步任务管理-同步同步任务
 */
export function PostApiAclSynctaskSync(
  payload: PostApiAclSynctaskSyncParameters
): Promise<Responseboolean> {
  const path = "/api/acl/synctask/sync";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 授权对象树 - 树上的所有节点详情
 */
export function GetApiAclTreeDetail(
  payload: GetApiAclTreeDetailParameters
): Promise<ResponseFindTreeNodeLevelInfo> {
  const path = "/api/acl/tree/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 授权对象树 - 对象树列表
 */
export function GetApiAclTreeList(
  payload: GetApiAclTreeListParameters
): Promise<ResponseListListTreeInfo> {
  const path = "/api/acl/tree/list";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 授权对象树 - 节点详情
 */
export function GetApiAclTreeNodeDetail(
  payload: GetApiAclTreeNodeDetailParameters
): Promise<ResponseFindTreeNodeDetailInfo> {
  const path = "/api/acl/tree/node/detail";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 授权对象树 - 节点配置编辑
 */
export function PostApiAclTreeNodeEdit(
  payload: PostApiAclTreeNodeEditParameters
): Promise<Responseboolean> {
  const path = "/api/acl/tree/node/edit";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 授权对象树 - 同步对象树
 */
export function PostApiAclTreeSync(
  payload: PostApiAclTreeSyncParameters
): Promise<Responseboolean> {
  const path = "/api/acl/tree/sync";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 可授权用户 - 手工添加列表
 */
export function GetApiAclUserListAddPaging(
  payload: GetApiAclUserListAddPagingParameters
): Promise<ResponsePaging可授权用户> {
  const path = "/api/acl/user/list/add/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 可授权用户 - 授权树列表
 */
export function GetApiAclUserListTreePaging(
  payload: GetApiAclUserListTreePagingParameters
): Promise<ResponsePaging可授权用户> {
  const path = "/api/acl/user/list/tree/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 可授权用户 - 添加用户
 */
export function PostApiAclUserListUserCreate(
  payload: PostApiAclUserListUserCreateParameters
): Promise<Responseboolean> {
  const path = "/api/acl/user/list/user/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 可授权用户 - 删除用户
 */
export function PostApiAclUserListUserDelete(
  payload: PostApiAclUserListUserDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/acl/user/list/user/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 可授权用户 - 查询用户
 */
export function PostApiAclUserListUserFind(
  payload: PostApiAclUserListUserFindParameters
): Promise<ResponseUserFindResponse> {
  const path = "/api/acl/user/list/user/find";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 客户端列表
 */
export function GetApiClientAdminClients(): Promise<Array<ClientInfo>> {
  const path = "/api/client/admin/clients";
  return request({ path, method: "GET" });
}

/**
 * @description 创建客户端
 */
export function PostApiClientAdminCreate(
  payload: PostApiClientAdminCreateParameters
): Promise<ClientInfo> {
  const path = "/api/client/admin/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 销毁客户端
 */
export function PostApiClientAdminDestroy(
  payload: PostApiClientAdminDestroyParameters
): Promise<boolean> {
  const path = "/api/client/admin/destroy";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 验证clientId与secret是否匹配
 */
export function PostApiClientAdminSecretAuth(
  payload: PostApiClientAdminSecretAuthParameters
): Promise<boolean> {
  const path = "/api/client/admin/secret/auth";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description secret更新
 */
export function PostApiClientAdminSecretUpdate(
  payload: PostApiClientAdminSecretUpdateParameters
): Promise<boolean> {
  const path = "/api/client/admin/secret/update";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 客户端信息更新
 */
export function PostApiClientAdminUpdate(
  payload: PostApiClientAdminUpdateParameters
): Promise<boolean> {
  const path = "/api/client/admin/update";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 查找客户端信息
 */
export function GetApiClientAdminByClientIdInfo(
  payload: GetApiClientAdminByClientIdInfoParameters
): Promise<ClientInfo> {
  const path = `/api/client/admin/${payload["clientId"]}/info`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description 通过事件时间获取事件列表
 */
export function PostApiEventLogAdminListEventTime(
  payload: PostApiEventLogAdminListEventTimeParameters
): Promise<Array<EventLogAndUserInfo>> {
  const path = "/api/event-log/admin/list-event-time";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 通过lastId获取最新事件列表
 */
export function PostApiEventLogAdminListLastEvent(
  payload: PostApiEventLogAdminListLastEventParameters
): Promise<Array<EventLogAndUserInfo>> {
  const path = "/api/event-log/admin/list-last-event";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 用户中心前端运行时环境变量
 */
export function GetApiHomeAdminLoginStyle(): Promise<ResponseAdminFrontConfigResponse> {
  const path = "/api/home/admin/login/style";
  return request({ path, method: "GET" });
}

/**
 * @description 获取用户信息V2版本
 */
export function GetApiOauthMe(
  payload: GetApiOauthMeParameters
): Promise<UserInfoV2> {
  const path = "/api/oauth/me";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 获取用户信息V1版本
 */
export function GetApiOauthMeOld(
  payload: GetApiOauthMeOldParameters
): Promise<UserInfoV1> {
  const path = "/api/oauth/me/old";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 认证client token接口
 */
export function GetApiOpenClientAuthorization(
  payload: GetApiOpenClientAuthorizationParameters
): Promise<ClientInfo> {
  const path = "/api/open-client/authorization";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 创建client
 */
export function PostApiOpenClientManagerClient(
  payload: PostApiOpenClientManagerClientParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = "/api/open-client/manager/client";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取client
 */
export function GetApiOpenClientManagerClientByClientId(
  payload: GetApiOpenClientManagerClientByClientIdParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = `/api/open-client/manager/client/${payload["clientId"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description 销毁client
 */
export function DeleteApiOpenClientManagerClientByClientId(
  payload: DeleteApiOpenClientManagerClientByClientIdParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = `/api/open-client/manager/client/${payload["clientId"]}`;
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description 增加权限
 */
export function PostApiOpenClientManagerClientByClientIdAuthority(
  payload: PostApiOpenClientManagerClientByClientIdAuthorityParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = `/api/open-client/manager/client/${payload["clientId"]}/authority`;
  return request({ path, payload, payloadIn: "query", method: "POST" });
}

/**
 * @description 取消权限
 */
export function DeleteApiOpenClientManagerClientByClientIdAuthority(
  payload: DeleteApiOpenClientManagerClientByClientIdAuthorityParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = `/api/open-client/manager/client/${payload["clientId"]}/authority`;
  return request({ path, payload, payloadIn: "query", method: "DELETE" });
}

/**
 * @description 增加授权类型
 */
export function PostApiOpenClientManagerClientByClientIdGrantType(
  payload: PostApiOpenClientManagerClientByClientIdGrantTypeParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = `/api/open-client/manager/client/${payload["clientId"]}/grantType`;
  return request({ path, payload, payloadIn: "query", method: "POST" });
}

/**
 * @description 移除授权类型
 */
export function DeleteApiOpenClientManagerClientByClientIdGrantType(
  payload: DeleteApiOpenClientManagerClientByClientIdGrantTypeParameters
): Promise<{ [key: string]: Record<string, unknown> }> {
  const path = `/api/open-client/manager/client/${payload["clientId"]}/grantType`;
  return request({ path, payload, payloadIn: "query", method: "DELETE" });
}

/**
 * @description client列表
 */
export function GetApiOpenClientManagerClients(): Promise<{
  [key: string]: Record<string, unknown>;
}> {
  const path = "/api/open-client/manager/clients";
  return request({ path, method: "GET" });
}

/**
 * @description grantType授权类型列表
 */
export function GetApiOpenClientManagerGrantTypes(): Promise<{
  [key: string]: Record<string, unknown>;
}> {
  const path = "/api/open-client/manager/grantTypes";
  return request({ path, method: "GET" });
}

/**
 * @description 获取用户信息列表(兼容老接口)
 */
export function GetApiOpenV1Users(
  payload: GetApiOpenV1UsersParameters
): Promise<Array<UserInfoV1>> {
  const path = "/api/open/v1/users";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 分页获取用户信息列表(兼容老接口)
 */
export function GetApiOpenV1UsersPage(
  payload: GetApiOpenV1UsersPageParameters
): Promise<PagingUserInfoV1> {
  const path = "/api/open/v1/users-page";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 获取用户信息(兼容老接口)
 */
export function GetApiOpenV1UsersById(
  payload: GetApiOpenV1UsersByIdParameters
): Promise<UserInfoV1> {
  const path = `/api/open/v1/users/${payload["id"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description 根据用户标识查询(email/手机号/用户名)
 */
export function GetApiOpenV2UsersFindByIdentify(
  payload: GetApiOpenV2UsersFindByIdentifyParameters
): Promise<UserInfoV2> {
  const path = "/api/open/v2/users/find-by-identify";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 根据用户ID列表查找用户
 */
export function GetApiOpenV2UsersFindByIds(
  payload: GetApiOpenV2UsersFindByIdsParameters
): Promise<Array<UserInfoV2>> {
  const path = "/api/open/v2/users/find-by-ids";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 根据email/昵称/用户名/手机号前缀模糊查询
 */
export function GetApiOpenV2UsersFindByPrefix(
  payload: GetApiOpenV2UsersFindByPrefixParameters
): Promise<Array<UserInfoV2>> {
  const path = "/api/open/v2/users/find-by-prefix";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 获取用户信息(V2接口)
 */
export function GetApiOpenV2UsersById(
  payload: GetApiOpenV2UsersByIdParameters
): Promise<UserInfoV2> {
  const path = `/api/open/v2/users/${payload["id"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description 按 parentBizId 搜索获取指定模型单层级的数据
 */
export function PostApiTrantorContainerTreeLoad(
  payload: PostApiTrantorContainerTreeLoadParameters
): Promise<ResponseResultData> {
  const path = "/api/trantor/container/tree/load";
  const payloadIn = {
    query: ["dataActionKey", "modelKey", "parentField", "parentId"],
    body: ["condition", "frontendContext", "queryValues", "result", "search"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 按给定的记录的 id 列表查询数据，额外返回 mainField 链
 */
export function PostApiTrantorContainerTreeLoadIds(
  payload: PostApiTrantorContainerTreeLoadIdsParameters
): Promise<ResponseResultData> {
  const path = "/api/trantor/container/tree/load/ids";
  const payloadIn = {
    query: ["dataActionKey", "ids", "modelKey", "parentField"],
    body: ["condition", "frontendContext", "queryValues", "result", "search"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 按给定的记录的 parentBizId 构建祖先树的数据
 */
export function PostApiTrantorContainerTreeReverseBuild(
  payload: PostApiTrantorContainerTreeReverseBuildParameters
): Promise<ResponseResultData> {
  const path = "/api/trantor/container/tree/reverse-build";
  const payloadIn = {
    query: ["dataActionKey", "modelKey", "parentField", "recordParentId"],
    body: ["condition", "frontendContext", "queryValues", "result", "search"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description reverseBuildPath
 */
export function PostApiTrantorContainerTreeReverseBuildPath(
  payload: PostApiTrantorContainerTreeReverseBuildPathParameters
): Promise<ResponseResultData> {
  const path = "/api/trantor/container/tree/reverse-build-path";
  const payloadIn = {
    query: ["dataActionKey", "id", "limit", "modelKey", "parentField"],
    body: ["condition", "frontendContext", "queryValues", "result", "search"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 按关键字搜索给定模型
 */
export function PostApiTrantorContainerTreeSearch(
  payload: PostApiTrantorContainerTreeSearchParameters
): Promise<ResponseListTreeSearchData> {
  const path = "/api/trantor/container/tree/search";
  const payloadIn = {
    query: [
      "dataActionKey",
      "leafOnly",
      "modelKey",
      "parentField",
      "searchText",
    ],
    body: ["condition", "frontendContext", "queryValues", "result", "search"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 上传并设置用户头像
 */
export function PostApiUserAdminAvatarUpload(
  payload: PostApiUserAdminAvatarUploadParameters
): Promise<boolean> {
  const path = "/api/user/admin/avatar/upload";
  return request({ path, payload, payloadIn: "formData", method: "POST" });
}

/**
 * @description 批量创建用户
 */
export function PostApiUserAdminBatchCreateUser(
  payload: PostApiUserAdminBatchCreateUserParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/batch-create-user";
  const payloadIn = {
    body: ["operatorId", "origin", "relatedAppId", "users"],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 批量冻结用户
 */
export function PostApiUserAdminBatchFreeze(
  payload: PostApiUserAdminBatchFreezeParameters
): Promise<boolean> {
  const path = "/api/user/admin/batchFreeze";
  const payloadIn = {
    body: ["ids", "origin", "relatedAppId"],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 修改用户所有信息
 */
export function PostApiUserAdminChangeFullInfo(
  payload: PostApiUserAdminChangeFullInfoParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/change-full-info";
  const payloadIn = {
    body: [
      "avatar",
      "channel",
      "channelType",
      "email",
      "expireAt",
      "extra",
      "lastLoginAt",
      "mobile",
      "nickname",
      "operatorId",
      "origin",
      "prefix",
      "relatedAppId",
      "source",
      "sourceType",
      "tag",
      "userDetail",
      "username",
    ],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 校验图片验证码-公共接口
 */
export function PostApiUserAdminCheckCaptcha(
  payload: PostApiUserAdminCheckCaptchaParameters
): Promise<boolean> {
  const path = "/api/user/admin/check-captcha";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 检查密码是否设置
 */
export function GetApiUserAdminCheckPwdExist(): Promise<Responseboolean> {
  const path = "/api/user/admin/check-pwd-exist";
  return request({ path, method: "GET" });
}

/**
 * @description 检查密码是否即将过期
 */
export function GetApiUserAdminCheckPwdExpired(
  payload: GetApiUserAdminCheckPwdExpiredParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/check-pwd-expired";
  return request({ path, payload, payloadIn: "body", method: "GET" });
}

/**
 * @description 创建特殊用户
 */
export function PostApiUserAdminCreate(
  payload: PostApiUserAdminCreateParameters
): Promise<Responselong> {
  const path = "/api/user/admin/create";
  const payloadIn = {
    body: [
      "avatar",
      "channel",
      "channelType",
      "confirm",
      "email",
      "enable",
      "expireAt",
      "mobile",
      "newPassword",
      "nickname",
      "oldPassword",
      "operatorId",
      "origin",
      "password",
      "prefix",
      "relatedAppId",
      "source",
      "sourceType",
      "tag",
      "userDetail",
      "username",
    ],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 创建普通用户
 */
export function PostApiUserAdminCreateCommonUser(
  payload: PostApiUserAdminCreateCommonUserParameters
): Promise<Responselong> {
  const path = "/api/user/admin/create-common-user";
  const payloadIn = {
    body: [
      "avatar",
      "channel",
      "channelType",
      "confirm",
      "email",
      "enable",
      "expireAt",
      "mobile",
      "newPassword",
      "nickname",
      "oldPassword",
      "operatorId",
      "origin",
      "password",
      "pk",
      "prefix",
      "relatedAppId",
      "source",
      "sourceType",
      "tag",
      "userDetail",
      "username",
    ],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 创建特殊用户,此接口加入白名单
 */
export function PostApiUserAdminCreateSpecialUser(
  payload: PostApiUserAdminCreateSpecialUserParameters
): Promise<Responselong> {
  const path = "/api/user/admin/create-special-user";
  const payloadIn = {
    body: [
      "avatar",
      "channel",
      "channelType",
      "confirm",
      "email",
      "enable",
      "expireAt",
      "mobile",
      "newPassword",
      "nickname",
      "oldPassword",
      "operatorId",
      "origin",
      "password",
      "prefix",
      "relatedAppId",
      "source",
      "sourceType",
      "tag",
      "userDetail",
      "username",
    ],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 创建普通用户（2）
 */
export function PostApiUserAdminCreateUser(
  payload: PostApiUserAdminCreateUserParameters
): Promise<Responselong> {
  const path = "/api/user/admin/createUser";
  const payloadIn = {
    body: [
      "avatar",
      "channel",
      "channelType",
      "confirm",
      "email",
      "enable",
      "expireAt",
      "mobile",
      "newPassword",
      "nickname",
      "oldPassword",
      "operatorId",
      "origin",
      "password",
      "pk",
      "prefix",
      "relatedAppId",
      "source",
      "sourceType",
      "tag",
      "userDetail",
      "username",
    ],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 获取当前用户
 */
export function GetApiUserAdminCurrentUser(
  payload: GetApiUserAdminCurrentUserParameters
): Promise<ResponseUserInfo> {
  const path = "/api/user/admin/current-user";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 用户注销-发送邮箱验证码
 */
export function PostApiUserAdminDestroySendEmailCode(
  payload: PostApiUserAdminDestroySendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/admin/destroy-send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 用户注销-发送手机验证码
 */
export function PostApiUserAdminDestroySendSmsCode(
  payload: PostApiUserAdminDestroySendSmsCodeParameters
): Promise<boolean> {
  const path = "/api/user/admin/destroy-send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 停用用户
 */
export function PostApiUserAdminDisable(
  payload: PostApiUserAdminDisableParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/disable";
  const payloadIn = {
    body: ["id", "origin", "relatedAppId"],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 启用用户
 */
export function PostApiUserAdminEnable(
  payload: PostApiUserAdminEnableParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/enable";
  const payloadIn = {
    body: ["id", "origin", "relatedAppId"],
    header: ["operatorId"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description 变更用户的用户端信息绑定
 */
export function PostApiUserAdminEndpointChangeRelation(
  payload: PostApiUserAdminEndpointChangeRelationParameters
): Promise<Responseint> {
  const path = "/api/user/admin/endpoint/changeRelation";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 创建应用端信息
 */
export function PostApiUserAdminEndpointCreate(
  payload: PostApiUserAdminEndpointCreateParameters
): Promise<Responselong> {
  const path = "/api/user/admin/endpoint/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 删除应用
 */
export function PostApiUserAdminEndpointDelete(
  payload: PostApiUserAdminEndpointDeleteParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/endpoint/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取应用端列表信息
 */
export function PostApiUserAdminEndpointList(
  payload: PostApiUserAdminEndpointListParameters
): Promise<ResponseListAppInfo> {
  const path = "/api/user/admin/endpoint/list";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取分页应用信息
 */
export function PostApiUserAdminEndpointPaging(
  payload: PostApiUserAdminEndpointPagingParameters
): Promise<ResponsePagingAppInfo> {
  const path = "/api/user/admin/endpoint/paging";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 批量绑定用户和应用
 */
export function PostApiUserAdminEndpointRelate(
  payload: PostApiUserAdminEndpointRelateParameters
): Promise<Responseint> {
  const path = "/api/user/admin/endpoint/relate";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 批量解除用户和应用的绑定
 */
export function PostApiUserAdminEndpointUnbound(
  payload: PostApiUserAdminEndpointUnboundParameters
): Promise<Responseint> {
  const path = "/api/user/admin/endpoint/unbound";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 编辑应用端信息
 */
export function PostApiUserAdminEndpointUpdate(
  payload: PostApiUserAdminEndpointUpdateParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/endpoint/update";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据查询条件列举用户源下的用户
 */
export function PostApiUserAdminEndpointUserList(
  payload: PostApiUserAdminEndpointUserListParameters
): Promise<ResponsePagingUserEndpointInfo> {
  const path = "/api/user/admin/endpoint/user-list";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 通过用户ID列表查询
 */
export function GetApiUserAdminFindByIds(
  payload: GetApiUserAdminFindByIdsParameters
): Promise<ResponseListUserInfo> {
  const path = "/api/user/admin/find-by-ids";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description userid查询用户
 */
export function GetApiUserAdminFindUserById(
  payload: GetApiUserAdminFindUserByIdParameters
): Promise<ResponseUserInfo> {
  const path = "/api/user/admin/findUserById";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description mobile查询用户
 */
export function GetApiUserAdminFindUserByMobile(
  payload: GetApiUserAdminFindUserByMobileParameters
): Promise<ResponseUserInfo> {
  const path = "/api/user/admin/findUserByMobile";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 冻结用户
 */
export function PutApiUserAdminFreezeById(
  payload: PutApiUserAdminFreezeByIdParameters
): Promise<boolean> {
  const path = `/api/user/admin/freeze/${payload["id"]}`;
  return request({ path, payload, payloadIn: "header", method: "PUT" });
}

/**
 * @description 获取图片验证码-公共接口
 */
export function GetApiUserAdminGetCaptcha(): Promise<CaptchaBean> {
  const path = "/api/user/admin/get-captcha";
  return request({ path, method: "GET" });
}

/**
 * @description 获取图片验证码-公共接口
 */
export function GetApiUserAdminGetTenantCaptcha(
  payload: GetApiUserAdminGetTenantCaptchaParameters
): Promise<CaptchaBean> {
  const path = "/api/user/admin/get-tenant-captcha";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 绑定手机号-校验短信验证码并绑定
 */
export function PostApiUserAdminMobileBind(
  payload: PostApiUserAdminMobileBindParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/mobile/bind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 绑定手机号-发送短信验证码
 */
export function PostApiUserAdminMobileBindSendSmsCode(
  payload: PostApiUserAdminMobileBindSendSmsCodeParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/mobile/bind/send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取手机号前缀列表
 */
export function GetApiUserAdminMobileGetMobileprefixlist(): Promise<Responsestring> {
  const path = "/api/user/admin/mobile/get-mobileprefixlist";
  return request({ path, method: "GET" });
}

/**
 * @description 重置手机号-验证新手机号并且完成重置
 */
export function PostApiUserAdminMobileReset(
  payload: PostApiUserAdminMobileResetParameters
): Promise<boolean> {
  const path = "/api/user/admin/mobile/reset";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置手机号-验证码校验
 */
export function PostApiUserAdminMobileResetCheckSmsCode(
  payload: PostApiUserAdminMobileResetCheckSmsCodeParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/admin/mobile/reset/check-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置手机号-手机号发送短信验证码
 */
export function PostApiUserAdminMobileResetSendSms(
  payload: PostApiUserAdminMobileResetSendSmsParameters
): Promise<boolean> {
  const path = "/api/user/admin/mobile/reset/send-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置手机号-手机号发送短信验证码（无需图片验证码，但需要登录）
 */
export function PostApiUserAdminMobileResetSendSmsNoCaptcha(
  payload: PostApiUserAdminMobileResetSendSmsNoCaptchaParameters
): Promise<boolean> {
  const path = "/api/user/admin/mobile/reset/send-sms-no-captcha";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解绑手机号-校验短信验证码并绑定
 */
export function PostApiUserAdminMobileUnbind(
  payload: PostApiUserAdminMobileUnbindParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/mobile/unbind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解绑手机号-发送短信验证码
 */
export function PostApiUserAdminMobileUnbindSendSmsCode(
  payload: PostApiUserAdminMobileUnbindSendSmsCodeParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/mobile/unbind/send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 旧手机号验证码校验(验证归属是否正确)
 */
export function PostApiUserAdminMobileVerifyCheckSmsCode(
  payload: PostApiUserAdminMobileVerifyCheckSmsCodeParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/admin/mobile/verify/check-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 旧手机号发送验证短信验证码（无需图片验证码，但需要登录）
 */
export function PostApiUserAdminMobileVerifySendSms(
  payload: PostApiUserAdminMobileVerifySendSmsParameters
): Promise<boolean> {
  const path = "/api/user/admin/mobile/verify/send-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 创建用户源信息
 */
export function PostApiUserAdminOriginCreate(
  payload: PostApiUserAdminOriginCreateParameters
): Promise<number> {
  const path = "/api/user/admin/origin/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 删除用户源信息
 */
export function PostApiUserAdminOriginDelete(
  payload: PostApiUserAdminOriginDeleteParameters
): Promise<boolean> {
  const path = "/api/user/admin/origin/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据id查询用户源信息
 */
export function GetApiUserAdminOriginFindById(
  payload: GetApiUserAdminOriginFindByIdParameters
): Promise<OriginInfo> {
  const path = "/api/user/admin/origin/find-by-id";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 根据key查询用户源信息
 */
export function GetApiUserAdminOriginFindByKey(
  payload: GetApiUserAdminOriginFindByKeyParameters
): Promise<OriginInfo> {
  const path = "/api/user/admin/origin/find-by-key";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 查询所有用户源信息
 */
export function GetApiUserAdminOriginList(
  payload: GetApiUserAdminOriginListParameters
): Promise<Array<OriginInfo>> {
  const path = "/api/user/admin/origin/list";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 分页查询用户源信息
 */
export function GetApiUserAdminOriginPaging(
  payload: GetApiUserAdminOriginPagingParameters
): Promise<PagingOriginInfo> {
  const path = "/api/user/admin/origin/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 更新用户源信息
 */
export function PostApiUserAdminOriginUpdate(
  payload: PostApiUserAdminOriginUpdateParameters
): Promise<boolean> {
  const path = "/api/user/admin/origin/update";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 分页查询用户
 */
export function GetApiUserAdminPaging(
  payload: GetApiUserAdminPagingParameters
): Promise<PagingUserInfo> {
  const path = "/api/user/admin/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 分页查询用户
 */
export function GetApiUserAdminPagingUids(
  payload: GetApiUserAdminPagingUidsParameters
): Promise<PagingUserInfo> {
  const path = "/api/user/admin/paging-uids";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 修改密码
 */
export function PutApiUserAdminPasswordChangePassword(
  payload: PutApiUserAdminPasswordChangePasswordParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/change-password";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 忘记密码-通过邮件重置密码
 */
export function PostApiUserAdminPasswordResetByEmail(
  payload: PostApiUserAdminPasswordResetByEmailParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/reset-by-email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-通过短信重置密码
 */
export function PostApiUserAdminPasswordResetBySms(
  payload: PostApiUserAdminPasswordResetBySmsParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/reset-by-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-通过短信验证token重置密码
 */
export function PostApiUserAdminPasswordResetBySmsVerifyToken(
  payload: PostApiUserAdminPasswordResetBySmsVerifyTokenParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/reset-by-sms-verify-token";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-通过短信、邮箱,验证token重置密码
 */
export function PostApiUserAdminPasswordResetByVerifyToken(
  payload: PostApiUserAdminPasswordResetByVerifyTokenParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/reset-by-verify-token";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-邮箱验证码校验
 */
export function PostApiUserAdminPasswordResetEmailCodeVerify(
  payload: PostApiUserAdminPasswordResetEmailCodeVerifyParameters
): Promise<EmailCodeVerifyInfo> {
  const path = "/api/user/admin/password/reset-email-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置密码
 */
export function PostApiUserAdminPasswordResetPassword(
  payload: PostApiUserAdminPasswordResetPasswordParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/reset-password";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-短信验证码校验
 */
export function PostApiUserAdminPasswordResetSmsCodeVerify(
  payload: PostApiUserAdminPasswordResetSmsCodeVerifyParameters
): Promise<SmsCodeVerifyInfo> {
  const path = "/api/user/admin/password/reset-sms-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-发送邮件验证码
 */
export function PostApiUserAdminPasswordSendEmail(
  payload: PostApiUserAdminPasswordSendEmailParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/send-email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-发送短信验证码
 */
export function PostApiUserAdminPasswordSendSms(
  payload: PostApiUserAdminPasswordSendSmsParameters
): Promise<boolean> {
  const path = "/api/user/admin/password/send-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 授权登录
 */
export function PostApiUserAdminQrcodeAuthorize(
  payload: PostApiUserAdminQrcodeAuthorizeParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/qrcode/authorize";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 取消授权登录
 */
export function PostApiUserAdminQrcodeCancelAuthorize(
  payload: PostApiUserAdminQrcodeCancelAuthorizeParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/qrcode/cancel-authorize";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取二维码
 */
export function GetApiUserAdminQrcodeGetQrCode(): Promise<ResponseQrCodeInfo> {
  const path = "/api/user/admin/qrcode/get-qr-code";
  return request({ path, method: "GET" });
}

/**
 * @description 查询二维码状态
 */
export function GetApiUserAdminQrcodeQuireQrCodeState(
  payload: GetApiUserAdminQrcodeQuireQrCodeStateParameters
): Promise<ResponseQrCodeQuireInfo> {
  const path = "/api/user/admin/qrcode/quire-qr-code-state";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 解析二维码
 */
export function GetApiUserAdminQrcodeResolveByUid(
  payload: GetApiUserAdminQrcodeResolveByUidParameters
): Promise<Responseboolean> {
  const path = `/api/user/admin/qrcode/resolve/${payload["uid"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description 用户缓存清理
 */
export function PutApiUserAdminRemoveCacheById(
  payload: PutApiUserAdminRemoveCacheByIdParameters
): Promise<Responseboolean> {
  const path = `/api/user/admin/remove-cache/${payload["id"]}`;
  return request({ path, payload, payloadIn: "header", method: "PUT" });
}

/**
 * @description 根据id等信息查询三方用户信息
 */
export function GetApiUserAdminThirdPartInfoFindByUserIdTypeAppId(
  payload: GetApiUserAdminThirdPartInfoFindByUserIdTypeAppIdParameters
): Promise<ThirdAccountInfo> {
  const path = "/api/user/admin/third-part-info/find-by-userId-type-appId";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 通过token获取用户信息
 */
export function PostApiUserAdminToken(
  payload: PostApiUserAdminTokenParameters
): Promise<UserInfo> {
  const path = "/api/user/admin/token";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description trantor跳转登录页
 */
export function GetApiUserAdminTrantorLogin(
  payload: GetApiUserAdminTrantorLoginParameters
): Promise<void> {
  const path = "/api/user/admin/trantor/login";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description trantor退出登录接口
 */
export function GetApiUserAdminTrantorLogout(
  payload: GetApiUserAdminTrantorLogoutParameters
): Promise<void> {
  const path = "/api/user/admin/trantor/logout";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 用户自助解冻-手机号
 */
export function PostApiUserAdminUnFreezeByMobile(
  payload: PostApiUserAdminUnFreezeByMobileParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/unFreeze-by-mobile";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 用户自助解冻发送手机验证码接口
 */
export function PostApiUserAdminUnfreezeSendSmsCode(
  payload: PostApiUserAdminUnfreezeSendSmsCodeParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/unfreeze-send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解冻用户
 */
export function PutApiUserAdminUnfreezeById(
  payload: PutApiUserAdminUnfreezeByIdParameters
): Promise<boolean> {
  const path = `/api/user/admin/unfreeze/${payload["id"]}`;
  return request({ path, payload, payloadIn: "header", method: "PUT" });
}

/**
 * @description 用户注销
 */
export function PutApiUserAdminUserDestroy(
  payload: PutApiUserAdminUserDestroyParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/user-destroy";
  return request({ path, payload, payloadIn: "query", method: "PUT" });
}

/**
 * @description 验证邮箱注销用户
 */
export function PutApiUserAdminUserDestroyByEmail(
  payload: PutApiUserAdminUserDestroyByEmailParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/user-destroy-by-email";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 验证手机号注销用户
 */
export function PutApiUserAdminUserDestroyByMobile(
  payload: PutApiUserAdminUserDestroyByMobileParameters
): Promise<Responseboolean> {
  const path = "/api/user/admin/user-destroy-by-mobile";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 获取用户信息接口
 */
export function GetApiUserAdminUserInfo(): Promise<UserInfo> {
  const path = "/api/user/admin/user-info";
  return request({ path, method: "GET" });
}

/**
 * @description 更新用户信息
 */
export function PutApiUserAdminUserInfo(
  payload: PutApiUserAdminUserInfoParameters
): Promise<boolean> {
  const path = "/api/user/admin/user-info";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 上传并设置用户头像
 */
export function PostApiUserWebAvatarUpload(
  payload: PostApiUserWebAvatarUploadParameters
): Promise<boolean> {
  const path = "/api/user/web/avatar/upload";
  return request({ path, payload, payloadIn: "formData", method: "POST" });
}

/**
 * @description 校验图片验证码-公共接口
 */
export function PostApiUserWebCheckCaptcha(
  payload: PostApiUserWebCheckCaptchaParameters
): Promise<boolean> {
  const path = "/api/user/web/check-captcha";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 检查密码是否设置
 */
export function GetApiUserWebCheckPwdExist(): Promise<Responseboolean> {
  const path = "/api/user/web/check-pwd-exist";
  return request({ path, method: "GET" });
}

/**
 * @description 检查密码是否即将过期
 */
export function GetApiUserWebCheckPwdExpired(
  payload: GetApiUserWebCheckPwdExpiredParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/check-pwd-expired";
  return request({ path, payload, payloadIn: "body", method: "GET" });
}

/**
 * @description 获取当前用户
 */
export function GetApiUserWebCurrentUser(
  payload: GetApiUserWebCurrentUserParameters
): Promise<ResponseUserInfo> {
  const path = "/api/user/web/current-user";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 用户注销-发送邮箱验证码
 */
export function PostApiUserWebDestroySendEmailCode(
  payload: PostApiUserWebDestroySendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/destroy-send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 用户注销-发送手机验证码
 */
export function PostApiUserWebDestroySendSmsCode(
  payload: PostApiUserWebDestroySendSmsCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/destroy-send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 绑定邮箱-校验邮件验证码并绑定
 */
export function PostApiUserWebEmailBind(
  payload: PostApiUserWebEmailBindParameters
): Promise<boolean> {
  const path = "/api/user/web/email/bind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 绑定邮箱-发送邮件验证码
 */
export function PostApiUserWebEmailBindSendEmailCode(
  payload: PostApiUserWebEmailBindSendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/email/bind/send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置邮箱-验证新邮箱并且完成重置
 */
export function PostApiUserWebEmailReset(
  payload: PostApiUserWebEmailResetParameters
): Promise<boolean> {
  const path = "/api/user/web/email/reset";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置邮箱-预校验
 */
export function PostApiUserWebEmailResetCheckEmailCode(
  payload: PostApiUserWebEmailResetCheckEmailCodeParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/web/email/reset/check-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置邮箱-邮箱发送邮件验证码
 */
export function PostApiUserWebEmailResetSendEmail(
  payload: PostApiUserWebEmailResetSendEmailParameters
): Promise<boolean> {
  const path = "/api/user/web/email/reset/send-email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置邮箱-邮箱发送短信验证码（无需图片验证码，但需要登录）
 */
export function PostApiUserWebEmailResetSendEmailNoCaptcha(
  payload: PostApiUserWebEmailResetSendEmailNoCaptchaParameters
): Promise<boolean> {
  const path = "/api/user/web/email/reset/send-email-no-captcha";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解绑邮箱-校验邮件验证码并解绑
 */
export function PostApiUserWebEmailUnbind(
  payload: PostApiUserWebEmailUnbindParameters
): Promise<boolean> {
  const path = "/api/user/web/email/unbind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解绑邮箱-发送邮件验证码
 */
export function PostApiUserWebEmailUnbindSendEmailCode(
  payload: PostApiUserWebEmailUnbindSendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/email/unbind/send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置邮箱-旧邮箱验证码校验(验证归属是否正确)
 */
export function PostApiUserWebEmailVerifyCheckEmailCode(
  payload: PostApiUserWebEmailVerifyCheckEmailCodeParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/web/email/verify/check-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置邮箱-旧邮箱发送验证邮件验证码（无需图片验证码，但需要登录）
 */
export function PostApiUserWebEmailVerifySendEmail(
  payload: PostApiUserWebEmailVerifySendEmailParameters
): Promise<boolean> {
  const path = "/api/user/web/email/verify/send-email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取图片验证码-公共接口
 */
export function GetApiUserWebGetCaptcha(): Promise<CaptchaBean> {
  const path = "/api/user/web/get-captcha";
  return request({ path, method: "GET" });
}

/**
 * @description 获取图片验证码-公共接口
 */
export function GetApiUserWebGetTenantCaptcha(
  payload: GetApiUserWebGetTenantCaptchaParameters
): Promise<CaptchaBean> {
  const path = "/api/user/web/get-tenant-captcha";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 获取访客加密链接
 */
export function PostApiUserWebGuestGuestEncryped(
  payload: PostApiUserWebGuestGuestEncrypedParameters
): Promise<EncrypedInfo> {
  const path = "/api/user/web/guest/guest-encryped";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 恢复访客登录
 */
export function GetApiUserWebGuestLoginByEncryped(
  payload: GetApiUserWebGuestLoginByEncrypedParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/guest/login-by-encryped";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 校验游客注册是否需要验证码
 */
export function GetApiUserWebGuestSignCaptchaChallenge(
  payload: GetApiUserWebGuestSignCaptchaChallengeParameters
): Promise<boolean> {
  const path = "/api/user/web/guest/sign-captcha-challenge";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 注册-访客注册请求
 */
export function PostApiUserWebGuestSignUpByGuest(
  payload: PostApiUserWebGuestSignUpByGuestParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/guest/sign-up-by-guest";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description parana普通用户混登接口
 */
export function PostApiUserWebLoginBuyerIdentify(
  payload: PostApiUserWebLoginBuyerIdentifyParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/buyer/identify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 邮箱 + 密码登录接口
 */
export function PostApiUserWebLoginEmail(
  payload: PostApiUserWebLoginEmailParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 密码混登接口
 */
export function PostApiUserWebLoginIdentify(
  payload: PostApiUserWebLoginIdentifyParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/identify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 密码混合认证
 */
export function PostApiUserWebLoginIdentifyVerify(
  payload: PostApiUserWebLoginIdentifyVerifyParameters
): Promise<IdentifyVerifyInfo> {
  const path = "/api/user/web/login/identify-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据邮件验证码登录
 */
export function PostApiUserWebLoginLoginByEmailCode(
  payload: PostApiUserWebLoginLoginByEmailCodeParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/login-by-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 密码混合认证通过后根据邮件验证码登录
 */
export function PostApiUserWebLoginLoginByEmailCodeAfterVerify(
  payload: PostApiUserWebLoginLoginByEmailCodeAfterVerifyParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/login-by-email-code-after-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 本机号码一键登录
 */
export function PostApiUserWebLoginLoginByLocalNumber(
  payload: PostApiUserWebLoginLoginByLocalNumberParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/login-by-local-number";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据手机验证码登录
 */
export function PostApiUserWebLoginLoginBySmsCode(
  payload: PostApiUserWebLoginLoginBySmsCodeParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/login-by-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 校验密码登录是否需要验证码
 */
export function GetApiUserWebLoginLoginCaptchaChallenge(
  payload: GetApiUserWebLoginLoginCaptchaChallengeParameters
): Promise<boolean> {
  const path = "/api/user/web/login/login-captcha-challenge";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 发送邮件验证码
 */
export function PostApiUserWebLoginLoginSendEmailCode(
  payload: PostApiUserWebLoginLoginSendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/login/login-send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 登录发送手机验证码接口
 */
export function PostApiUserWebLoginLoginSendSmsCode(
  payload: PostApiUserWebLoginLoginSendSmsCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/login/login-send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 登出
 */
export function PostApiUserWebLoginLogout(): Promise<boolean> {
  const path = "/api/user/web/login/logout";
  return request({ path, method: "POST" });
}

/**
 * @description 手机号 + 密码登录接口
 */
export function PostApiUserWebLoginMobile(
  payload: PostApiUserWebLoginMobileParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/mobile";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 计算重定向地址
 */
export function GetApiUserWebLoginRedirectUrl(): Promise<RedirectUrlInfo> {
  const path = "/api/user/web/login/redirect-url";
  return request({ path, method: "GET" });
}

/**
 * @description 用户名 + 密码登录接口
 */
export function PostApiUserWebLoginUsername(
  payload: PostApiUserWebLoginUsernameParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/login/username";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 绑定手机号-校验短信验证码并绑定
 */
export function PostApiUserWebMobileBind(
  payload: PostApiUserWebMobileBindParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/mobile/bind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 绑定手机号-发送短信验证码
 */
export function PostApiUserWebMobileBindSendSmsCode(
  payload: PostApiUserWebMobileBindSendSmsCodeParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/mobile/bind/send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取手机号前缀列表
 */
export function GetApiUserWebMobileGetMobileprefixlist(): Promise<Responsestring> {
  const path = "/api/user/web/mobile/get-mobileprefixlist";
  return request({ path, method: "GET" });
}

/**
 * @description 重置手机号-验证新手机号并且完成重置
 */
export function PostApiUserWebMobileReset(
  payload: PostApiUserWebMobileResetParameters
): Promise<boolean> {
  const path = "/api/user/web/mobile/reset";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置手机号-验证码校验
 */
export function PostApiUserWebMobileResetCheckSmsCode(
  payload: PostApiUserWebMobileResetCheckSmsCodeParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/web/mobile/reset/check-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置手机号-手机号发送短信验证码
 */
export function PostApiUserWebMobileResetSendSms(
  payload: PostApiUserWebMobileResetSendSmsParameters
): Promise<boolean> {
  const path = "/api/user/web/mobile/reset/send-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置手机号-手机号发送短信验证码（无需图片验证码，但需要登录）
 */
export function PostApiUserWebMobileResetSendSmsNoCaptcha(
  payload: PostApiUserWebMobileResetSendSmsNoCaptchaParameters
): Promise<boolean> {
  const path = "/api/user/web/mobile/reset/send-sms-no-captcha";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解绑手机号-校验短信验证码并绑定
 */
export function PostApiUserWebMobileUnbind(
  payload: PostApiUserWebMobileUnbindParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/mobile/unbind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 解绑手机号-发送短信验证码
 */
export function PostApiUserWebMobileUnbindSendSmsCode(
  payload: PostApiUserWebMobileUnbindSendSmsCodeParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/mobile/unbind/send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 旧手机号验证码校验(验证归属是否正确)
 */
export function PostApiUserWebMobileVerifyCheckSmsCode(
  payload: PostApiUserWebMobileVerifyCheckSmsCodeParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/web/mobile/verify/check-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 旧手机号发送验证短信验证码（无需图片验证码，但需要登录）
 */
export function PostApiUserWebMobileVerifySendSms(
  payload: PostApiUserWebMobileVerifySendSmsParameters
): Promise<boolean> {
  const path = "/api/user/web/mobile/verify/send-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 创建用户源信息
 */
export function PostApiUserWebOriginCreate(
  payload: PostApiUserWebOriginCreateParameters
): Promise<number> {
  const path = "/api/user/web/origin/create";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 删除用户源信息
 */
export function PostApiUserWebOriginDelete(
  payload: PostApiUserWebOriginDeleteParameters
): Promise<boolean> {
  const path = "/api/user/web/origin/delete";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据id查询用户源信息
 */
export function GetApiUserWebOriginFindById(
  payload: GetApiUserWebOriginFindByIdParameters
): Promise<OriginInfo> {
  const path = "/api/user/web/origin/find-by-id";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 根据key查询用户源信息
 */
export function GetApiUserWebOriginFindByKey(
  payload: GetApiUserWebOriginFindByKeyParameters
): Promise<OriginInfo> {
  const path = "/api/user/web/origin/find-by-key";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 查询所有用户源信息
 */
export function GetApiUserWebOriginList(
  payload: GetApiUserWebOriginListParameters
): Promise<Array<OriginInfo>> {
  const path = "/api/user/web/origin/list";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 分页查询用户源信息
 */
export function GetApiUserWebOriginPaging(
  payload: GetApiUserWebOriginPagingParameters
): Promise<PagingOriginInfo> {
  const path = "/api/user/web/origin/paging";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 更新用户源信息
 */
export function PostApiUserWebOriginUpdate(
  payload: PostApiUserWebOriginUpdateParameters
): Promise<boolean> {
  const path = "/api/user/web/origin/update";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 修改密码
 */
export function PutApiUserWebPasswordChangePassword(
  payload: PutApiUserWebPasswordChangePasswordParameters
): Promise<boolean> {
  const path = "/api/user/web/password/change-password";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 忘记密码-通过邮件重置密码
 */
export function PostApiUserWebPasswordResetByEmail(
  payload: PostApiUserWebPasswordResetByEmailParameters
): Promise<boolean> {
  const path = "/api/user/web/password/reset-by-email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-通过短信重置密码
 */
export function PostApiUserWebPasswordResetBySms(
  payload: PostApiUserWebPasswordResetBySmsParameters
): Promise<boolean> {
  const path = "/api/user/web/password/reset-by-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-通过短信验证token重置密码
 */
export function PostApiUserWebPasswordResetBySmsVerifyToken(
  payload: PostApiUserWebPasswordResetBySmsVerifyTokenParameters
): Promise<boolean> {
  const path = "/api/user/web/password/reset-by-sms-verify-token";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-通过短信、邮箱,验证token重置密码
 */
export function PostApiUserWebPasswordResetByVerifyToken(
  payload: PostApiUserWebPasswordResetByVerifyTokenParameters
): Promise<boolean> {
  const path = "/api/user/web/password/reset-by-verify-token";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-邮箱验证码校验
 */
export function PostApiUserWebPasswordResetEmailCodeVerify(
  payload: PostApiUserWebPasswordResetEmailCodeVerifyParameters
): Promise<EmailCodeVerifyInfo> {
  const path = "/api/user/web/password/reset-email-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 重置密码
 */
export function PostApiUserWebPasswordResetPassword(
  payload: PostApiUserWebPasswordResetPasswordParameters
): Promise<boolean> {
  const path = "/api/user/web/password/reset-password";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-短信验证码校验
 */
export function PostApiUserWebPasswordResetSmsCodeVerify(
  payload: PostApiUserWebPasswordResetSmsCodeVerifyParameters
): Promise<SmsCodeVerifyInfo> {
  const path = "/api/user/web/password/reset-sms-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-发送邮件验证码
 */
export function PostApiUserWebPasswordSendEmail(
  payload: PostApiUserWebPasswordSendEmailParameters
): Promise<boolean> {
  const path = "/api/user/web/password/send-email";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 忘记密码-发送短信验证码
 */
export function PostApiUserWebPasswordSendSms(
  payload: PostApiUserWebPasswordSendSmsParameters
): Promise<boolean> {
  const path = "/api/user/web/password/send-sms";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 授权登录
 */
export function PostApiUserWebQrcodeAuthorize(
  payload: PostApiUserWebQrcodeAuthorizeParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/qrcode/authorize";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 取消授权登录
 */
export function PostApiUserWebQrcodeCancelAuthorize(
  payload: PostApiUserWebQrcodeCancelAuthorizeParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/qrcode/cancel-authorize";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 获取二维码
 */
export function GetApiUserWebQrcodeGetQrCode(): Promise<ResponseQrCodeInfo> {
  const path = "/api/user/web/qrcode/get-qr-code";
  return request({ path, method: "GET" });
}

/**
 * @description 查询二维码状态
 */
export function GetApiUserWebQrcodeQuireQrCodeState(
  payload: GetApiUserWebQrcodeQuireQrCodeStateParameters
): Promise<ResponseQrCodeQuireInfo> {
  const path = "/api/user/web/qrcode/quire-qr-code-state";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 解析二维码
 */
export function GetApiUserWebQrcodeResolveByUid(
  payload: GetApiUserWebQrcodeResolveByUidParameters
): Promise<Responseboolean> {
  const path = `/api/user/web/qrcode/resolve/${payload["uid"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description Idp回调通知
 */
export function GetApiUserWebSamlSsoCallback(
  payload: GetApiUserWebSamlSsoCallbackParameters
): Promise<void> {
  const path = "/api/user/web/saml/sso/callback";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Idp回调通知
 */
export function PostApiUserWebSamlSsoCallback(
  payload: PostApiUserWebSamlSsoCallbackParameters
): Promise<void> {
  const path = "/api/user/web/saml/sso/callback";
  return request({ path, payload, payloadIn: "query", method: "POST" });
}

/**
 * @description 内部用户登录
 */
export function GetApiUserWebSamlSsoLogin(): Promise<void> {
  const path = "/api/user/web/saml/sso/login";
  return request({ path, method: "GET" });
}

/**
 * @description 注册-根据唯一标识校验用户是否可用
 */
export function GetApiUserWebSignUpCheckExistByIdentifier(
  payload: GetApiUserWebSignUpCheckExistByIdentifierParameters
): Promise<boolean> {
  const path = "/api/user/web/sign-up/check-exist-by-identifier";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 注册-提交邮件注册请求
 */
export function PostApiUserWebSignUpRegisterByEmailCode(
  payload: PostApiUserWebSignUpRegisterByEmailCodeParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/sign-up/register-by-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 注册-提交验证邮件注册请求
 */
export function PostApiUserWebSignUpRegisterByEmailCodeVerify(
  payload: PostApiUserWebSignUpRegisterByEmailCodeVerifyParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/web/sign-up/register-by-email-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 注册-提交手机号注册请求
 */
export function PostApiUserWebSignUpRegisterBySmsCode(
  payload: PostApiUserWebSignUpRegisterBySmsCodeParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/sign-up/register-by-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 注册-提交验证手机号注册请求
 */
export function PostApiUserWebSignUpRegisterBySmsCodeVerify(
  payload: PostApiUserWebSignUpRegisterBySmsCodeVerifyParameters
): Promise<VerifyCodeCheckInfo> {
  const path = "/api/user/web/sign-up/register-by-sms-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 注册-发送邮件验证码
 */
export function PostApiUserWebSignUpRegisterSendEmailCode(
  payload: PostApiUserWebSignUpRegisterSendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/sign-up/register-send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 注册-发送手机验证码
 */
export function PostApiUserWebSignUpRegisterSendSmsCode(
  payload: PostApiUserWebSignUpRegisterSendSmsCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/sign-up/register-send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 注册-设置密码注册请求
 */
export function PostApiUserWebSignUpSignUpByCodeVerify(
  payload: PostApiUserWebSignUpSignUpByCodeVerifyParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/sign-up/sign-up-by-code-verify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 根据id等信息查询三方用户信息
 */
export function GetApiUserWebThirdPartInfoFindByUserIdTypeAppId(
  payload: GetApiUserWebThirdPartInfoFindByUserIdTypeAppIdParameters
): Promise<ThirdAccountInfo> {
  const path = "/api/user/web/third-part-info/find-by-userId-type-appId";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 支付宝登录接口
 */
export function PostApiUserWebThirdPartAppAlipayAppLogin(
  payload: PostApiUserWebThirdPartAppAlipayAppLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/alipay-app/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 苹果APP登录接口
 */
export function PostApiUserWebThirdPartAppAppleLogin(
  payload: PostApiUserWebThirdPartAppAppleLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/apple/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 企业微信小程序登录接口
 */
export function PostApiUserWebThirdPartAppEpWeChatAppLogin(
  payload: PostApiUserWebThirdPartAppEpWeChatAppLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/ep-we-chat-app/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 企业微信登录接口
 */
export function PostApiUserWebThirdPartAppEpWeChatLogin(
  payload: PostApiUserWebThirdPartAppEpWeChatLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/ep-we-chat/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 企业微信小程序-绑定手机号请求提交
 */
export function PostApiUserWebThirdPartAppEpWechatAppBind(
  payload: PostApiUserWebThirdPartAppEpWechatAppBindParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/ep-wechat-app/bind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 企业小程序-解析企业微信小程序手机号信息
 */
export function PostApiUserWebThirdPartAppEpWechatAppParsingPhone(
  payload: PostApiUserWebThirdPartAppEpWechatAppParsingPhoneParameters
): Promise<EpWeChatAppResponse> {
  const path = "/api/user/web/third-part/app/ep-wechat-app/parsing/phone";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Facebook登录接口
 */
export function PostApiUserWebThirdPartAppFacebookLogin(
  payload: PostApiUserWebThirdPartAppFacebookLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/facebook/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Google登录接口
 */
export function PostApiUserWebThirdPartAppGoogleLogin(
  payload: PostApiUserWebThirdPartAppGoogleLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/google/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description QQ登录接口
 */
export function PostApiUserWebThirdPartAppQqLogin(
  payload: PostApiUserWebThirdPartAppQqLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/qq/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 微信登录接口
 */
export function PostApiUserWebThirdPartAppWeChatLogin(
  payload: PostApiUserWebThirdPartAppWeChatLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/we-chat/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 微博登录接口
 */
export function PostApiUserWebThirdPartAppWeiBoLogin(
  payload: PostApiUserWebThirdPartAppWeiBoLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/wei-bo/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 微博APP登录接口
 */
export function PostApiUserWebThirdPartAppWeiboAppLogin(
  payload: PostApiUserWebThirdPartAppWeiboAppLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/weibo-app/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 微信小程序-绑定手机号请求提交
 */
export function PostApiUserWebThirdPartAppWxAppBind(
  payload: PostApiUserWebThirdPartAppWxAppBindParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/wx-app/bind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 微信小程序登录接口
 */
export function PostApiUserWebThirdPartAppWxAppLogin(
  payload: PostApiUserWebThirdPartAppWxAppLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/app/wx-app/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 小程序-解析微信小程序手机号信息
 */
export function PostApiUserWebThirdPartAppWxAppParsingPhone(
  payload: PostApiUserWebThirdPartAppWxAppParsingPhoneParameters
): Promise<WxAppPhoneResponse> {
  const path = "/api/user/web/third-part/app/wx-app/parsing/phone";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 新三方登录服务
 */
export function GetApiUserWebThirdPartAuthNewByThirdPartType(
  payload: GetApiUserWebThirdPartAuthNewByThirdPartTypeParameters
): Promise<RedirectUrlInfo> {
  const path = `/api/user/web/third-part/auth-new/${payload["thirdPartType"]}`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 苹果三方登录服务
 */
export function PostApiUserWebThirdPartAuthApple(
  payload: PostApiUserWebThirdPartAuthAppleParameters
): Promise<void> {
  const path = "/api/user/web/third-part/auth/apple";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方登录服务
 */
export function GetApiUserWebThirdPartAuthByThirdPartType(
  payload: GetApiUserWebThirdPartAuthByThirdPartTypeParameters
): Promise<boolean> {
  const path = `/api/user/web/third-part/auth/${payload["thirdPartType"]}`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 三方认证服务
 */
export function GetApiUserWebThirdPartAuthorization(
  payload: GetApiUserWebThirdPartAuthorizationParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/authorization";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 三方认证服务
 */
export function PostApiUserWebThirdPartAuthorization(
  payload: PostApiUserWebThirdPartAuthorizationParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/authorization";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 绑定当前用户服务
 */
export function GetApiUserWebThirdPartBindCurrentUser(
  payload: GetApiUserWebThirdPartBindCurrentUserParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/bind-current-user";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 绑定当前用户服务
 */
export function PostApiUserWebThirdPartBindCurrentUser(
  payload: PostApiUserWebThirdPartBindCurrentUserParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/bind-current-user";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方-绑定邮箱请求提交
 */
export function PostApiUserWebThirdPartBindEmailByEmailCode(
  payload: PostApiUserWebThirdPartBindEmailByEmailCodeParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/bind/email-by-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方-绑定邮箱验证码发送服务
 */
export function PostApiUserWebThirdPartBindEmailSendEmailCode(
  payload: PostApiUserWebThirdPartBindEmailSendEmailCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/bind/email-send-email-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方-绑定账号请求提交
 */
export function PostApiUserWebThirdPartBindIdentify(
  payload: PostApiUserWebThirdPartBindIdentifyParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/bind/identify";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方-绑定手机号请求提交
 */
export function PostApiUserWebThirdPartBindMobileBySmsCode(
  payload: PostApiUserWebThirdPartBindMobileBySmsCodeParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/bind/mobile-by-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方-绑定手机号验证码发送服务
 */
export function PostApiUserWebThirdPartBindMobileSendSmsCode(
  payload: PostApiUserWebThirdPartBindMobileSendSmsCodeParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/bind/mobile-send-sms-code";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方登录信息补偿服务
 */
export function GetApiUserWebThirdPartCompensate(
  payload: GetApiUserWebThirdPartCompensateParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/compensate";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 查询当前用户已绑定三方类型清单
 */
export function GetApiUserWebThirdPartListBound(): Promise<Array<string>> {
  const path = "/api/user/web/third-part/list-bound";
  return request({ path, method: "GET" });
}

/**
 * @description 查询当前用户已绑定三方类型清单
 */
export function GetApiUserWebThirdPartListBoundInfo(): Promise<
  Array<ThirdAccountInfo>
> {
  const path = "/api/user/web/third-part/list-bound-info";
  return request({ path, method: "GET" });
}

/**
 * @description Twitter登录接口
 */
export function PostApiUserWebThirdPartOauth1AppTwitterLogin(
  payload: PostApiUserWebThirdPartOauth1AppTwitterLoginParameters
): Promise<TokenInfo> {
  const path = "/api/user/web/third-part/oauth1/app/twitter/login";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方登录服务
 */
export function GetApiUserWebThirdPartOauth1AuthByThirdPartType(
  payload: GetApiUserWebThirdPartOauth1AuthByThirdPartTypeParameters
): Promise<boolean> {
  const path = `/api/user/web/third-part/oauth1/auth/${payload["thirdPartType"]}`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 三方认证服务
 */
export function GetApiUserWebThirdPartOauth1Authorization(
  payload: GetApiUserWebThirdPartOauth1AuthorizationParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/oauth1/authorization";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 三方扫码登录认证服务
 */
export function PostApiUserWebThirdPartQrcodeAuthorization(
  payload: PostApiUserWebThirdPartQrcodeAuthorizationParameters
): Promise<string> {
  const path = "/api/user/web/third-part/qrcode/authorization";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 扫码绑定当前用户服务
 */
export function PostApiUserWebThirdPartQrcodeBindCurrentUser(
  payload: PostApiUserWebThirdPartQrcodeBindCurrentUserParameters
): Promise<string> {
  const path = "/api/user/web/third-part/qrcode/bind-current-user";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 三方绑定解绑接口
 */
export function PostApiUserWebThirdPartUnbind(
  payload: PostApiUserWebThirdPartUnbindParameters
): Promise<boolean> {
  const path = "/api/user/web/third-part/unbind";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 通过token获取用户信息
 */
export function PostApiUserWebToken(
  payload: PostApiUserWebTokenParameters
): Promise<UserInfo> {
  const path = "/api/user/web/token";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description trantor跳转登录页
 */
export function GetApiUserWebTrantorLogin(
  payload: GetApiUserWebTrantorLoginParameters
): Promise<void> {
  const path = "/api/user/web/trantor/login";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description trantor退出登录接口
 */
export function GetApiUserWebTrantorLogout(
  payload: GetApiUserWebTrantorLogoutParameters
): Promise<void> {
  const path = "/api/user/web/trantor/logout";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description 用户注销
 */
export function PutApiUserWebUserDestroy(
  payload: PutApiUserWebUserDestroyParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/user-destroy";
  return request({ path, payload, payloadIn: "query", method: "PUT" });
}

/**
 * @description 验证邮箱注销用户
 */
export function PutApiUserWebUserDestroyByEmail(
  payload: PutApiUserWebUserDestroyByEmailParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/user-destroy-by-email";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 验证手机号注销用户
 */
export function PutApiUserWebUserDestroyByMobile(
  payload: PutApiUserWebUserDestroyByMobileParameters
): Promise<Responseboolean> {
  const path = "/api/user/web/user-destroy-by-mobile";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 获取用户信息接口
 */
export function GetApiUserWebUserInfo(): Promise<UserInfo> {
  const path = "/api/user/web/user-info";
  return request({ path, method: "GET" });
}

/**
 * @description 更新用户信息
 */
export function PutApiUserWebUserInfo(
  payload: PutApiUserWebUserInfoParameters
): Promise<boolean> {
  const path = "/api/user/web/user-info";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description 权限管理-鉴权
 */
export function PostOpenApiAclClientPermissionAuthListPermission(
  payload: PostOpenApiAclClientPermissionAuthListPermissionParameters
): Promise<ResponseAuthenticationInfo> {
  const path = "/open/api/acl/client/permission/authListPermission";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-查询用户所有权限
 */
export function PostOpenApiAclClientPermissionFindUserAllPermission(
  payload: PostOpenApiAclClientPermissionFindUserAllPermissionParameters
): Promise<ResponseListAuthorizationInfo> {
  const path = "/open/api/acl/client/permission/findUserAllPermission";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-查询用户所有角色
 */
export function PostOpenApiAclClientPermissionQueryUserAllRole(
  payload: PostOpenApiAclClientPermissionQueryUserAllRoleParameters
): Promise<ResponseListRoleInfo> {
  const path = "/open/api/acl/client/permission/queryUserAllRole";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 查询角色所有的授权信息
 */
export function PostOpenApiAclGrantFindRoleAllPermission(
  payload: PostOpenApiAclGrantFindRoleAllPermissionParameters
): Promise<ResponseListRolePermissionInfo> {
  const path = "/open/api/acl/grant/findRoleAllPermission";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 授权管理 - 为角色授权
 */
export function PostOpenApiAclGrantGrantToRole(
  payload: PostOpenApiAclGrantGrantToRoleParameters
): Promise<Responseboolean> {
  const path = "/open/api/acl/grant/grantToRole";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-增加权限
 */
export function PostOpenApiAclPermissionCreatePermission(
  payload: PostOpenApiAclPermissionCreatePermissionParameters
): Promise<ResponsePermissionInfo> {
  const path = "/open/api/acl/permission/createPermission";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-根据id删除权限
 */
export function PostOpenApiAclPermissionDeletePermissionById(
  payload: PostOpenApiAclPermissionDeletePermissionByIdParameters
): Promise<Responseboolean> {
  const path = "/open/api/acl/permission/deletePermissionById";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-根据key修改权限
 */
export function PostOpenApiAclPermissionDeletePermissionByKey(
  payload: PostOpenApiAclPermissionDeletePermissionByKeyParameters
): Promise<Responseboolean> {
  const path = "/open/api/acl/permission/deletePermissionByKey";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-查询单个权限
 */
export function PostOpenApiAclPermissionFindPermission(
  payload: PostOpenApiAclPermissionFindPermissionParameters
): Promise<ResponsePermissionInfo> {
  const path = "/open/api/acl/permission/findPermission";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-查询多个权限
 */
export function PostOpenApiAclPermissionListPermission(
  payload: PostOpenApiAclPermissionListPermissionParameters
): Promise<ResponseListPermissionInfo> {
  const path = "/open/api/acl/permission/listPermission";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-根据id修改权限
 */
export function PostOpenApiAclPermissionUpdatePermissionById(
  payload: PostOpenApiAclPermissionUpdatePermissionByIdParameters
): Promise<Responseboolean> {
  const path = "/open/api/acl/permission/updatePermissionById";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description 权限管理-根据key修改权限
 */
export function PostOpenApiAclPermissionUpdatePermissionByKey(
  payload: PostOpenApiAclPermissionUpdatePermissionByKeyParameters
): Promise<Responseboolean> {
  const path = "/open/api/acl/permission/updatePermissionByKey";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

export type GetApiAclAclCacheClearParameters = {
  /** cacheName in query */
  cacheName?:
    | "ROLE_MODEL__USER_DATA_PERMISSION"
    | "ROLEID_PERMISSIONID__GRANTED_BUSINESS_DATA_PERMISSION"
    | "GLOBAL_DATA_PERMISSION__DEFAULT_AUTH"
    | "ROLE_ID_TO_ROLE"
    | "PERMISSION_MODEL_KEY_LIST"
    | "GATEWAY_PERMISSION_CALLBACK";
};

export type PostApiAclAppCreateParameters =
  AppCreateRequest; /** request in body */

export type PostApiAclAppDeleteParameters =
  AppDeleteRequest; /** request in body */

export type GetApiAclAppDetailParameters = {
  /** id in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type PostApiAclAppExistParameters =
  AppCheckExistRequest; /** request in body */

export type GetApiAclAppPagingParameters = {
  /** 标识 in query */
  name?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 项目id in query */
  projectId?: number;
};

export type PostApiAclAppUpdateParameters =
  AppUpdateRequest; /** request in body */

export type PostApiAclAuthorizeRoleAddParameters =
  AddRoleRelationRequest; /** request in body */

export type PostApiAclAuthorizeRoleBatchBizNodeDeleteRoleRelationsParameters =
  BatchBizNodeDeleteRoleRelationRequest; /** request in body */

export type PostApiAclAuthorizeRoleClearAclUserRoleCacheParameters =
  UserFindByUserIdRequest; /** request in body */

export type PostApiAclAuthorizeRoleCreateRoleRelationsParameters =
  BatchBizNodeCreateRoleRelationRequest; /** request in body */

export type PostApiAclAuthorizeRoleCreateRoleRelationsByRoleIdParameters =
  RoleRelationBatchCreateByRoleIdRequest; /** request in body */

export type PostApiAclAuthorizeRoleDeleteParameters =
  DeleteRoleRelationRequest; /** request in body */

export type PostApiAclAuthorizeRoleDeleteRoleRelationsParameters =
  RoleRelationBatchDeleteByKeyRequest; /** request in body */

export type PostApiAclAuthorizeRoleEditParameters =
  UpdateRoleRelationRequest; /** request in body */

export type GetApiAclAuthorizeRoleExtendPagingParameters =
  RoleRelationQueryGroupByBizIdRequest; /** request in body */

export type GetApiAclAuthorizeRoleFindWithCreatebyParameters = {
  /** 目标id in query */
  bizId?: string;
  /** 目标类型 in query */
  bizType?: string;
  /** 创建人 in query */
  createBy?: number;
  /** 项目id in query */
  projectId?: number;
  /** 租户id in query */
  tenantId?: number;
  /** 租户id in query */
  tenantIdLong?: number;
};

export type GetApiAclAuthorizeRoleFindRoleRelationByBizParameters = {
  /** 对象id in query */
  bizId?: string;
  /** 关联关系类型 in query */
  bizType?: string;
  /** 项目id in query */
  id?: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 项目key in query */
  projectKey?: string;
  /** 关联类型 in query */
  type?: string;
};

export type GetApiAclAuthorizeRolePagingParameters = {
  /** 目标id in query */
  bizId?: string;
  /** 目标类型 in query */
  bizType?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 项目id in query */
  projectId?: number;
};

export type GetApiAclAuthorizeRolePagingUnauthorizedParameters = {
  /** 应用id in query */
  appId?: number;
  /** 应用key in query */
  appKey?: string;
  /** 业务对象id in query */
  bizId?: string;
  /** 业务对象类型 in query */
  bizType?: string;
  /** 角色扩展信息查询条件 in query */
  extensionCondition?: Record<string, unknown>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 角色授权的组织节点id in query */
  orgNodeId?: number;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 角色授权的岗位id in query */
  positionId?: number;
  /** 项目id in query */
  projectId?: number;
  /** 项目key in query */
  projectKey?: string;
  /** 搜索字段，支持标识和名字模糊搜索 in query */
  searchKey?: string;
  /** 角色类型id in query */
  typeId?: number;
  /** 角色类型key in query */
  typeKey?: string;
};

export type PostApiAclAuthorizeRoleUpdateRoleRelationsParameters =
  RoleRelationBatchUpdateRequest; /** request in body */

export type GetApiAclClientPermissionAllParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 权限类型 in query */
  type?: string;
  /** 用户id in query */
  userId?: string;
};

export type PostApiAclClientPermissionAllParameters =
  QueryUserAllPermissionRequest; /** request in body */

export type PostApiAclClientPermissionAuthParameters =
  FeaturePermissionAuthRequest; /** request in body */

export type PostApiAclClientPermissionAuthenticationParameters =
  AuthenticationRequest; /** request in body */

export type PostApiAclClientPermissionDataRuleQueryParameters =
  DataPermissionAuthRequest; /** request in body */

export type PostApiAclClientPermissionUrlAuthParameters =
  AuthenticationRequest; /** request in body */

export type PostApiAclDataPermissionGrantParameters =
  RoleGrantDataPermission; /** grantRequest in body */

export type GetApiAclDataPermissionGrantedParameters = {
  /** roleId in query */
  roleId: number;
};

export type GetApiAclDataPermissionGrantedStateRoleByRoleIdParameters = {
  /** includeSelf in query */
  includeSelf?: boolean;
  /** roleId in path */
  roleId: number;
};

export type PostApiAclDataPermissionRoleByRoleIdParameters = {
  /** roleId in path */
  roleId: number;
} & DataPermissionCreateRequest; /** createRequest in body */

export type GetApiAclDataPermissionRoleByRoleIdPermissionByPermissionIdParameters =
  {
    /** permissionId in path */
    permissionId: number;
    /** roleId in path */
    roleId: number;
  };

export type GetApiAclDataPermissionUserByUserIdModelByModelKeyParameters = {
  /** in query */
  authViewKey?: string;
  /** in query */
  modelKey?: string;
  /** in query */
  userId?: number;
  /** in query */
  viewResourceAuthKey?: string;
};

export type GetApiAclDemoTreeParameters = {
  /** permissionKey in query */
  permissionKey?: string;
};

export type GetApiAclFeaturePermissionGroupCheckParameters = {
  /** 主键id in query */
  id?: number;
  /** 权限组标识 in query */
  key?: string;
  /** 功能权限组名称 in query */
  name?: string;
  /** 父组id in query */
  parentId?: number;
  /** 功能权限组名称 in query */
  projectId?: number;
  /** appId in query */
  应用id: number;
};

export type PostApiAclFeaturePermissionGroupCreateParameters =
  CreateFeatureGroupRequest; /** request in body */

export type PostApiAclFeaturePermissionGroupDeleteParameters =
  DeleteFeatureGroupRequest; /** request in body */

export type GetApiAclFeaturePermissionGroupDetailParameters = {
  /** 分组id in query */
  id?: number;
  /** 项目id in query */
  projectId?: number;
};

export type PostApiAclFeaturePermissionGroupEditParameters =
  UpdateFeatureGroupRequest; /** request in body */

export type PostApiAclFeaturePermissionGroupPermissionCreateParameters =
  CreateChildFeaturePermissionRequest; /** request in body */

export type PostApiAclFeaturePermissionPermissionBatchCreateParameters =
  BatchCreatePermissionFromJsonRequest; /** request in body */

export type GetApiAclFeaturePermissionPermissionCheckParameters = {
  /** 应用id in query */
  appId?: number;
  /** 应用名称 in query */
  appName?: string;
  /** 描述 in query */
  desc?: string;
  /** 功能分组id，直接挂在分组下的权限需要传入,创建应用或者权限下子权限勿传 in query */
  featureGroupId?: number;
  /** icon in query */
  icon?: string;
  /** 主键id in query */
  id?: number;
  /** 权限标识 in query */
  key?: string;
  /** 权限名称，创建必填 in query */
  name?: string;
  /** 父权限id，有父权限需要传入，直接挂在分组或者应用下的权限勿传 in query */
  parentId?: number;
  /** 项目id in query */
  projectId?: number;
  /** 是否直接挂在应用下 in query */
  resources?: boolean;
  /** 安全级别id in query */
  safeLevelId?: number;
  /** 安全级别名称 in query */
  safeLevelName?: string;
  /** 权限类型function-代表功能权限，data-代表数据权限 in query */
  type?: string;
  /** 类型id in query */
  typeId?: number;
  /** 类型名称 in query */
  typeName?: string;
  /** 资源地址 in query */
  url?: string;
};

export type PostApiAclFeaturePermissionPermissionCreateParameters =
  CreateFeaturePermissionRequest; /** request in body */

export type PostApiAclFeaturePermissionPermissionDeleteParameters =
  DeleteFeaturePermissionRequest; /** request in body */

export type GetApiAclFeaturePermissionPermissionDetailParameters = {
  /** 功能权限id in query */
  id?: number;
  /** 项目id in query */
  projectId?: number;
};

export type PostApiAclFeaturePermissionPermissionEditParameters =
  UpdateFeaturePermissionRequest; /** request in body */

export type PostApiAclFeaturePermissionPermissionPagingParameters =
  PermissionPagingQueryRequest; /** request in body */

export type GetApiAclFeaturePermissionTreeParameters = {
  /** 应用id in query */
  appId?: number;
  /** 权限类型 in query */
  permissionType?: string;
  /** 项目id in query */
  projectId?: number;
};

export type GetApiAclFeaturePermissionTreeCheckedParameters = {
  /** 应用key in query */
  appKey?: string;
  /** 业务对象id in query */
  bizId?: string;
  /** 业务对象类型 in query */
  bizType?: string;
  /** 角色id in query */
  grantId?: number;
  /** 授权对象类型 in query */
  grantType?: "ROLE" | "POSITION" | "ORG" | "USER" | "OBJECT";
  /** 权限类型 in query */
  permissionType?: string;
  /** 项目id in query */
  projectId?: number;
};

export type GetApiAclFeaturePermissionTreeCheckedByUserParameters = {
  /** 应用key in query */
  appKey?: string;
  /** 业务对象id in query */
  bizId?: number;
  /** 业务对象类型 in query */
  bizType?: string;
  /** 终端标识 in query */
  endpoint?: string;
  /** 角色id in query */
  grantId?: number;
  /** 授权对象类型 in query */
  grantType?: "ROLE" | "POSITION" | "ORG" | "USER" | "OBJECT";
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** permissionTreeType in query */
  permissionTreeType?: "NORMAL" | "FORWARD" | "REVERSE";
  /** 权限类型 in query */
  permissionType?: string;
  /** personalAuthorization in query */
  personalAuthorization?: boolean;
  /** 项目key in query */
  projectKey: string;
  /** 用户id in query */
  userId: string;
};

export type PostApiAclGlobalDataPermissionDefaultAuthRuleParameters = {
  /** globalDataPermissionList in body */
  globalDataPermissionList: Array<GlobalDataPermissionRequest>;
  /** roleId in query */
  roleId?: number;
};

export type GetApiAclGlobalDataPermissionFindByRoleParameters = {
  /** roleId in query */
  roleId?: number;
};

export type PostApiAclPermissionAuthenticateForResourceParameters =
  GatewayPermissionAuthRequest; /** request in body */

export type GetApiAclPermissionAuthorizationDetailParameters = {
  /** 业务对象 in query */
  bizId?: string;
  /** 业务对象类型 in query */
  bizType?: string;
  /** 角色id in query */
  grantTargetId?: number;
  /** 授权类型 in query */
  grantType?: "ROLE" | "POSITION" | "ORG" | "USER" | "OBJECT";
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 权限id in query */
  permissionId?: number;
  /** 项目id in query */
  projectId?: number;
};

export type PostApiAclPermissionCreateParameters =
  PermissionCreateRequest; /** request in body */

export type PostApiAclPermissionDeleteParameters =
  PermissionDeleteByKeyRequest; /** request in body */

export type PostApiAclPermissionGrantParameters =
  GrantAuthorizationRequest; /** request in body */

export type PostApiAclPermissionListParameters =
  PermissionListRequest; /** request in body */

export type PatchApiAclPermissionUpdateParameters =
  PermissionUpdateByKeyRequest; /** request in body */

export type GetApiAclProjectCheckParameters = {
  /** 名称 in query */
  key?: string;
  /** 名称 in query */
  name?: string;
};

export type PostApiAclProjectCreateParameters =
  CreateProjectRequest; /** request in body */

export type PostApiAclProjectDeleteParameters =
  DeleteProjectRequest; /** request in body */

export type GetApiAclProjectDetailParameters = {
  /** 项目id in query */
  id?: number;
};

export type PostApiAclProjectEditParameters =
  UpdateProjectRequest; /** request in body */

export type GetApiAclProjectFuzzyParameters = {
  /** 名称模糊查询 in query */
  nameLike?: string;
  /** 当前页 in query */
  pageNo?: number;
  /** 每页数量 in query */
  pageSize?: number;
};

export type GetApiAclProjectListParameters = {
  /** 名称 in query */
  key?: string;
  /** 名称 in query */
  name?: string;
  /** 当前页 in query */
  pageNo?: number;
  /** 每页数量 in query */
  pageSize?: number;
};

export type GetApiAclProjectPagingParameters = {
  /** 名称 in query */
  key?: string;
  /** 名称 in query */
  name?: string;
  /** 当前页 in query */
  pageNo?: number;
  /** 每页数量 in query */
  pageSize?: number;
};

export type GetApiAclRoleCheckParameters = {
  /** 业务对象唯一标识 in query */
  affiliationId?: string;
  /** 角色类型 in query */
  affiliationType?: string;
  /** 应用id in query */
  appId?: number;
  /** 应用编码 in query */
  appKey?: string;
  /** 应用名称 in query */
  appName?: string;
  /** 创建时间 in query */
  createdAt?: string;
  /** 创建人id in query */
  createdBy?: number;
  /** 角色描述 in query */
  desc?: string;
  /** 是否虚拟角色 in query */
  hide?: boolean;
  /** 主键id in query */
  id?: number;
  /** 角色标识 in query */
  key?: string;
  /** 是否限制范围 in query */
  limited?: boolean;
  /** 是否主节点角色 in query */
  mastered?: boolean;
  /** 关联的主节点角色 in query */
  masteredRoleKeys?: Array<string>;
  /** in query */
  "metaData.type"?: string;
  /** 角色扩展字段 in query */
  metaDataMap?: Record<string, unknown>;
  /** 元信息 in query */
  metadata?: string;
  /** 更新时间 in query */
  modifiedAt?: string;
  /** 角色名称 in query */
  name?: string;
  /** 绑定的岗位id:  强绑定 in query */
  positionId?: number;
  /** 绑定的岗位ids：通用型 in query */
  positionIds?: Array<number>;
  /** 项目id in query */
  projectId?: number;
  /** 项目编码 in query */
  projectKey?: string;
  /** 项目名称 in query */
  projectName?: string;
  /** 范围类型 in query */
  realmType?: "ORG" | "POSITION" | "ORG_DIMENSION" | "ORG_TYPE";
  /** in query */
  relatedRoleId?: number;
  /** in query */
  relatedRoleKey?: string;
  /** 角色id in query */
  roleId?: number;
  /** 条件限制 in query */
  "roleRealmParam.orgList[0].childrenCondition"?: string;
  /** 子类 in query */
  "roleRealmParam.orgList[0].childrenCount"?: number;
  /** 描述 in query */
  "roleRealmParam.orgList[0].desc"?: string;
  /** 维度id in query */
  "roleRealmParam.orgList[0].dimensionId"?: number;
  /** 维度key in query */
  "roleRealmParam.orgList[0].dimensionKey"?: string;
  /** 主键id in query */
  "roleRealmParam.orgList[0].id"?: number;
  /** 排序 in query */
  "roleRealmParam.orgList[0].index"?: number;
  /** 逻辑主键 in query */
  "roleRealmParam.orgList[0].key"?: string;
  /** 管理者id in query */
  "roleRealmParam.orgList[0].managerId"?: number;
  /** 管理者名称 in query */
  "roleRealmParam.orgList[0].managerName"?: string;
  /** 主负责岗位 in query */
  "roleRealmParam.orgList[0].managerPositionId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].managerPositionName"?: string;
  /** 扩展信息 in query */
  "roleRealmParam.orgList[0].metaDataMap"?: Record<string, unknown>;
  /** 组织名称 in query */
  "roleRealmParam.orgList[0].name"?: string;
  /** 节点id in query */
  "roleRealmParam.orgList[0].nodeId"?: number;
  /** 组织名 in query */
  "roleRealmParam.orgList[0].orgManagerName"?: string;
  /** 父id in query */
  "roleRealmParam.orgList[0].parentId"?: number;
  /** 父类key in query */
  "roleRealmParam.orgList[0].parentKey"?: string;
  /** 父节点名称 in query */
  "roleRealmParam.orgList[0].parents"?: string;
  /** *  权限下放标识  只做标识  具体下放规则以及下放关系 in query */
  "roleRealmParam.orgList[0].permissionDelegate"?: boolean;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].createdAt"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].desc"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].employeeCount"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].hide"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].id"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].key"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].metaData"?: Record<
    string,
    unknown
  >;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].name"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].orgName"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].orgNames"?: Array<string>;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].orgNodeId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].orgNodeIds"?: Array<number>;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].parentId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].parentName"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].permissionDelegate"?: boolean;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].positionNodeId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleIdList"?: Array<number>;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleNameList"?: Array<string>;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleRequestList[0].metaData.type"?: string;
  /** 角色扩展字段 in query */
  "roleRealmParam.orgList[0].positionList[0].roleRequestList[0].metaDataMap"?: Record<
    string,
    unknown
  >;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleRequestList[0].operationType.description"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleRequestList[0].operationType.write"?: boolean;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleRequestList[0].relatedRoleId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].roleRequestList[0].relatedRoleKey"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].router"?: string;
  /** in query */
  "roleRealmParam.orgList[0].positionList[0].tenantId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].roleIdDTO[0].metaData.type"?: string;
  /** 角色扩展字段 in query */
  "roleRealmParam.orgList[0].roleIdDTO[0].metaDataMap"?: Record<
    string,
    unknown
  >;
  /** in query */
  "roleRealmParam.orgList[0].roleIdDTO[0].operationType.description"?: string;
  /** in query */
  "roleRealmParam.orgList[0].roleIdDTO[0].operationType.write"?: boolean;
  /** in query */
  "roleRealmParam.orgList[0].roleIdDTO[0].relatedRoleId"?: number;
  /** in query */
  "roleRealmParam.orgList[0].roleIdDTO[0].relatedRoleKey"?: string;
  /** 绑定的角色列表 in query */
  "roleRealmParam.orgList[0].roleIds"?: Array<number>;
  /** 删除状态，如果存在逻辑删除的时候使用 in query */
  "roleRealmParam.orgList[0].roleRelationDelegateRuleParam.deleted"?: boolean;
  /** 路由 in query */
  "roleRealmParam.orgList[0].router"?: string;
  /** 租户id in query */
  "roleRealmParam.orgList[0].tenantId"?: number;
  /** 类型id in query */
  "roleRealmParam.orgList[0].typeId"?: number;
  /** 类型key in query */
  "roleRealmParam.orgList[0].typeKey"?: string;
  /** 类型名称 in query */
  "roleRealmParam.orgList[0].typeName"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].add"?: boolean;
  /** in query */
  "roleRealmParam.orgTree[0].checked"?: boolean;
  /** in query */
  "roleRealmParam.orgTree[0].childrenCount"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].del"?: boolean;
  /** in query */
  "roleRealmParam.orgTree[0].dimensionId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].id"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].key"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].metaData"?: Record<string, unknown>;
  /** in query */
  "roleRealmParam.orgTree[0].name"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].nodeId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].createdAt"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].desc"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].employeeCount"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].hide"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].id"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].key"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].metaData"?: Record<
    string,
    unknown
  >;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].name"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].orgName"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].orgNames"?: Array<string>;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].orgNodeId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].orgNodeIds"?: Array<number>;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].parentId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].parentName"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].permissionDelegate"?: boolean;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].positionNodeId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleIdList"?: Array<number>;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleNameList"?: Array<string>;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleRequestList[0].metaData.type"?: string;
  /** 角色扩展字段 in query */
  "roleRealmParam.orgTree[0].positionList[0].roleRequestList[0].metaDataMap"?: Record<
    string,
    unknown
  >;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleRequestList[0].operationType.description"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleRequestList[0].operationType.write"?: boolean;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleRequestList[0].relatedRoleId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].roleRequestList[0].relatedRoleKey"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].router"?: string;
  /** in query */
  "roleRealmParam.orgTree[0].positionList[0].tenantId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].typeId"?: number;
  /** in query */
  "roleRealmParam.orgTree[0].typeKey"?: string;
  /** 角色类型编码 in query */
  roleTypeKey?: string;
  /** 角色类型名称 in query */
  roleTypeName?: string;
  /** 租户id in query */
  tenantId?: number;
  /** 角色类型id in query */
  typeId?: number;
};

export type PostApiAclRoleCreateParameters =
  RoleCreateRequest; /** roleCreateRequest in body */

export type PostApiAclRoleDeleteParameters = {
  /** 角色id in query */
  id?: number;
  /** 项目id in query */
  projectId?: number;
};

export type GetApiAclRoleDetailParameters = {
  /** 角色id in query */
  id?: number;
  /** in query */
  key?: string;
  /** 项目id in query */
  projectId?: number;
};

export type GetApiAclRoleDetailsParameters = {
  /** 角色标识列表 in query */
  keys?: Array<string>;
  /** 项目id in query */
  projectId?: number;
  /** 租户id in query */
  tenantId?: number;
};

export type PostApiAclRoleEditParameters =
  RoleUpdateRequest; /** roleUpdate in body */

export type GetApiAclRoleListRolesByRoleIdsParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** in query */
  roleIds?: Array<number>;
};

export type GetApiAclRolePagingParameters = {
  /** 应用id in query */
  appId?: number;
  /** 应用key in query */
  appKey?: string;
  /** 创建结束时间 in query */
  createEndTime?: string;
  /** 创建开始时间 in query */
  createStartTime?: string;
  /** 角色扩展信息查询条件 in query */
  extensionCondition?: Record<string, unknown>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 角色授权的组织节点id in query */
  orgNodeId?: number;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 角色授权的岗位id in query */
  positionId?: number;
  /** 项目id in query */
  projectId?: number;
  /** 项目key in query */
  projectKey?: string;
  /** 搜索字段，支持标识和名字模糊搜索 in query */
  searchKey?: string;
  /** 角色类型id in query */
  typeId?: number;
  /** 角色类型key in query */
  typeKey?: string;
  /** 更新结束时间 in query */
  updateEndTime?: string;
  /** 更新开始时间 in query */
  updateStartTime?: string;
};

export type GetApiAclRolePagingRoleParameters = {
  /** 业务对象唯一标识 in query */
  affiliationId?: string;
  /** 角色类型 in query */
  affiliationType?: string;
  /** 是否启用 in query */
  enabled?: boolean;
  /** 角色名称 in query */
  name?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 项目key in query */
  projectKey: string;
  /** 角色id in query */
  roleId?: number;
  /** 搜索关键词 in query */
  searchKey?: string;
  /** 类型id in query */
  typeId?: number;
  /** 类型ids in query */
  typeIds?: Array<number>;
};

export type GetApiAclRolePagingRoleByAffiliationsParameters = {
  /** in query */
  "affiliations[0].affiliationId"?: string;
  /** in query */
  "affiliations[0].affiliationType"?: string;
  /** in query */
  "affiliations[0].operationType.description"?: string;
  /** in query */
  "affiliations[0].operationType.write"?: boolean;
  /** 角色是否隐藏 in query */
  hide?: boolean;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 项目key in query */
  projectKey: string;
  /** 搜索关键词 in query */
  searchKey?: string;
};

export type PostApiAclSynctaskCreateParameters =
  CreateSyncTaskRequest; /** request in body */

export type PostApiAclSynctaskDeleteParameters =
  DeleteSyncTaskRequest; /** request in body */

export type PostApiAclSynctaskEditParameters =
  UpdateSyncTaskRequest; /** request in body */

export type PostApiAclSynctaskFindParameters =
  FindSyncTaskDetailRequest; /** request in body */

export type GetApiAclSynctaskListParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type PostApiAclSynctaskSyncParameters =
  SyncSyncTaskRequest; /** request in body */

export type GetApiAclTreeDetailParameters = {
  /** 权限树维度 in query */
  dimensionKey?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type GetApiAclTreeListParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
};

export type GetApiAclTreeNodeDetailParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 权限对象树节点的唯一标识 in query */
  treeNodeKey?: string;
};

export type PostApiAclTreeNodeEditParameters =
  UpdateTreeNodeConfigRequest; /** request in body */

export type PostApiAclTreeSyncParameters =
  SyncTreeRequest; /** syncTreeRequest in body */

export type GetApiAclUserListAddPagingParameters = {
  /** 关键字 in query */
  keyword?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 角色id in query */
  roleId?: number;
};

export type GetApiAclUserListTreePagingParameters = {
  /** 关键字 in query */
  keyword?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 角色id in query */
  roleId?: number;
};

export type PostApiAclUserListUserCreateParameters =
  UserListCreateUserRequest; /** request in body */

export type PostApiAclUserListUserDeleteParameters =
  UserListDeleteUserRequest; /** request in body */

export type PostApiAclUserListUserFindParameters =
  UserFindByUserIdRequest; /** request in body */

export type PostApiClientAdminCreateParameters =
  ClientCreateRequest; /** request in body */

export type PostApiClientAdminDestroyParameters =
  ClientDestroyRequest; /** request in body */

export type PostApiClientAdminSecretAuthParameters =
  ClientSecretAuthRequest; /** request in body */

export type PostApiClientAdminSecretUpdateParameters =
  ClientUpdateSecretRequest; /** request in body */

export type PostApiClientAdminUpdateParameters =
  ClientUpdateRequest; /** request in body */

export type GetApiClientAdminByClientIdInfoParameters = {
  /** clientId in path */
  clientId: string;
};

export type PostApiEventLogAdminListEventTimeParameters =
  ListEventLogAndUserByAfterEventTimeRequest; /** request in body */

export type PostApiEventLogAdminListLastEventParameters =
  ListBusinessAndUserByLastIdRequest; /** request in body */

export type GetApiOauthMeParameters = {
  /** in query */
  authenticated?: boolean;
  /** in query */
  "authorities[0].authority"?: string;
  /** in query */
  credentials?: Record<string, unknown>;
  /** in query */
  details?: Record<string, unknown>;
  /** in query */
  principal?: Record<string, unknown>;
};

export type GetApiOauthMeOldParameters = {
  /** in query */
  authenticated?: boolean;
  /** in query */
  "authorities[0].authority"?: string;
  /** in query */
  credentials?: Record<string, unknown>;
  /** in query */
  details?: Record<string, unknown>;
  /** in query */
  principal?: Record<string, unknown>;
};

export type GetApiOpenClientAuthorizationParameters = {
  /** in query */
  authenticated?: boolean;
  /** in query */
  "authorities[0].authority"?: string;
  /** in query */
  credentials?: Record<string, unknown>;
  /** in query */
  details?: Record<string, unknown>;
  /** in query */
  principal?: Record<string, unknown>;
};

export type PostApiOpenClientManagerClientParameters =
  ClientCreate; /** request in body */

export type GetApiOpenClientManagerClientByClientIdParameters = {
  /** clientId in path */
  clientId: string;
};

export type DeleteApiOpenClientManagerClientByClientIdParameters = {
  /** clientId in path */
  clientId: string;
};

export type PostApiOpenClientManagerClientByClientIdAuthorityParameters = {
  /** authority in query */
  authority: string;
  /** clientId in path */
  clientId: string;
};

export type DeleteApiOpenClientManagerClientByClientIdAuthorityParameters = {
  /** authority in query */
  authority: string;
  /** clientId in path */
  clientId: string;
};

export type PostApiOpenClientManagerClientByClientIdGrantTypeParameters = {
  /** clientId in path */
  clientId: string;
  /** grantType in query */
  grantType: string;
};

export type DeleteApiOpenClientManagerClientByClientIdGrantTypeParameters = {
  /** clientId in path */
  clientId: string;
  /** grantType in query */
  grantType: string;
};

export type GetApiOpenV1UsersParameters = {
  /** query in query */
  query: string;
};

export type GetApiOpenV1UsersPageParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 查询条件 in query */
  query: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiOpenV1UsersByIdParameters = {
  /** id in path */
  id: number;
};

export type GetApiOpenV2UsersFindByIdentifyParameters = {
  /** 邮箱 in query */
  email: string;
  /** 手机号 in query */
  mobile: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
  /** 用户名 in query */
  username: string;
};

export type GetApiOpenV2UsersFindByIdsParameters = {
  /** 用户id列表 in query */
  ids: Array<number>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiOpenV2UsersFindByPrefixParameters = {
  /** in query */
  emailPrefix?: string;
  /** in query */
  nicknamePrefix?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** in query */
  phoneNumberPrefix?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
  /** in query */
  usernamePrefix?: string;
};

export type GetApiOpenV2UsersByIdParameters = {
  /** id in path */
  id: number;
};

export type PostApiTrantorContainerTreeLoadParameters = {
  /** dataActionKey in query */
  dataActionKey?: string;
  /** modelKey in query */
  modelKey: string;

  /** parentField in query */
  parentField?: string;
  /** parentId in query */
  parentId?: string;
} & TreeContainerParams; /** params in body */

export type PostApiTrantorContainerTreeLoadIdsParameters = {
  /** dataActionKey in query */
  dataActionKey?: string;
  /** ids in query */
  ids: string;
  /** modelKey in query */
  modelKey: string;

  /** parentField in query */
  parentField?: string;
} & TreeContainerParams; /** params in body */

export type PostApiTrantorContainerTreeReverseBuildParameters = {
  /** dataActionKey in query */
  dataActionKey?: string;
  /** modelKey in query */
  modelKey: string;

  /** parentField in query */
  parentField?: string;
  /** recordParentId in query */
  recordParentId: string;
} & TreeContainerParams; /** params in body */

export type PostApiTrantorContainerTreeReverseBuildPathParameters = {
  /** dataActionKey in query */
  dataActionKey?: string;
  /** id in query */
  id: string;
  /** limit in query */
  limit?: number;
  /** modelKey in query */
  modelKey: string;

  /** parentField in query */
  parentField?: string;
} & TreeContainerParams; /** params in body */

export type PostApiTrantorContainerTreeSearchParameters = {
  /** dataActionKey in query */
  dataActionKey?: string;
  /** leafOnly in query */
  leafOnly: boolean;
  /** modelKey in query */
  modelKey: string;

  /** parentField in query */
  parentField?: string;
  /** searchText in query */
  searchText?: string;
} & TreeContainerParams; /** params in body */

export type PostApiUserAdminAvatarUploadParameters = {
  /** 上传的头像 in formData */
  avatar: any;
};

export type PostApiUserAdminBatchCreateUserParameters = {
  /** operatorId in header */
  operatorId?: number;
} & BatchCreateUserRequest; /** request in body */

export type PostApiUserAdminBatchFreezeParameters = {
  /** operatorId in header */
  operatorId?: number;
} & BatchFreezeUserRequest; /** request in body */

export type PostApiUserAdminChangeFullInfoParameters = {
  /** operatorId in header */
  operatorId?: number;
} & 修改用户信息基类; /** request in body */

export type PostApiUserAdminCheckCaptchaParameters =
  CheckCaptchaRequest; /** captchaRequest in body */

export type GetApiUserAdminCheckPwdExpiredParameters =
  FindUserByIdentifyRequest; /** request in body */

export type PostApiUserAdminCreateParameters = {
  /** operatorId in header */
  operatorId?: number;
} & CreateSpecialUserRequest; /** request in body */

export type PostApiUserAdminCreateCommonUserParameters = {
  /** operatorId in header */
  operatorId?: number;
} & CreateUserRequest; /** request in body */

export type PostApiUserAdminCreateSpecialUserParameters = {
  /** operatorId in header */
  operatorId?: number;
} & CreateSpecialUserRequest; /** request in body */

export type PostApiUserAdminCreateUserParameters = {
  /** operatorId in header */
  operatorId?: number;
} & CreateUserRequest; /** request in body */

export type GetApiUserAdminCurrentUserParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PostApiUserAdminDestroySendEmailCodeParameters =
  DestroyUserSendEmailCodeRequest; /** request in body */

export type PostApiUserAdminDestroySendSmsCodeParameters =
  DestroyUserSendSmsCodeRequest; /** request in body */

export type PostApiUserAdminDisableParameters = {
  /** operatorId in header */
  operatorId?: number;
} & DisableUserRequest; /** request in body */

export type PostApiUserAdminEnableParameters = {
  /** operatorId in header */
  operatorId?: number;
} & EnableUserRequest; /** request in body */

export type PostApiUserAdminEndpointChangeRelationParameters =
  ChangeRelationRequest; /** request in body */

export type PostApiUserAdminEndpointCreateParameters =
  CreateAppRequest; /** request in body */

export type PostApiUserAdminEndpointDeleteParameters =
  DeleteAppRequest; /** request in body */

export type PostApiUserAdminEndpointListParameters =
  AppListRequest; /** request in body */

export type PostApiUserAdminEndpointPagingParameters =
  AppPagingRequest; /** request in body */

export type PostApiUserAdminEndpointRelateParameters =
  CreateUserAppRelationRequest; /** request in body */

export type PostApiUserAdminEndpointUnboundParameters =
  ReleaseRelationsRequest; /** request in body */

export type PostApiUserAdminEndpointUpdateParameters =
  UpdateAppRequest; /** request in body */

export type PostApiUserAdminEndpointUserListParameters =
  QueryFindUserAndRelationRequest; /** request in body */

export type GetApiUserAdminFindByIdsParameters = {
  /** 用户id列表 in query */
  ids: Array<number>;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserAdminFindUserByIdParameters = {
  /** 用户ID in query */
  id: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserAdminFindUserByMobileParameters = {
  /** 手机号 in query */
  mobile: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PutApiUserAdminFreezeByIdParameters = {
  /** 用户ID in path */
  id: number;
  /** operatorId in header */
  operatorId?: number;
};

export type GetApiUserAdminGetTenantCaptchaParameters = {
  /** tenantId in query */
  tenantId?: number;
};

export type PostApiUserAdminMobileBindParameters =
  BindByMobileAndSmsCodeRequest; /** request in body */

export type PostApiUserAdminMobileBindSendSmsCodeParameters =
  BindMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserAdminMobileResetParameters =
  ResetMobileRequest; /** request in body */

export type PostApiUserAdminMobileResetCheckSmsCodeParameters =
  CheckVerifyCodeRequest; /** request in body */

export type PostApiUserAdminMobileResetSendSmsParameters =
  SendNoticeRequest; /** request in body */

export type PostApiUserAdminMobileResetSendSmsNoCaptchaParameters =
  SendNoticeWithNoCaptchaRequest; /** request in body */

export type PostApiUserAdminMobileUnbindParameters =
  UnBindMobileAndSmsCodeRequest; /** request in body */

export type PostApiUserAdminMobileUnbindSendSmsCodeParameters =
  UnBindMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserAdminMobileVerifyCheckSmsCodeParameters =
  CheckVerifyCodeRequest; /** request in body */

export type PostApiUserAdminMobileVerifySendSmsParameters =
  VerifyMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserAdminOriginCreateParameters =
  CreateOriginRequest; /** request in body */

export type PostApiUserAdminOriginDeleteParameters =
  DeleteOriginRequest; /** request in body */

export type GetApiUserAdminOriginFindByIdParameters = {
  /** 用户源ID in query */
  id: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserAdminOriginFindByKeyParameters = {
  /** key in query */
  key: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserAdminOriginListParameters = {
  /** 用户源描述 in query */
  desc?: string;
  /** 用户源id in query */
  id?: number;
  /** key in query */
  key?: string;
  /** 用户源名称 in query */
  name?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserAdminOriginPagingParameters = {
  /** 用户源描述 in query */
  desc?: string;
  /** 用户源id in query */
  id?: number;
  /** key in query */
  key?: string;
  /** 用户源名称 in query */
  name?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PostApiUserAdminOriginUpdateParameters =
  UpdateOriginRequest; /** request in body */

export type GetApiUserAdminPagingParameters = {
  /** 注册渠道 in query */
  channel?: string;
  /** 渠道类型 in query */
  channelType?: string;
  /** 用户邮箱 in query */
  email?: string;
  /** 结束时间 in query */
  endRegisterTime?: string;
  /** 不包含访客 in query */
  excludeGuest?: boolean;
  /** 用户id in query */
  id?: number;
  /** 是否在线 in query */
  isOnline?: boolean;
  /** 状态 in query */
  locked?: number;
  /** 用户手机号 in query */
  mobile?: string;
  /** 昵称 in query */
  nickname?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 用户手机号前缀 in query */
  prefix?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
  /** 关键词 in query */
  searchKey?: string;
  /** 来源标识 in query */
  source?: string;
  /** 来源类型 in query */
  sourceType?: string;
  /** 开始时间 in query */
  startRegisterTime?: string;
  /** 更新结束时间 in query */
  updateEndTime?: string;
  /** 更新开始时间 in query */
  updateStartTime?: string;
  /** 用户名 in query */
  username?: string;
};

export type GetApiUserAdminPagingUidsParameters = {
  /** 注册渠道 in query */
  channel?: string;
  /** 渠道类型 in query */
  channelType?: string;
  /** 用户邮箱 in query */
  email?: string;
  /** 结束时间 in query */
  endRegisterTime?: string;
  /** 状态 in query */
  locked?: number;
  /** 用户手机号 in query */
  mobile?: string;
  /** 昵称 in query */
  nickname?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 用户手机号前缀 in query */
  prefix?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
  /** 来源标识 in query */
  source?: string;
  /** 来源类型 in query */
  sourceType?: string;
  /** 开始时间 in query */
  startRegisterTime?: string;
  /** 更新结束时间 in query */
  updateEndTime?: string;
  /** 更新开始时间 in query */
  updateStartTime?: string;
  /** 用户id集合 in query */
  userIds?: Array<number>;
  /** 用户名 in query */
  username?: string;
};

export type PutApiUserAdminPasswordChangePasswordParameters =
  ChangeUserPasswordRequest; /** request in body */

export type PostApiUserAdminPasswordResetByEmailParameters =
  PasswordResetByEmailCodeRequest; /** request in body */

export type PostApiUserAdminPasswordResetBySmsParameters =
  PasswordResetBySmsCodeRequest; /** request in body */

export type PostApiUserAdminPasswordResetBySmsVerifyTokenParameters =
  PasswordResetBySmsVerifyTokenRequest; /** request in body */

export type PostApiUserAdminPasswordResetByVerifyTokenParameters =
  PasswordResetByVerifyTokenRequest; /** request in body */

export type PostApiUserAdminPasswordResetEmailCodeVerifyParameters =
  PasswordResetEmailCodeVerifyRequest; /** request in body */

export type PostApiUserAdminPasswordResetPasswordParameters =
  ResetUserPasswordRequest; /** request in body */

export type PostApiUserAdminPasswordResetSmsCodeVerifyParameters =
  PasswordResetSmsCodeVerifyRequest; /** request in body */

export type PostApiUserAdminPasswordSendEmailParameters =
  PasswordResetSendEmailCodeRequest; /** request in body */

export type PostApiUserAdminPasswordSendSmsParameters =
  PasswordResetSendSmsCodeRequest; /** request in body */

export type PostApiUserAdminQrcodeAuthorizeParameters =
  BindUidWithUserRequest; /** request in body */

export type PostApiUserAdminQrcodeCancelAuthorizeParameters =
  CancelAuthorizeQrCodeRequest; /** request in body */

export type GetApiUserAdminQrcodeQuireQrCodeStateParameters = {
  /** 唯一标识id in query */
  uid: string;
};

export type GetApiUserAdminQrcodeResolveByUidParameters = {
  /** 唯一标识id in path */
  uid: string;
};

export type PutApiUserAdminRemoveCacheByIdParameters = {
  /** 用户ID in path */
  id: number;
  /** operatorId in header */
  operatorId?: number;
};

export type GetApiUserAdminThirdPartInfoFindByUserIdTypeAppIdParameters = {
  /** in query */
  appId?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
  /** in query */
  type?: string;
  /** in query */
  userId?: number;
};

export type PostApiUserAdminTokenParameters =
  FindUserByTokenRequest; /** findUserByTokenRequest in body */

export type GetApiUserAdminTrantorLoginParameters = {
  /** redirectUrl in query */
  redirectUrl: string;
};

export type GetApiUserAdminTrantorLogoutParameters = {
  /** redirectUrl in query */
  redirectUrl: string;
};

export type PostApiUserAdminUnFreezeByMobileParameters =
  UnfreezeByMobileRequest; /** request in body */

export type PostApiUserAdminUnfreezeSendSmsCodeParameters =
  UnFreezeByMobileSendSmsCodeRequest; /** request in body */

export type PutApiUserAdminUnfreezeByIdParameters = {
  /** 用户ID in path */
  id: number;
  /** operatorId in header */
  operatorId?: number;
};

export type PutApiUserAdminUserDestroyParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PutApiUserAdminUserDestroyByEmailParameters =
  UserDestroyRequest; /** request in body */

export type PutApiUserAdminUserDestroyByMobileParameters =
  UserDestroyRequest; /** request in body */

export type PutApiUserAdminUserInfoParameters =
  ChangeUserInfoRequest; /** request in body */

export type PostApiUserWebAvatarUploadParameters = {
  /** 上传的头像 in formData */
  avatar: any;
};

export type PostApiUserWebCheckCaptchaParameters =
  CheckCaptchaRequest; /** captchaRequest in body */

export type GetApiUserWebCheckPwdExpiredParameters =
  FindUserByIdentifyRequest; /** request in body */

export type GetApiUserWebCurrentUserParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PostApiUserWebDestroySendEmailCodeParameters =
  DestroyUserSendEmailCodeRequest; /** request in body */

export type PostApiUserWebDestroySendSmsCodeParameters =
  DestroyUserSendSmsCodeRequest; /** request in body */

export type PostApiUserWebEmailBindParameters =
  BindByEmailAndEmailCodeRequest; /** request in body */

export type PostApiUserWebEmailBindSendEmailCodeParameters =
  BindEmailSendEmailCodeRequest; /** request in body */

export type PostApiUserWebEmailResetParameters =
  ResetEmailRequest; /** request in body */

export type PostApiUserWebEmailResetCheckEmailCodeParameters =
  CheckVerifyCodeRequest; /** request in body */

export type PostApiUserWebEmailResetSendEmailParameters =
  SendNoticeRequest; /** request in body */

export type PostApiUserWebEmailResetSendEmailNoCaptchaParameters =
  SendNoticeWithNoCaptchaRequest; /** request in body */

export type PostApiUserWebEmailUnbindParameters =
  UnBindEmailAndEmailCodeRequest; /** request in body */

export type PostApiUserWebEmailUnbindSendEmailCodeParameters =
  UnBindEmailSendEmailCodeRequest; /** request in body */

export type PostApiUserWebEmailVerifyCheckEmailCodeParameters =
  CheckVerifyCodeRequest; /** request in body */

export type PostApiUserWebEmailVerifySendEmailParameters =
  VerifyEmailSendEmailCodeRequest; /** request in body */

export type GetApiUserWebGetTenantCaptchaParameters = {
  /** tenantId in query */
  tenantId?: number;
};

export type PostApiUserWebGuestGuestEncrypedParameters =
  GuestEncrypedRequest; /** request in body */

export type GetApiUserWebGuestLoginByEncrypedParameters = {
  /** 确认密码 in query */
  confirm?: string;
  /** 加密信息 in query */
  encryped: string;
  /** in query */
  identify?: string;
  /** 是否APP调用，false指代PC调用 in query */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文 in query */
  key?: Record<string, unknown>;
  /** 新密码 in query */
  newPassword: string;
  /** 原始密码 in query */
  oldPassword?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 密码 in query */
  password?: string;
  /** 回调地址 in query */
  redirectUrl?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserWebGuestSignCaptchaChallengeParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PostApiUserWebGuestSignUpByGuestParameters =
  SignUpByGuestRequest; /** request in body */

export type PostApiUserWebLoginBuyerIdentifyParameters =
  LoginByPasswordRequest; /** request in body */

export type PostApiUserWebLoginEmailParameters =
  LoginByEmailAndPasswordRequest; /** request in body */

export type PostApiUserWebLoginIdentifyParameters =
  LoginByPasswordRequest; /** request in body */

export type PostApiUserWebLoginIdentifyVerifyParameters =
  LoginByPasswordRequest; /** request in body */

export type PostApiUserWebLoginLoginByEmailCodeParameters =
  LoginByEmailAndEmailCodeRequest; /** request in body */

export type PostApiUserWebLoginLoginByEmailCodeAfterVerifyParameters =
  LoginByEmailAndEmailCodeAfterVerifyRequest; /** request in body */

export type PostApiUserWebLoginLoginByLocalNumberParameters =
  LoginByLocalNumberRequest; /** request in body */

export type PostApiUserWebLoginLoginBySmsCodeParameters =
  LoginByMobileAndSmsCodeRequest; /** request in body */

export type GetApiUserWebLoginLoginCaptchaChallengeParameters = {
  /** identify in query */
  identify?: string;
};

export type PostApiUserWebLoginLoginSendEmailCodeParameters =
  LoginByEmailSendEmailCodeRequest; /** request in body */

export type PostApiUserWebLoginLoginSendSmsCodeParameters =
  LoginByMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserWebLoginMobileParameters =
  LoginByMobileAndPasswordRequest; /** request in body */

export type PostApiUserWebLoginUsernameParameters =
  LoginByUsernameAndPasswordRequest; /** request in body */

export type PostApiUserWebMobileBindParameters =
  BindByMobileAndSmsCodeRequest; /** request in body */

export type PostApiUserWebMobileBindSendSmsCodeParameters =
  BindMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserWebMobileResetParameters =
  ResetMobileRequest; /** request in body */

export type PostApiUserWebMobileResetCheckSmsCodeParameters =
  CheckVerifyCodeRequest; /** request in body */

export type PostApiUserWebMobileResetSendSmsParameters =
  SendNoticeRequest; /** request in body */

export type PostApiUserWebMobileResetSendSmsNoCaptchaParameters =
  SendNoticeWithNoCaptchaRequest; /** request in body */

export type PostApiUserWebMobileUnbindParameters =
  UnBindMobileAndSmsCodeRequest; /** request in body */

export type PostApiUserWebMobileUnbindSendSmsCodeParameters =
  UnBindMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserWebMobileVerifyCheckSmsCodeParameters =
  CheckVerifyCodeRequest; /** request in body */

export type PostApiUserWebMobileVerifySendSmsParameters =
  VerifyMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserWebOriginCreateParameters =
  CreateOriginRequest; /** request in body */

export type PostApiUserWebOriginDeleteParameters =
  DeleteOriginRequest; /** request in body */

export type GetApiUserWebOriginFindByIdParameters = {
  /** 用户源ID in query */
  id: number;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserWebOriginFindByKeyParameters = {
  /** key in query */
  key: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserWebOriginListParameters = {
  /** 用户源描述 in query */
  desc?: string;
  /** 用户源id in query */
  id?: number;
  /** key in query */
  key?: string;
  /** 用户源名称 in query */
  name?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type GetApiUserWebOriginPagingParameters = {
  /** 用户源描述 in query */
  desc?: string;
  /** 用户源id in query */
  id?: number;
  /** key in query */
  key?: string;
  /** 用户源名称 in query */
  name?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 当前页码-默认1，从1开始 in query */
  pageNo?: number;
  /** 每页条数-默认20，最大1024 in query */
  pageSize?: number;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PostApiUserWebOriginUpdateParameters =
  UpdateOriginRequest; /** request in body */

export type PutApiUserWebPasswordChangePasswordParameters =
  ChangeUserPasswordRequest; /** request in body */

export type PostApiUserWebPasswordResetByEmailParameters =
  PasswordResetByEmailCodeRequest; /** request in body */

export type PostApiUserWebPasswordResetBySmsParameters =
  PasswordResetBySmsCodeRequest; /** request in body */

export type PostApiUserWebPasswordResetBySmsVerifyTokenParameters =
  PasswordResetBySmsVerifyTokenRequest; /** request in body */

export type PostApiUserWebPasswordResetByVerifyTokenParameters =
  PasswordResetByVerifyTokenRequest; /** request in body */

export type PostApiUserWebPasswordResetEmailCodeVerifyParameters =
  PasswordResetEmailCodeVerifyRequest; /** request in body */

export type PostApiUserWebPasswordResetPasswordParameters =
  ResetUserPasswordRequest; /** request in body */

export type PostApiUserWebPasswordResetSmsCodeVerifyParameters =
  PasswordResetSmsCodeVerifyRequest; /** request in body */

export type PostApiUserWebPasswordSendEmailParameters =
  PasswordResetSendEmailCodeRequest; /** request in body */

export type PostApiUserWebPasswordSendSmsParameters =
  PasswordResetSendSmsCodeRequest; /** request in body */

export type PostApiUserWebQrcodeAuthorizeParameters =
  BindUidWithUserRequest; /** request in body */

export type PostApiUserWebQrcodeCancelAuthorizeParameters =
  CancelAuthorizeQrCodeRequest; /** request in body */

export type GetApiUserWebQrcodeQuireQrCodeStateParameters = {
  /** 唯一标识id in query */
  uid: string;
};

export type GetApiUserWebQrcodeResolveByUidParameters = {
  /** 唯一标识id in path */
  uid: string;
};

export type GetApiUserWebSamlSsoCallbackParameters = {
  /** SAMLResponse in query */
  SAMLResponse: string;
};

export type PostApiUserWebSamlSsoCallbackParameters = {
  /** SAMLResponse in query */
  SAMLResponse: string;
};

export type GetApiUserWebSignUpCheckExistByIdentifierParameters = {
  /** identifier in query */
  identifier: string;
};

export type PostApiUserWebSignUpRegisterByEmailCodeParameters =
  SignUpByEmailAndEmailCodeRequest; /** request in body */

export type PostApiUserWebSignUpRegisterByEmailCodeVerifyParameters =
  SignUpByEmailAndEmailCodeAndReturnTokenRequest; /** request in body */

export type PostApiUserWebSignUpRegisterBySmsCodeParameters =
  SignUpByMobileAndSmsCodeRequest; /** request in body */

export type PostApiUserWebSignUpRegisterBySmsCodeVerifyParameters =
  SignUpByMobileAndSmsCodeAndReturnTokenRequest; /** request in body */

export type PostApiUserWebSignUpRegisterSendEmailCodeParameters =
  SignUpByEmailSendEmailCodeRequest; /** request in body */

export type PostApiUserWebSignUpRegisterSendSmsCodeParameters =
  SignUpByMobileSendSmsCodeRequest; /** request in body */

export type PostApiUserWebSignUpSignUpByCodeVerifyParameters =
  SignUpByVerifyTokenRequest; /** request in body */

export type GetApiUserWebThirdPartInfoFindByUserIdTypeAppIdParameters = {
  /** in query */
  appId?: string;
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
  /** in query */
  type?: string;
  /** in query */
  userId?: number;
};

export type PostApiUserWebThirdPartAppAlipayAppLoginParameters =
  AppAuthAliPayBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppAppleLoginParameters =
  AppAuthAppleBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppEpWeChatAppLoginParameters =
  AppAuthEpWeChatAppBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppEpWeChatLoginParameters =
  AppAuthEpWeChatBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppEpWechatAppBindParameters =
  EpWeChatAppBindBean; /** appBindBean in body */

export type PostApiUserWebThirdPartAppEpWechatAppParsingPhoneParameters =
  EpWeChatAppBindBean; /** appBindBean in body */

export type PostApiUserWebThirdPartAppFacebookLoginParameters =
  AppAuthFacebookBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppGoogleLoginParameters =
  AppAuthGoogleBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppQqLoginParameters =
  AppAuthQQBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppWeChatLoginParameters =
  AppAuthWeChatBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppWeiBoLoginParameters =
  AppAuthWeiBoBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppWeiboAppLoginParameters =
  AppAuthWeiBoAppBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppWxAppBindParameters =
  WxAppBindBean; /** wxAppBindRequest in body */

export type PostApiUserWebThirdPartAppWxAppLoginParameters =
  AppAuthWxAppBean; /** authInfo in body */

export type PostApiUserWebThirdPartAppWxAppParsingPhoneParameters =
  WxAppBindBean; /** wxAppBindRequest in body */

export type GetApiUserWebThirdPartAuthNewByThirdPartTypeParameters = {
  /** 支付宝回调编码 in query */
  auth_code?: string;
  /** 回调编码 in query */
  code: string;
  /** 回调错误信息 in query */
  error?: string;
  /** apple返回的用户信息 in query */
  name?: string;
  /** 存放目标URL和防止CORS in query */
  state?: string;
  /** 登录方式 in path */
  thirdPartType: string;
};

export type PostApiUserWebThirdPartAuthAppleParameters =
  BaseThirdPartCodeBean; /** request in body */

export type GetApiUserWebThirdPartAuthByThirdPartTypeParameters = {
  /** 支付宝回调编码 in query */
  auth_code?: string;
  /** 回调编码 in query */
  code: string;
  /** 回调错误信息 in query */
  error?: string;
  /** apple返回的用户信息 in query */
  name?: string;
  /** 存放目标URL和防止CORS in query */
  state?: string;
  /** 登录方式 in path */
  thirdPartType: string;
};

export type GetApiUserWebThirdPartAuthorizationParameters = {
  /** appName in query */
  appName?: string;
  /** 回调地址 in query */
  targetUrl?: string;
  /** 登录方式 in query */
  type: string;
};

export type PostApiUserWebThirdPartAuthorizationParameters =
  AuthorizeByThirdPartBean; /** request in body */

export type GetApiUserWebThirdPartBindCurrentUserParameters = {
  /** appName in query */
  appName?: string;
  /** 回调地址 in query */
  targetUrl: string;
  /** 登录方式 in query */
  type: string;
};

export type PostApiUserWebThirdPartBindCurrentUserParameters =
  ThirdPartBindBean; /** request in body */

export type PostApiUserWebThirdPartBindEmailByEmailCodeParameters =
  ThirdAccountBindByEmailAndEmailCodeRequest; /** request in body */

export type PostApiUserWebThirdPartBindEmailSendEmailCodeParameters =
  ThirdAccountBindByEmailSendEmailCodeRequest; /** request in body */

export type PostApiUserWebThirdPartBindIdentifyParameters =
  ThirdAccountBindByIdentifyRequest; /** request in body */

export type PostApiUserWebThirdPartBindMobileBySmsCodeParameters =
  ThirdAccountBindByMobileAndSmsCodeRequest; /** request in body */

export type PostApiUserWebThirdPartBindMobileSendSmsCodeParameters =
  ThirdAccountBindByMobileSendSmsCodeRequest; /** request in body */

export type GetApiUserWebThirdPartCompensateParameters = {
  /** appName in query */
  appName?: string;
  /** id in query */
  id: number;
  /** type in query */
  type: string;
  /** userId in query */
  userId: number;
};

export type PostApiUserWebThirdPartOauth1AppTwitterLoginParameters =
  OAuth10AppAuthTwitterBean; /** authInfo in body */

export type GetApiUserWebThirdPartOauth1AuthByThirdPartTypeParameters = {
  /** 回调错误信息 in query */
  error?: string;
  /** 回调oauthVerifier in query */
  oauth_verifier: string;
  /** 存放目标URL和防止CORS in query */
  state?: string;
  /** 登录方式 in path */
  thirdPartType: string;
};

export type GetApiUserWebThirdPartOauth1AuthorizationParameters = {
  /** appName in query */
  appName?: string;
  /** 回调地址 in query */
  targetUrl?: string;
  /** 登录方式 in query */
  type: string;
};

export type PostApiUserWebThirdPartQrcodeAuthorizationParameters =
  AuthorizeByThirdPartBean; /** request in body */

export type PostApiUserWebThirdPartQrcodeBindCurrentUserParameters =
  ThirdPartBindBean; /** request in body */

export type PostApiUserWebThirdPartUnbindParameters =
  UnBindThirdAccountRequest; /** request in body */

export type PostApiUserWebTokenParameters =
  FindUserByTokenRequest; /** findUserByTokenRequest in body */

export type GetApiUserWebTrantorLoginParameters = {
  /** redirectUrl in query */
  redirectUrl: string;
};

export type GetApiUserWebTrantorLogoutParameters = {
  /** redirectUrl in query */
  redirectUrl: string;
};

export type PutApiUserWebUserDestroyParameters = {
  /** in query */
  "operationType.description"?: string;
  /** in query */
  "operationType.write"?: boolean;
  /** 用户源 in query */
  origin?: string;
  /** 关联应用端（可选） in query */
  relatedAppId?: number;
};

export type PutApiUserWebUserDestroyByEmailParameters =
  UserDestroyRequest; /** request in body */

export type PutApiUserWebUserDestroyByMobileParameters =
  UserDestroyRequest; /** request in body */

export type PutApiUserWebUserInfoParameters =
  ChangeUserInfoRequest; /** request in body */

export type PostOpenApiAclClientPermissionAuthListPermissionParameters =
  AuthOpenRequest; /** request in body */

export type PostOpenApiAclClientPermissionFindUserAllPermissionParameters =
  AuthOpenFindUserAllRequest; /** request in body */

export type PostOpenApiAclClientPermissionQueryUserAllRoleParameters =
  OpenQueryUserAllRoleRequest; /** request in body */

export type PostOpenApiAclGrantFindRoleAllPermissionParameters =
  RoleOpenFindAllPermissionRequest; /** request in body */

export type PostOpenApiAclGrantGrantToRoleParameters =
  RoleOpenGrantRequest; /** request in body */

export type PostOpenApiAclPermissionCreatePermissionParameters =
  PermissionOpenCreateRequest; /** request in body */

export type PostOpenApiAclPermissionDeletePermissionByIdParameters =
  PermissionOpenDeleteByIdRequest; /** request in body */

export type PostOpenApiAclPermissionDeletePermissionByKeyParameters =
  PermissionOpenDeleteByKeyRequest; /** request in body */

export type PostOpenApiAclPermissionFindPermissionParameters =
  PermissionOpenFindRequest; /** request in body */

export type PostOpenApiAclPermissionListPermissionParameters =
  PermissionOpenListRequest; /** request in body */

export type PostOpenApiAclPermissionUpdatePermissionByIdParameters =
  PermissionOpenUpdateByIdRequest; /** request in body */

export type PostOpenApiAclPermissionUpdatePermissionByKeyParameters =
  PermissionOpenUpdateByKeyRequest; /** request in body */

export type AccountInformation = {
  /** 邮箱  */
  email?: string;
  /** firstName  */
  firstName?: string;
  /** 昵称  */
  fullName?: string;
  /** lastName  */
  lastName?: string;
};

export type AddRoleRelationRequest = {
  /** 目标id  */
  bizId?: string;
  /** 目标类型  */
  bizType?: string;
  /** 需要授权的角色id的集合  */
  roleIds?: Array<number>;
  /** 租户id  */
  tenantId?: number;
};

export type AdminFrontConfigResponse = {
  /** appNameIntlKey  */
  appNameIntlKey?: string;
  /** 背景图  */
  backgroundImage?: string;
  /** 前端样式路径  */
  baseFrontPath?: string;
  /** 工作台  */
  dashboard?: boolean;
  /** 前景图  */
  foregroundImage?: string;
  /** logo  */
  logo?: string;
  /** logo位置  */
  logoPosition?: string;
  /** 主题色  */
  primaryColor?: string;
  /** 是否开启扫码登录  */
  qrcodeLogin?: boolean;
  registryType?: Array<string>;
  thirdPartyLoginTypes?: Array<string>;
};

export type AppAuthAliPayBean = {
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  code?: string;
};

export type AppAuthAppleBean = {
  /** 账户信息  */
  accountInformation?: AccountInformation;
  appName?: string;
  /** apple 用户唯一标识  */
  appleUserId?: string;
  /** apple验证信息  */
  authorizationCode?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  /** apple的jwt格式token  */
  identityToken?: string;
};

export type AppAuthEpWeChatAppBean = {
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  code?: string;
};

export type AppAuthEpWeChatBean = {
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  code?: string;
};

export type AppAuthFacebookBean = {
  /** 访问令牌  */
  accessToken: string;
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
};

export type AppAuthGoogleBean = {
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  /** ID令牌  */
  idToken: string;
};

export type AppAuthQQBean = {
  accessToken?: string;
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  openId?: string;
  unionId?: string;
};

export type AppAuthWeChatBean = {
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  code?: string;
};

export type AppAuthWeiBoAppBean = {
  accessToken?: string;
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
};

export type AppAuthWeiBoBean = {
  accessToken?: string;
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
};

export type AppAuthWxAppBean = {
  appName?: string;
  /** 头像地址  */
  avatarUrl?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  /** 授权码  */
  code?: string;
  /** 性别  */
  gender?: string;
  /** 昵称  */
  nickName?: string;
};

export type AppCheckExistRequest = {
  /** 标识  */
  key?: string;
  /** 名称  */
  name?: string;
  /** 项目id  */
  projectId?: number;
};

export type AppCreateRequest = {
  /** 描述  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 项目下逻辑主键，创建必填、修改和id选择一个  */
  key: string;
  /** 元信息  */
  metaData?: string;
  /** 应用名称，创建必填  */
  name?: string;
  /** 项目id，创建必填  */
  projectId?: number;
};

export type AppDeleteRequest = {
  /** 描述  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 项目下逻辑主键，创建必填、删除和id选择一个  */
  key: string;
  /** 元信息  */
  metaData?: string;
  /** 应用名称，创建必填  */
  name?: string;
  /** 项目id，创建必填  */
  projectId?: number;
};

export type AppInfo = {
  /** 描述信息  */
  desc?: string;
  /** appId  */
  id?: number;
  internal?: boolean;
  /** 应用key  */
  key?: string;
  /** 应用名  */
  name?: string;
  /** tenantId  */
  tenantId?: number;
};

export type AppListRequest = {
  /** 描述信息  */
  desc?: string;
  /** 应用端id  */
  id?: number;
  internal?: boolean;
  /** 应用key  */
  key?: string;
  /** 应用名  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type AppPagingRequest = {
  /** 是否为内部应用  */
  isInternal?: boolean;
  /** 应用key  */
  key?: string;
  /** 应用名  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 当前页码-默认1，从1开始  */
  pageNo?: number;
  /** 每页条数-默认20，最大1024  */
  pageSize?: number;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type AppUpdateRequest = {
  /** 描述  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 项目下逻辑主键，创建必填、修改和id选择一个  */
  key: string;
  /** 元信息  */
  metaData?: string;
  /** 应用名称，创建必填  */
  name?: string;
  /** 项目id，创建必填  */
  projectId?: number;
};

export type AuthOpenFindUserAllRequest = {
  appKey?: string;
  type?: string;
  userId?: string;
};

export type AuthOpenRequest = {
  /** 应用key  */
  appKey?: string;
  /** 权限点列表  */
  permissions?: Array<Permission>;
  /** 用户id  */
  userId?: string;
};

export type AuthenticationInfo = {
  /** 鉴权失败的列表  */
  failList?: Array<AuthorizationInfo>;
  /** 鉴权是否成功  */
  success?: boolean;
  /** 鉴权成功的列表  */
  successList?: Array<AuthorizationInfo>;
};

export type AuthenticationRequest = {
  affiliationId?: string;
  affiliationType?: string;
  appKey?: string;
  permissions?: Array<Permission>;
  projectKey?: string;
  userId?: string;
  userType?: string;
};

export type AuthorizationInfo = {
  /** 鉴权范围  */
  authScope?: string;
  /** 鉴权范围配置信息  */
  dataPermissionMetadataList?: Array<DataPermissionMetadataPojo>;
  matchKey?: string;
  /** 元数据  */
  metaData?: string;
  /** 权限id  */
  permissionId?: number;
  /** 权限key  */
  permissionKey?: string;
  /** 接口路径权限配置  */
  permissionPath?: string;
  /** 权限规则  */
  permissionRule?: string;
  /** 权限类型  */
  permissionType?: string;
  /** 所属项目id  */
  projectId?: number;
  /** 角色id  */
  roleId?: number;
  /** 租户id  */
  tenantId?: number;
};

export type AuthorizeByThirdPartBean = {
  /** 应用名称  */
  appName?: string;
  /** 登录成功重定向地址  */
  targetUrl?: string;
  /** 第三方类型  */
  type: string;
};

export type BaseThirdPartCodeBean = {
  /** 授权code  */
  code?: string;
  /** error  */
  error?: string;
  /** state  */
  state?: string;
  /** thirdPartType  */
  thirdPartType?: string;
  /** 账户信息  */
  user?: AccountInformation;
};

export type BatchBizNodeCreateRoleRelationRequest = {
  bizIds?: Array<string>;
  bizType?: string;
  projectKey?: string;
  roleKey?: Array<string>;
  type?: string;
};

export type BatchBizNodeDeleteRoleRelationRequest = {
  bizIds?: Array<string>;
  bizType?: string;
  projectKey?: string;
  roleKeys?: Array<string>;
  type?: string;
};

export type BatchCreatePermissionFromJsonRequest = {
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 功能权限待创建Json  */
  permissionCreateJson?: string;
  /** 项目id  */
  projectId?: number;
};

export type BatchCreateUserRequest = {
  /** 操作者id  */
  operatorId?: number;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户批量创建参数  */
  users?: Array<CreateUserParam>;
};

export type BatchFreezeUserRequest = {
  /** 用户ids  */
  ids: Array<number>;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type BindByEmailAndEmailCodeRequest = {
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type BindByMobileAndSmsCodeRequest = {
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
};

export type BindEmailSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha: string;
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token: string;
};

export type BindMobileSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type BindUidWithUserRequest = {
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 唯一标识id  */
  uid: string;
};

export type BoundBusinessVariableInfo = {
  /** 上下文表达式  */
  expression?: string;
  /** 业务变量名  */
  name?: string;
  /** 权限id  */
  permissionId?: number;
};

export type CancelAuthorizeQrCodeRequest = {
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 唯一标识id  */
  uid: string;
};

export type CaptchaBean = {
  /** 图片验证码  */
  imageUrl?: string;
  /** 图片验证码token  */
  token?: string;
};

export type ChangeRelationRequest = {
  /** 新的用户与应用端绑定信息集合  */
  info?: UserEndpointInfo;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type ChangeUserInfoRequest = {
  /** 头像  */
  avatar?: string;
  /** 用户扩展字段  */
  extra?: { [key: string]: string };
  /** 用户昵称  */
  nickname?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户详情  */
  userDetail?: { [key: string]: string };
  /** 用户名  */
  username?: string;
};

export type ChangeUserPasswordRequest = {
  /** 确认密码  */
  confirm?: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type CheckCaptchaRequest = {
  /** 图片验证码答案  */
  captcha: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码 token  */
  token: string;
};

export type CheckVerifyCodeRequest = {
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 是否需要返回验证通过的token(用于防止跳过步骤)  */
  needVerifyToken?: boolean;
  /** 用户源  */
  origin?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 验证码  */
  verifyCode: string;
};

export type ClientCreate = {
  /** access token 过期时长  */
  accessTokenValiditySeconds?: number;
  /** clientID  */
  clientId?: string;
  /** client名称  */
  clientName?: string;
  /** client密钥  */
  clientSecret: string;
  /** refresh token 过期时长  */
  refreshTokenValiditySeconds?: number;
};

export type ClientCreateRequest = {
  /** access token 过期时长  */
  accessTokenValiditySeconds?: number;
  /** 数据变更通知地址  */
  alterNotifyUrl?: string;
  /** 应用等级  */
  appLevel?: number;
  /** 客户端角色  */
  authorities?: Array<string>;
  /** 认证方式  */
  authorizedGrantTypes: Array<string>;
  /** 自动授权作用域  */
  autoApproveScopes: Array<string>;
  /** clientID  */
  clientId: string;
  /** client名称  */
  clientName: string;
  /** client密钥  */
  clientSecret: string;
  /** 用户源  */
  origin?: string;
  /** refresh token 过期时长  */
  refreshTokenValiditySeconds?: number;
  /** 重定向地址  */
  registeredRedirectUris?: Array<string>;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 授权资源域  */
  resources?: Array<string>;
  /** 授权作用域  */
  scope?: Array<string>;
  /** 敏感&非敏感- true:敏感 false:非敏感  */
  sensitived?: boolean;
};

export type ClientDestroyRequest = {
  /** clientID  */
  clientId: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type ClientInfo = {
  /** access token 过期时长  */
  accessTokenValiditySeconds?: number;
  /** 额外信息  */
  additionalInformation?: string;
  /** 数据变更通知地址  */
  alterNotifyUrl?: string;
  /** 应用等级  */
  appLevel?: number;
  /** 权限  */
  authorities?: Array<string>;
  /** 授权方式  */
  authorizedGrantTypes?: Array<string>;
  /** 自动核准作用域  */
  autoApproveScopes?: Array<string>;
  /** clientID  */
  clientId?: string;
  /** client名称  */
  clientName?: string;
  /** id  */
  id?: number;
  /** refresh token 校验  */
  refreshTokenValidity?: string;
  /** refresh token 过期时长  */
  refreshTokenValiditySeconds?: number;
  /** 注册的重定向地址  */
  registeredRedirectUris?: Array<string>;
  /** 资源信息的id  */
  resourceIds?: Array<string>;
  /** 可使用资源域  */
  scope?: Array<string>;
  /** 敏感&非敏感- true:敏感 false:非敏感  */
  sensitived?: boolean;
  /** 创建的用户id  */
  userId?: number;
};

export type ClientSecretAuthRequest = {
  /** clientID  */
  clientId: string;
  /** client密钥  */
  clientSecret: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type ClientUpdateRequest = {
  /** access token 过期时长  */
  accessTokenValiditySeconds?: number;
  /** 额外信息  */
  additionalInformation?: string;
  /** 数据变更通知地址  */
  alterNotifyUrl?: string;
  /** 应用等级  */
  appLevel?: number;
  /** 权限  */
  authorities?: Array<string>;
  /** 授权方式  */
  authorizedGrantTypes?: Array<string>;
  /** 是否自动核准  */
  autoApprove?: boolean;
  /** 自动核准作用域  */
  autoApproveScopes?: Array<string>;
  /** clientID  */
  clientId: string;
  /** client名称  */
  clientName?: string;
  /** 用户源  */
  origin?: string;
  /** refresh token 过期时长  */
  refreshTokenValiditySeconds?: number;
  /** 注册的重定向地址  */
  registeredRedirectUris?: Array<string>;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 资源信息的id  */
  resourceIds?: Array<string>;
  /** 可使用资源域  */
  scope?: Array<string>;
  /** 敏感&非敏感- true:敏感 false:非敏感  */
  sensitived?: boolean;
};

export type ClientUpdateSecretRequest = {
  /** clientID  */
  clientId: string;
  /** client密钥  */
  clientSecret?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type CreateAppRequest = {
  /** 描述信息  */
  desc?: string;
  /** 应用端id  */
  id?: number;
  internal?: boolean;
  /** 应用key  */
  key?: string;
  /** 应用名  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type CreateChildFeaturePermissionRequest = {
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 描述  */
  desc?: string;
  /** 是否直接挂在应用下  */
  directed?: boolean;
  /** 功能分组id，直接挂在分组下的权限需要传入,创建应用或者权限下子权限勿传  */
  featureGroupId?: number;
  /** 主键id  */
  id?: number;
  /** 权限标识  */
  key?: string;
  /** 权限名称，创建必填  */
  name?: string;
  /** 父权限id，有父权限需要传入，直接挂在分组或者应用下的权限勿传  */
  parentId?: number;
  /** 项目id  */
  projectId?: number;
  /** 关联权限id列表  */
  relationIds?: Array<number>;
  /** 关联的资源列表  */
  resources?: Array<ResourceParam>;
  /** 安全级别id  */
  safeLevelId?: number;
  /** 安全级别名称  */
  safeLevelName?: string;
  /** 权限类型function-代表功能权限，data-代表数据权限  */
  type?: string;
};

export type CreateFeatureGroupRequest = {
  /** appId  */
  appId: number;
  /** 主键id  */
  id?: number;
  /** 权限组标识  */
  key?: string;
  /** 功能权限组名称  */
  name?: string;
  /** 父组id  */
  parentId?: number;
  /** 项目id  */
  projectId?: number;
};

export type CreateFeaturePermissionRequest = {
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 描述  */
  desc?: string;
  /** 是否直接挂在应用下  */
  directed?: boolean;
  /** 功能分组id，直接挂在分组下的权限需要传入,创建应用或者权限下子权限勿传  */
  featureGroupId?: number;
  /** 主键id  */
  id?: number;
  /** 权限标识  */
  key?: string;
  /** 权限名称，创建必填  */
  name?: string;
  /** 父权限id，有父权限需要传入，直接挂在分组或者应用下的权限勿传  */
  parentId?: number;
  /** 项目id  */
  projectId?: number;
  /** 关联权限id列表  */
  relationIds?: Array<number>;
  /** 关联的资源列表  */
  resources?: Array<ResourceParam>;
  /** 安全级别id  */
  safeLevelId?: number;
  /** 安全级别名称  */
  safeLevelName?: string;
  /** 权限类型  */
  type?: string;
};

export type CreateOriginRequest = {
  /** 描述信息  */
  desc?: string;
  /** key  */
  key?: string;
  /** 用户源名称  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type CreateProjectRequest = {
  /** 创建人id  */
  createUser?: number;
  /** 描述信息  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 逻辑主键  */
  key: string;
  /** 项目名称  */
  name?: string;
  syncUrl?: string;
  tenantId?: number;
};

export type CreateSpecialUserRequest = {
  /** 头像  */
  avatar?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 创建的用户是否启用 默认启用  */
  enable?: boolean;
  /** 过期时间  */
  expireAt?: string;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 操作者id  */
  operatorId?: number;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户来源  */
  source?: string;
  /** 来源类型  */
  sourceType?: string;
  /** 标签  */
  tag?: string;
  /** 用户详情  */
  userDetail?: { [key: string]: string };
  /** 用户名  */
  username?: string;
};

export type CreateSyncTaskRequest = {
  /** 间隔时间  */
  intervalTime?: number;
  /** 同步接口  */
  syncInterface?: string;
  /** 任务名称  */
  taskName?: string;
  /** 权限树的唯一标识  */
  treeKey?: string;
};

export type CreateUserAppRelationRequest = {
  infos?: Array<UserEndpointInfo>;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type CreateUserParam = {
  /** 头像  */
  avatar?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 邮箱  */
  email?: string;
  /** 创建的用户是否启用 默认启用  */
  enable?: boolean;
  /** 额外信息  */
  extra?: { [key: string]: string };
  mobile: string;
  /** 昵称  */
  nickname?: string;
  /** 密码  */
  password?: string;
  prefix: string;
  /** 用户来源  */
  source?: string;
  /** 来源类型  */
  sourceType?: string;
  /** 标签  */
  tag?: string;
  /** 用户详情  */
  userDetail?: { [key: string]: string };
  /** 用户名  */
  username?: string;
};

export type CreateUserRequest = {
  /** 头像  */
  avatar?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 创建的用户是否启用 默认启用  */
  enable?: boolean;
  /** 过期时间  */
  expireAt?: string;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 操作者id  */
  operatorId?: number;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 用户pk  */
  pk?: number;
  /** 手机号前缀  */
  prefix: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户来源  */
  source?: string;
  /** 来源类型  */
  sourceType?: string;
  /** 标签  */
  tag?: string;
  /** 用户详情  */
  userDetail?: { [key: string]: string };
  /** 用户名  */
  username?: string;
};

export type DataAuthOperationInfo = {
  /** 授权ID  */
  authId?: number;
  /** 操作编码  */
  code?: string;
  /** 操作描述  */
  desc?: string;
  /** 操作主键ID  */
  id?: number;
  /** 操作名称  */
  name?: string;
};

export type DataAuthorizationDetailInfo = {
  /** 属性ID  */
  attributeId?: number;
  /** 属性名称  */
  attributeName?: string;
  /** 授权ID  */
  authId?: number;
  /** 是否全量  */
  fullData?: boolean;
  /** 主键ID  */
  id?: number;
  /** 模型ID  */
  modelId?: number;
  /** 模型名称  */
  modelName?: string;
  /** 操作信息列表  */
  operationInfos?: Array<DataAuthOperationInfo>;
  /** 权限ID  */
  permissionId?: number;
  /** 权限permissionKey  */
  permissionKey?: string;
  /** 权限名称  */
  permissionName?: string;
  /** 规则描述  */
  ruleDesc?: string;
  value?: DataValueDTO;
  /** 具体授权数据  */
  valueStr?: string;
  /** 值类型  */
  valueType?: DataAuthorizationDetailInfoValueType;
};

export enum DataAuthorizationDetailInfoValueType {
  "ENUM" = "ENUM",
  "NUMBER" = "NUMBER",
  "ORG" = "ORG",
  "STRING" = "STRING",
}

export type DataPermissionAuthInfo = {
  /** 权限规则详情  */
  permissionRules?: Array<string>;
};

export type DataPermissionAuthRequest = {
  /** 权限key数组  */
  permissionKey?: string;
  /** 项目标识  */
  projectKey?: string;
  /** 用户id  */
  userId?: string;
};

export type DataPermissionCreateRequest = {
  /** businessDataPermission  */
  businessDataPermission?: RoleGrantDataPermission;
  /** globalDataPermissionList  */
  globalDataPermissionList?: Array<GlobalDataPermissionRequest>;
  /** 项目id  */
  projectId?: number;
  /** 项目Key  */
  projectKey?: string;
};

export type DataPermissionMetadataPojo = {
  authScope?: string;
  location?: string;
  permissionId?: number;
};

export type DataValueDTO = Record<string, unknown>;

export type DeleteAppRequest = {
  /** 描述信息  */
  desc?: string;
  /** 应用端id  */
  id?: number;
  internal?: boolean;
  /** 应用key  */
  key?: string;
  /** 应用名  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type DeleteFeatureGroupRequest = {
  /** appId  */
  appId: number;
  /** 主键id  */
  id?: number;
  /** 权限组标识  */
  key?: string;
  /** 功能权限组名称  */
  name?: string;
  /** 父组id  */
  parentId?: number;
  /** 功能权限组名称  */
  projectId?: number;
};

export type DeleteFeaturePermissionRequest = {
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 描述  */
  desc?: string;
  /** 是否直接挂在应用下  */
  directed?: boolean;
  /** 功能分组id，直接挂在分组下的权限需要传入,创建应用或者权限下子权限勿传  */
  featureGroupId?: number;
  /** 主键id  */
  id?: number;
  /** 权限标识  */
  key?: string;
  /** 权限名称，创建必填  */
  name?: string;
  /** 父权限id，有父权限需要传入，直接挂在分组或者应用下的权限勿传  */
  parentId?: number;
  /** 项目id  */
  projectId?: number;
  /** 关联的资源列表  */
  resources?: Array<ResourceParam>;
  /** 安全级别id  */
  safeLevelId?: number;
  /** 安全级别名称  */
  safeLevelName?: string;
  /** 权限类型1-代表功能权限，2-代表数据权限  */
  type?: number;
};

export type DeleteOriginRequest = {
  /** 用户源id  */
  id?: number;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type DeleteProjectRequest = {
  /** 创建人id  */
  createUser?: number;
  /** 描述信息  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 逻辑主键  */
  key: string;
  /** 项目名称  */
  name?: string;
  syncUrl?: string;
  tenantId?: number;
};

export type DeleteRoleRelationRequest = {
  /** 授权关系id  */
  id?: number;
  /** 租户id  */
  tenantId?: number;
};

export type DeleteSyncTaskRequest = {
  /** 主键id  */
  id?: number;
  /** 树的唯一标识  */
  treeKey?: string;
};

export type DestroyUserSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type DestroyUserSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type DisableUserRequest = {
  /** 用户id  */
  id: number;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type EmailCodeVerifyInfo = {
  /** 邮箱  */
  email: string;
  /** 过期时长（秒）  */
  expireTime?: number;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 租户编号-Long  */
  tenantIdLong?: number;
  /** 验证 token 的值  */
  verifyToken?: string;
};

export type EnableUserRequest = {
  /** 用户id  */
  id: number;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type EncrypedInfo = {
  /** 加密信息  */
  encryped?: string;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 租户编号-Long  */
  tenantIdLong?: number;
};

export type EndpointInfo = {
  /** id  */
  id?: number;
  /** 应用端标识  */
  key?: string;
  /** 应用端名称  */
  name?: string;
};

export type EpWeChatAppBindBean = {
  /** 微信用户头像  */
  avatarUrl: string;
  /** 加密数据  */
  encryptedData: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 初始向量  */
  iv: string;
  /** 微信用户昵称  */
  nickName: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type EpWeChatAppResponse = {
  /** 额外信息  */
  extra?: { [key: string]: string };
  mobile?: string;
  /** 租户编号-Long  */
  tenantIdLong?: number;
};

export type EventLogAndUserInfo = {
  /** 事件  */
  event?: string;
  /** 事件产生事件  */
  eventTime?: string;
  /** 事件类型  */
  eventType?: string;
  /** 扩展  */
  extra?: string;
  /** 事件日志id  */
  id?: number;
  /** 请求ip  */
  ip?: string;
  /** mac地址  */
  macAddress?: string;
  /** 日志相关操作人信息  */
  operatorInfo?: UserInfo;
  /** 租户id  */
  tenantId?: number;
  /** 事件相关用户id  */
  userId?: number;
  /** 日志相关用户信息  */
  userInfo?: UserInfo;
};

export type FeatureGroupInfo = {
  /** appId  */
  appId: number;
  /** 主键id  */
  id?: number;
  /** 权限组标识  */
  key?: string;
  /** 功能权限组名称  */
  name?: string;
  /** 父组id  */
  parentId?: number;
  /** 功能权限组名称  */
  projectId?: number;
};

export type FeaturePermissionAuthRequest = {
  /** 权限key数组  */
  permissionKeys?: Array<string>;
  /** 项目标识  */
  projectKey?: string;
  /** 用户id  */
  userId?: string;
};

export type FeaturePermissionTreeInfo = {
  /** 应用id  */
  appId?: number;
  /** 是否为关联角色引入的权限点  */
  associationPermission?: boolean;
  /** 是否选中  */
  checked?: boolean;
  /** 子节点  */
  children?: Array<FeaturePermissionTreeInfo>;
  dataAuthDetailInfos?: Array<DataAuthorizationDetailInfo>;
  /** 节点id  */
  id?: number;
  /** 节点key,type为permission时才有  */
  key?: string;
  /** name  */
  name?: string;
  operateNodes?: Array<PermissionOperateParam>;
  /** 关联权限  */
  relationIds?: Array<number>;
  /** 类型  */
  type?: FeaturePermissionTreeInfoType;
};

export enum FeaturePermissionTreeInfoType {
  "app" = "app",
  "group" = "group",
  "permission" = "permission",
}

export type FindPermissionAuthorizationResponse = {
  /** 权限规则  */
  permissionRule?: string;
};

export type FindSyncTaskDetailInfo = {
  /** 主键id  */
  id?: number;
  /** 刷新间隔  */
  intervalTime?: number;
  /** 同步接口  */
  syncInterface?: string;
  /** 任务名称  */
  taskName?: string;
  /** 租户id  */
  tenantId?: number;
  /** 授权树的key  */
  treeKey?: string;
};

export type FindSyncTaskDetailRequest = {
  /** 同步任务id  */
  id?: number;
  /** 树的逻辑主键  */
  treeKey?: string;
};

export type FindTreeNodeDetailInfo = {
  /** 业务对象id  */
  bizId?: string;
  /** 业务对象名称  */
  bizName?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 业务对象类型名称  */
  bizTypeName?: string;
  /** 此节点hash  */
  hash?: string;
  /** 逻辑主键  */
  key?: string;
  /** 父节点全路径  */
  parentNodes?: Array<FindTreeNodeDetailInfoTreeNode>;
  /** 权限是否下放：0-不下放，1-下放  */
  permissionDelegate?: boolean;
};

export type FindTreeNodeDetailInfoTreeNode = {
  /** 业务对象id  */
  bizId?: string;
  /** 业务对象名称  */
  bizName?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 业务对象类型名称  */
  bizTypeName?: string;
  /** 逻辑主键  */
  key?: string;
};

export type FindTreeNodeLevelInfo = {
  /** 权限对象树根节点  */
  treeNode?: FindTreeResponseTreeNode;
};

export type FindTreeResponseTreeNode = {
  /** 业务对象id  */
  bizId?: string;
  /** 业务对象名称  */
  bizName?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 业务对象类型名称  */
  bizTypeName?: string;
  /** 子节点， 无子节点 children = null  */
  children?: Array<FindTreeResponseTreeNode>;
  /** 此节点hash  */
  hash?: string;
  /** 逻辑主键  */
  key?: string;
  /** 父节点主键  */
  parentKey?: string;
};

export type FindUserByIdentifyRequest = {
  /** 用户唯一标识：手机号/邮箱/用户名  */
  identify: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type FindUserByTokenRequest = {
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** token参数  */
  tokenParam: TokenParam;
};

export type GatewayPermissionAuthRequest = {
  body?: Record<string, unknown>;
  headers?: { [key: string]: Array<Record<string, unknown>> };
  method?: string;
  path?: string;
};

export type GlobalDataPermissionInfo = {
  /** 绑定变量  */
  boundVariableList?: Array<BoundBusinessVariableInfo>;
  /** 自定义数据查询函数  */
  customizedLogicFunctionMeta?: string;
  /** 自定义数据查询函数  */
  customizedTreeDataSource?: string;
  customizedTreeDataSourceResourceKey?: string;
  /** 资源描述  */
  desc?: string;
  /** 默认授权  */
  globalDefaultAuthRuleList?: Array<GlobalDefaultAuthRuleConditionNodeInfo>;
  /** id  */
  id?: number;
  /** 交互组件  */
  interactiveComponent?: GlobalDataPermissionInfoInteractiveComponent;
  /** 资源标识  */
  key?: string;
  /** 资源名称  */
  name?: string;
  /** 项目id  */
  projectId?: number;
  /** 规则字段  */
  ruleFieldList?: string;
  /** 应用模型  */
  sourceModelKey?: string;
  /** 组件数据  */
  sourceModelQueryType?: GlobalDataPermissionInfoSourceModelQueryType;
  /** 租户id  */
  tenantId?: number;
  /** 树模型配置  */
  treeConfig?: TreeConfig;
};

export enum GlobalDataPermissionInfoInteractiveComponent {
  "List" = "List",
  "Tree" = "Tree",
}

export enum GlobalDataPermissionInfoSourceModelQueryType {
  "QUERY_FULL_DATA" = "QUERY_FULL_DATA",
  "CUSTOMIZED_DATA_SOURCE" = "CUSTOMIZED_DATA_SOURCE",
}

export type GlobalDataPermissionRequest = {
  /** 绑定变量  */
  boundVariableList?: Array<BoundBusinessVariableInfo>;
  /** 自定义数据查询函数  */
  customizedLogicFunctionMeta?: string;
  /** 自定义数据查询函数  */
  customizedTreeDataSource?: string;
  /** 资源描述  */
  desc?: string;
  /** 默认授权  */
  globalDefaultAuthRuleList?: Array<GlobalDefaultAuthRuleConditionNodeInfo>;
  /** id  */
  id?: number;
  /** ids  */
  ids?: Array<number>;
  /** 交互组件  */
  interactiveComponent?: GlobalDataPermissionRequestInteractiveComponent;
  /** 资源标识  */
  key?: string;
  /** 资源名称  */
  name?: string;
  /** 项目id  */
  projectId?: number;
  /** 项目Key  */
  projectKey?: string;
  /** 规则字段  */
  ruleFieldList?: string;
  /** 应用模型  */
  sourceModelKey?: string;
  /** 组件数据  */
  sourceModelQueryType?: GlobalDataPermissionRequestSourceModelQueryType;
};

export enum GlobalDataPermissionRequestInteractiveComponent {
  "List" = "List",
  "Tree" = "Tree",
}

export enum GlobalDataPermissionRequestSourceModelQueryType {
  "QUERY_FULL_DATA" = "QUERY_FULL_DATA",
  "CUSTOMIZED_DATA_SOURCE" = "CUSTOMIZED_DATA_SOURCE",
}

export type GlobalDefaultAuthRuleConditionNodeInfo = {
  /** 名称  */
  name?: string;
  /** 运算符  */
  operator?: GlobalDefaultAuthRuleConditionNodeInfoOperator;
  /** 权限id  */
  permissionId?: number;
  /** 权限类型  */
  permissionType?: string;
  readOnly?: boolean;
  /** 值类型  */
  valueType?: GlobalDefaultAuthRuleConditionNodeInfoValueType;
  /** 规则值  */
  valueWrapper?: ValueWrapper;
};

export enum GlobalDefaultAuthRuleConditionNodeInfoOperator {
  "EQ" = "EQ",
  "NEQ" = "NEQ",
  "IN" = "IN",
  "NOT_IN" = "NOT_IN",
  "LT" = "LT",
  "LTE" = "LTE",
  "GT" = "GT",
  "GTE" = "GTE",
  "CONTAINS" = "CONTAINS",
  "NOT_CONTAINS" = "NOT_CONTAINS",
  "START_WITH" = "START_WITH",
  "NOT_START_WITH" = "NOT_START_WITH",
  "END_WITH" = "END_WITH",
  "NOT_END_WITH" = "NOT_END_WITH",
  "NULL" = "NULL",
  "NOT_NULL" = "NOT_NULL",
  "BETWEEN" = "BETWEEN",
}

export enum GlobalDefaultAuthRuleConditionNodeInfoValueType {
  "CONSTANT" = "CONSTANT",
  "VARIABLE" = "VARIABLE",
}

export type GrantAuthorizationRequest = {
  /** 业务对象  */
  bizId?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 角色id  */
  grantTargetId?: number;
  /** 授权类型  */
  grantType?: GrantAuthorizationRequestGrantType;
  /** 权限类型  */
  permissionType?: string;
  /** 权限列表  */
  permissions?: Array<GrantAuthorizationRequestPermission>;
  /** 项目id  */
  projectId?: number;
  /** 租户id  */
  tenantId: number;
};

export enum GrantAuthorizationRequestGrantType {
  "ROLE" = "ROLE",
  "POSITION" = "POSITION",
  "ORG" = "ORG",
  "USER" = "USER",
  "OBJECT" = "OBJECT",
}

export type GrantAuthorizationRequestPermission = {
  /** 权限id  */
  permissionId?: number;
  /** 权限规则  */
  permissionRule?: string;
};

export type GrantPermission = {
  permissionId?: number;
  permissionRule?: string;
};

export type GrantedDataPermission = {
  conditions?: { [key: string]: Array<PermissionCondition> };
  permissionId?: number;
  permissionMeta?: string;
};

export type GuestEncrypedRequest = {
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户ID  */
  userId: number;
};

export type IdentifyVerifyInfo = {
  /** 邮箱  */
  email?: string;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 手机号  */
  mobile?: string;
  /** 是否通过  */
  passed: boolean;
  /** 租户编号-Long  */
  tenantIdLong?: number;
  /** 验证通过后生产的token  */
  verifyToken?: string;
};

export type ListBusinessAndUserByLastIdRequest = {
  /** 事件  */
  event?: string;
  /** 事件类型  */
  eventType?: string;
  /** ip  */
  ip?: string;
  /** lastId  */
  lastId: number;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 列表长度  */
  size: number;
  /** 用户id  */
  userId?: number;
};

export type ListEventLogAndUserByAfterEventTimeRequest = {
  /** 事件  */
  event?: string;
  /** 事件时间  */
  eventTime: string;
  /** 事件类型  */
  eventType?: string;
  /** ip  */
  ip?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 列表长度  */
  size: number;
  /** 用户id  */
  userId?: number;
};

export type ListSyncTaskInfo = {
  /** 主键id  */
  id?: number;
  /** 刷新间隔  */
  intervalTime?: number;
  /** 同步接口  */
  syncInterface?: string;
  /** 任务名称  */
  taskName?: string;
  /** 租户id  */
  tenantId?: number;
  /** 权限树唯一标识  */
  treeKey: string;
};

export type ListTreeInfo = {
  /** 是否默认的权限树  */
  isDefault?: boolean;
  /** 权限树唯一标识，权限维度标识  */
  key?: string;
  /** 上次变更时间  */
  lastChangeTime?: string;
  /** 上次同步时间  */
  lastSyncTime?: string;
  /** 权限树名称  */
  name?: string;
};

export type LoginByEmailAndEmailCodeAfterVerifyRequest = {
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  identify?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** verifyToken  */
  verifyToken: string;
};

export type LoginByEmailAndEmailCodeRequest = {
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  identify?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type LoginByEmailAndPasswordRequest = {
  /** 图片验证码答案  */
  captcha?: string;
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  identify?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码 token  */
  token?: string;
};

export type LoginByEmailSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha: string;
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token: string;
};

export type LoginByLocalNumberRequest = {
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 自定义的id（外部流水号）  */
  outId?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 取号token  */
  token?: string;
};

export type LoginByMobileAndPasswordRequest = {
  /** 图片验证码答案  */
  captcha?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码 token  */
  token?: string;
};

export type LoginByMobileAndSmsCodeRequest = {
  /** 注册渠道  */
  channel?: string;
  /** 注册渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
};

export type LoginByMobileSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type LoginByPasswordRequest = {
  /** 图片验证码答案  */
  captcha?: string;
  /** 确认密码  */
  confirm?: string;
  /** 用户登录唯一标识：手机号/用户名/邮箱  */
  identify: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码 token  */
  token?: string;
};

export type LoginByUsernameAndPasswordRequest = {
  /** 图片验证码答案  */
  captcha?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码 token  */
  token?: string;
  /** 用户名  */
  username: string;
};

export type MetaDataProperty = {
  propertyCode?: string;
  propertyValue?: Record<string, unknown>;
};

export type ModelDataPermission = {
  fieldName?: string;
  fieldTypeIsModel?: boolean;
  grantId?: number;
  hasChildren?: boolean;
  /** logicOperator  */
  logicOperator?: ModelDataPermissionLogicOperator;
  modelKey?: string;
  operator?: ModelDataPermissionOperator;
  permissionId?: number;
  permissionType?: string;
  roleId?: number;
  /** rules  */
  rules?: Array<ModelDataPermission>;
  valueType?: ModelDataPermissionValueType;
  valueWrapper?: ValueWrapperobject;
};

export enum ModelDataPermissionLogicOperator {
  "AND" = "AND",
  "OR" = "OR",
}

export enum ModelDataPermissionOperator {
  "EQ" = "EQ",
  "NEQ" = "NEQ",
  "IN" = "IN",
  "NOT_IN" = "NOT_IN",
  "LT" = "LT",
  "LTE" = "LTE",
  "GT" = "GT",
  "GTE" = "GTE",
  "CONTAINS" = "CONTAINS",
  "NOT_CONTAINS" = "NOT_CONTAINS",
  "START_WITH" = "START_WITH",
  "NOT_START_WITH" = "NOT_START_WITH",
  "END_WITH" = "END_WITH",
  "NOT_END_WITH" = "NOT_END_WITH",
  "NULL" = "NULL",
  "NOT_NULL" = "NOT_NULL",
  "BETWEEN" = "BETWEEN",
}

export enum ModelDataPermissionValueType {
  "CONSTANT" = "CONSTANT",
  "VARIABLE" = "VARIABLE",
}

export type OAuth10AppAuthTwitterBean = {
  appName?: string;
  /** 第三方绑定参数 默认为false  */
  bind?: boolean;
  /** 访问令牌oauthToken  */
  oauthToken: string;
  /** oauthTokenSecret  */
  oauthTokenSecret: string;
};

export type OpenQueryUserAllRoleRequest = {
  /** 用户id  */
  userId?: string;
};

export type OrgRealmValueParam = {
  /** 维度id  */
  dimensionId?: number;
  /** 组织节点id列表  */
  orgIdList?: Array<number>;
};

export type OrgTreeParam = {
  add?: boolean;
  checked?: boolean;
  children?: Array<OrgTreeParam>;
  childrenCount?: number;
  del?: boolean;
  dimensionId?: number;
  id?: number;
  key?: string;
  metaData?: Record<string, unknown>;
  name?: string;
  nodeId?: number;
  positionList?: Array<PositionParam>;
  typeId?: number;
  typeKey?: string;
};

export type OriginInfo = {
  /** 描述信息  */
  desc?: string;
  /** 主键  */
  id?: number;
  /** key  */
  key?: string;
  /** 名称  */
  name?: string;
};

export type Page = {
  curPage?: number;
  pageSize?: number;
};

export type PagingAppInfo = {
  data?: Array<AppInfo>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type PagingOriginInfo = {
  data?: Array<OriginInfo>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type PagingPermissionInfo = {
  data?: Array<PermissionInfo>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type PagingUserEndpointInfo = {
  data?: Array<UserEndpointInfo>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type PagingUserInfoV1 = {
  data?: Array<UserInfoV1>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type PagingUserInfo = {
  data?: Array<UserInfo>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type Paging可授权用户 = {
  data?: Array<可授权用户>;
  empty?: boolean;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type PasswordResetByEmailCodeRequest = {
  /** 确认密码  */
  confirm: string;
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type PasswordResetBySmsCodeRequest = {
  /** 确认密码  */
  confirm: string;
  /** 手机号  */
  mobile: string;
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
};

export type PasswordResetBySmsVerifyTokenRequest = {
  /** 确认密码  */
  confirm?: string;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 验证Token  */
  verifyToken: string;
};

export type PasswordResetByVerifyTokenRequest = {
  /** 确认密码  */
  confirm?: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 验证Token  */
  verifyToken: string;
};

export type PasswordResetEmailCodeVerifyRequest = {
  /** 邮箱  */
  email: string;
  /** 邮箱验证码  */
  emailCode: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type PasswordResetSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type PasswordResetSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 手机号  */
  mobile: string;
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type PasswordResetSmsCodeVerifyRequest = {
  /** 手机号  */
  mobile: string;
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
};

export type Permission = {
  /** 权限key  */
  key?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionAuthorizationInfo = {
  /** 授权类型，0-正向授权，1-反向授权  */
  authType?: number;
  /** 权限授权ID  */
  id?: number;
  /** 权限是否可继承  */
  inherit?: boolean;
  /** 权限编码  */
  permissionCode?: string;
  /** 权限描述  */
  permissionDesc?: string;
  /** 权限ID  */
  permissionId?: number;
  /** 权限名称  */
  permissionName?: string;
  /** 项目ID  */
  projectId?: number;
};

export type PermissionCondition = {
  fieldName?: string;
  model?: boolean;
  operator?: PermissionConditionOperator;
  type?: PermissionConditionType;
  value?: Record<string, unknown>;
};

export enum PermissionConditionOperator {
  "EQ" = "EQ",
  "NEQ" = "NEQ",
  "IN" = "IN",
  "NOT_IN" = "NOT_IN",
  "LT" = "LT",
  "LTE" = "LTE",
  "GT" = "GT",
  "GTE" = "GTE",
  "CONTAINS" = "CONTAINS",
  "NOT_CONTAINS" = "NOT_CONTAINS",
  "START_WITH" = "START_WITH",
  "NOT_START_WITH" = "NOT_START_WITH",
  "END_WITH" = "END_WITH",
  "NOT_END_WITH" = "NOT_END_WITH",
  "NULL" = "NULL",
  "NOT_NULL" = "NOT_NULL",
  "BETWEEN" = "BETWEEN",
}
export enum PermissionConditionType {
  "CONSTANT" = "CONSTANT",
  "VARIABLE" = "VARIABLE",
}

export type PermissionCreateRequest = {
  /** 所属应用id，适配遗留逻辑用，建议使用 appkey  */
  appId?: number;
  /** 所属应用key  */
  appKey?: string;
  /** 鉴权范围  */
  authScope?: string;
  /** 数据权限：鉴权页面  */
  authViewKeys?: Array<string>;
  /** 权限点说明  */
  desc?: string;
  /** 是否挂在应用下  */
  directed?: boolean;
  /** 可用应用端列表  */
  endpoints?: Array<EndpointInfo>;
  /** 权限点唯一标识  */
  key?: string;
  /** 归属菜单标识  */
  menuKey?: string;
  /** 元数据  */
  metaData?: string;
  /** 权限点名称  */
  name?: string;
  /** 父节点id  */
  parentId?: number;
  /** 接口路径  */
  path?: string;
  /** 所属项目key  */
  projectKey?: string;
  /** 关联权限id列表  */
  relationIds?: Array<number>;
  /** 权限点注册来源  */
  sourceType?: string;
  /** 权限点类型  */
  type?: string;
  /** 数据权限：鉴权页面资源  */
  viewResourceAuthKeys?: { [key: string]: Array<string> };
};

export type PermissionDeleteByKeyRequest = {
  /** 所属应用id  */
  appKey?: string;
  /** 权限逻辑主键  */
  key?: string;
  /** 所属项目key  */
  projectKey?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionInfo = {
  /** 所属应用id  */
  appId?: number;
  /** 鉴权范围  */
  authScope?: string;
  /** 数据权限：鉴权页面  */
  authViewKeys?: Array<string>;
  /** 备注说明  */
  desc?: string;
  /** 是否挂在应用下  */
  directed?: boolean;
  /** 可用应用端列表  */
  endpoints?: Array<EndpointInfo>;
  /** id  */
  id?: number;
  /** 权限点key  */
  key?: string;
  /** 归属菜单标识  */
  menuKey?: string;
  /** 元数据  */
  metaData?: string;
  /** 权限点名称  */
  name?: string;
  /** 父节点id  */
  parentId?: number;
  /** 接口路径  */
  path?: string;
  /** 项目id  */
  projectId?: number;
  /** 关联权限列表  */
  relationIds?: Array<number>;
  /** 来源信息  */
  sourceType?: string;
  /** 租户id  */
  tenantId?: number;
  /** 权限点类型  */
  type?: string;
  /** 数据权限：鉴权页面资源  */
  viewResourceAuthKeys?: { [key: string]: Array<string> };
};

export type PermissionListRequest = {
  /** 应用key  */
  appKey?: string;
  /** 权限key  */
  key?: string;
  /** 权限name  */
  name?: string;
  /** 项目key  */
  projectKey?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionOpenCreateRequest = {
  /** 所属应用key  */
  appKey?: string;
  /** 鉴权范围  */
  authScope?: string;
  /** 数据权限：鉴权页面  */
  authViewKeys?: Array<string>;
  /** 权限点说明  */
  desc?: string;
  /** 是否挂在应用下  */
  directed?: boolean;
  /** 可用应用端  */
  endpoints?: Array<EndpointInfo>;
  /** 权限点唯一标识  */
  key?: string;
  /** 归属菜单标识  */
  menuKey?: string;
  /** 元数据  */
  metaData?: string;
  /** 权限点名称  */
  name?: string;
  /** 父节点id  */
  parentId?: number;
  /** 父节点key  */
  parentKey?: string;
  /** 权限点注册来源  */
  sourceType?: string;
  /** 权限点类型  */
  type?: string;
  /** 数据权限：鉴权页面资源  */
  viewResourceAuthKeys?: { [key: string]: Array<string> };
};

export type PermissionOpenDeleteByIdRequest = {
  /** 应用key  */
  appKey?: string;
  /** 权限id  */
  id?: number;
};

export type PermissionOpenDeleteByKeyRequest = {
  /** 所属应用id  */
  appKey?: string;
  /** 权限逻辑主键  */
  key?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionOpenFindRequest = {
  /** 应用key  */
  appKey?: string;
  /** 项目id  */
  id?: number;
};

export type PermissionOpenListRequest = {
  /** 应用Key  */
  appKey?: string;
  /** 权限key  */
  key?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionOpenUpdateByIdRequest = {
  /** 应用key  */
  appKey?: string;
  /** 备注说明  */
  desc?: string;
  /** 权限id  */
  id?: number;
  /** 元数据  */
  metaData?: string;
  /** 权限点名称  */
  name?: string;
  /** 权限点注册来源  */
  sourceType?: string;
};

export type PermissionOpenUpdateByKeyRequest = {
  /** 所属应用key  */
  appKey?: string;
  /** 备注说明  */
  desc?: string;
  /** Key  */
  key?: string;
  /** 元数据  */
  metaData?: string;
  /** 权限名称  */
  name?: string;
  /** 权限点注册来源  */
  sourceType?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionOperateParam = {
  checked?: boolean;
  id?: number;
  operateCode?: string;
  operateId?: number;
  operateName?: string;
  permissionCode?: string;
  permissionId?: number;
};

export type PermissionPagingQueryRequest = {
  /** 应用key  */
  appKey?: string;
  /** 权限key  */
  key?: string;
  /** 权限点名称  */
  name?: string;
  /** 当前页码-默认1，从1开始  */
  pageNo?: number;
  /** 每页条数-默认20，最大1024  */
  pageSize?: number;
  /** 项目key  */
  projectKey?: string;
  /** 权限类型  */
  type?: string;
};

export type PermissionUpdateByKeyRequest = {
  /** 所属应用key  */
  appKey?: string;
  /** 鉴权范围  */
  authScope?: string;
  /** 数据权限：鉴权页面  */
  authViewKeys?: Array<string>;
  /** 备注说明  */
  desc?: string;
  /** Key  */
  key?: string;
  /** 归属菜单标识  */
  menuKey?: string;
  /** 元数据  */
  metaData?: string;
  /** 权限名称  */
  name?: string;
  /** 接口路径  */
  path?: string;
  /** 所属项目key  */
  projectKey?: string;
  /** 关联权限id列表  */
  relationIds?: Array<number>;
  /** 权限类型  */
  type?: string;
  /** 数据权限：鉴权页面资源  */
  viewResourceAuthKeys?: { [key: string]: Array<string> };
};

export type PositionParam = {
  createdAt?: string;
  desc?: string;
  employeeCount?: number;
  hide?: number;
  id?: number;
  key?: string;
  metaData?: Record<string, unknown>;
  name?: string;
  orgName?: string;
  orgNames?: Array<string>;
  orgNodeId?: number;
  orgNodeIds?: Array<number>;
  parentId?: number;
  parentName?: string;
  permissionDelegate?: boolean;
  positionNodeId?: number;
  roleIdList?: Array<number>;
  roleNameList?: Array<string>;
  roleRequestList?: Array<RoleRequest>;
  router?: string;
  tenantId?: number;
};

export type ProjectInfo = {
  /** 项目描述  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 项目标识  */
  key?: string;
  /** 项目名称  */
  name?: string;
  /** 同步功能权限资源  */
  syncUrl?: string;
  /** 租户id  */
  tenantId?: number;
};

export type QrCodeInfo = {
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 二维码  */
  qrCodeImage?: string;
  /** 租户编号-Long  */
  tenantIdLong?: number;
  /** 唯一标识id  */
  uid?: string;
};

export type QrCodeQuireInfo = {
  /** 状态码  */
  code?: number;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 消息  */
  message?: string;
  /** 租户编号-Long  */
  tenantIdLong?: number;
  /** 令牌信息  */
  tokenInfo?: TokenInfo;
};

export type QueryAllPermissionsInfo = {
  /** 此条结果的hash值  */
  hash?: string;
  /** 权限数组  */
  permissions?: Array<Permission>;
};

export type QueryFindUserAndRelationRequest = {
  /** appIdList  */
  appIds?: Array<number>;
  /** 手机号  */
  mobile?: string;
  /** 用户源  */
  origin?: string;
  /** 当前页码-默认1，从1开始  */
  pageNo?: number;
  /** 每页条数-默认20，最大1024  */
  pageSize?: number;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户ID  */
  userId?: number;
  /** 用户名称  */
  username?: string;
};

export type QueryUserAllPermissionRequest = {
  /** 应用key  */
  appKey?: string;
  /** 目标权限点id  */
  permissionId?: number;
  /** 目标权限点key  */
  permissionKey?: string;
  /** 项目key  */
  projectKey?: string;
  /** 权限类型  */
  type?: string;
  /** 用户id  */
  userId?: string;
  /** 用户类型  */
  userType?: string;
};

export type QueryValue = {
  endValue?: Record<string, unknown>;
  fullMatch?: boolean;
  startValue?: Record<string, unknown>;
  type?: QueryValueType;
  value?: Record<string, unknown>;
  values?: Array<Record<string, unknown>>;
};

export enum QueryValueType {
  "One" = "One",
  "Collection" = "Collection",
  "Range" = "Range",
}

export type RealmValue = Record<string, unknown>;

export type RedirectUrlInfo = {
  /** 重定向地址信息  */
  redirectUrl?: string;
};

export type ReleaseRelationsRequest = {
  infos?: Array<UserEndpointInfo>;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type ResetEmailRequest = {
  /** 用户源  */
  origin?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户id  */
  userId?: number;
  /** 邮件验证码  */
  verifyCode: string;
  /** 验证旧邮箱通过的token  */
  verifyToken: string;
};

export type ResetMobileRequest = {
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 通知模板的key  */
  noticeToken: string;
  /** 用户源  */
  origin?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户id  */
  userId: number;
  /** 短信验证码  */
  verifyCode: string;
  /** 验证旧手机号通过的token  */
  verifyToken: string;
};

export type ResetUserPasswordRequest = {
  /** 确认密码  */
  confirm?: string;
  /** 过期时间  */
  expireAt?: string;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type ResourceParam = {
  /** 应用id，创建必填  */
  appId?: number;
  /** 资源说明  */
  desc?: string;
  /** icon  */
  icon?: string;
  /** 主键id  */
  id?: number;
  /** 项目下逻辑主键，创建必填  */
  key?: string;
  /** 应用名称，创建必填  */
  name?: string;
  /** 项目id  */
  projectId?: number;
  /** 类型id  */
  typeId?: number;
  /** 类型名称  */
  typeName?: string;
  /** 资源地址  */
  url?: string;
};

export type ResponseAdminFrontConfigResponse = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: AdminFrontConfigResponse;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseAppInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: AppInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseAuthenticationInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: AuthenticationInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseDataPermissionAuthInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: DataPermissionAuthInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseFeatureGroupInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: FeatureGroupInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseFindPermissionAuthorizationResponse = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: FindPermissionAuthorizationResponse;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseFindSyncTaskDetailInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: FindSyncTaskDetailInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseFindTreeNodeDetailInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: FindTreeNodeDetailInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseFindTreeNodeLevelInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: FindTreeNodeLevelInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListAppInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<AppInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListAuthorizationInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<AuthorizationInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListFeaturePermissionTreeInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<FeaturePermissionTreeInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListGlobalDataPermissionInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<GlobalDataPermissionInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListListSyncTaskInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<ListSyncTaskInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListListTreeInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<ListTreeInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListPermissionAuthorizationInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<PermissionAuthorizationInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListPermissionInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<PermissionInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListProjectInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<ProjectInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListRoleGrantDataPermission = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<RoleGrantDataPermission>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListRoleInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<RoleInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListRolePermissionInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<RolePermissionInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListRoleRelationInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<RoleRelationInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseListTreeSearchData = {
  code?: number;
  errorCode?: string;
  errorMsg?: string;
  msg?: string;
  res?: Array<TreeSearchData>;
  success?: boolean;
};

export type ResponseListUserInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<UserInfo>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseList项目和它下面对应的角色 = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<项目和它下面对应的角色>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseMapstringobject = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Record<string, unknown>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseModelDataPermission = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: ModelDataPermission;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponsePagingAppInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: PagingAppInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponsePagingPermissionInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: PagingPermissionInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponsePagingUserEndpointInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: PagingUserEndpointInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponsePaging可授权用户 = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Paging可授权用户;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponsePermissionInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: PermissionInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseProjectInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: ProjectInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseQrCodeInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: QrCodeInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseQrCodeQuireInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: QrCodeQuireInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseQueryAllPermissionsInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: QueryAllPermissionsInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseResultData = {
  code?: number;
  errorCode?: string;
  errorMsg?: string;
  msg?: string;
  res?: ResultData;
  success?: boolean;
};

export type ResponseRoleGrantDataPermission = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: RoleGrantDataPermission;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseRoleInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: RoleInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseSetlong = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: Array<number>;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseUserFindResponse = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: UserFindResponse;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResponseUserInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: UserInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Responseboolean = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: boolean;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Responseint = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: number;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Responselong = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: number;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Responsestring = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: string;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Response分页查询结果ProjectInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: 分页查询结果ProjectInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Response分页查询结果RoleInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: 分页查询结果RoleInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Response分页查询结果RoleRelationPagingInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: 分页查询结果RoleRelationPagingInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Response分页查询结果RoleRelationUserInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: 分页查询结果RoleRelationUserInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type Response分页查询结果RoleUnAuthorizedInfo = {
  args?: Array<Record<string, unknown>>;
  code?: string;
  error?: string;
  result?: 分页查询结果RoleUnAuthorizedInfo;
  sourceIp?: string;
  sourceStack?: string;
  success?: boolean;
};

export type ResultData = {
  data?: Record<string, unknown>;
  modelKey?: string;
  result?: Record<string, unknown>;
};

export type ResultField = {
  fieldName?: string;
  fields?: Array<ResultField>;
  name?: string;
  page?: Page;
};

export type ResultModel = {
  fields?: Array<ResultField>;
};

export type RoleAffiliationRequest = {
  affiliationId?: string;
  affiliationType?: string;
};

export type RoleBaseInfo = {
  /** 归属id  */
  affiliationId?: string;
  /** 归属类型  */
  affiliationType?: string;
  /** 关联时间  */
  createAt?: string;
  /** 关联修改时间  */
  modifiedAt?: string;
  /** 角色id  */
  roleId?: number;
  /** 角色名称  */
  roleName?: string;
};

export type RoleCreateRequest = {
  appId?: number;
  desc?: string;
  hide?: boolean;
  id?: number;
  key?: string;
  limited?: boolean;
  metaData?: RoleMetaDataParam;
  metaDataMap?: Record<string, unknown>;
  name?: string;
  projectId?: number;
  realmType?: string;
  realmValue?: OrgRealmValueParam;
  tenantId?: number;
  /** 角色类型id  */
  typeId: number;
};

export type RoleGrantDataPermission = {
  grantedDataPermissions?: Array<GrantedDataPermission>;
  roleId?: number;
  roleName?: string;
};

export type RoleInfo = {
  /** 业务对象唯一标识  */
  affiliationId?: string;
  /** 角色类型  */
  affiliationType?: string;
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 创建人id  */
  createdBy?: number;
  /** 备注说明  */
  desc?: string;
  disabled?: boolean;
  enableColumnDataPermission?: boolean;
  enableFunctionPermission?: boolean;
  enableRoleRelated?: boolean;
  enableRoleRelation?: boolean;
  enableRowDataPermission?: boolean;
  /** 是否启用  */
  enabled?: boolean;
  /** 是否隐藏  */
  hide?: boolean;
  /** 角色id  */
  id?: number;
  /** 角色标识  */
  key?: string;
  /** 是否主节点  */
  mastered?: boolean;
  /** 元信息  */
  metaData?: Record<string, unknown>;
  /** 更新时间  */
  modifiedAt?: string;
  /** 角色名称  */
  name?: string;
  /** 项目id  */
  projectId?: number;
  /** 项目名称  */
  projectName?: string;
  relatedRoleInfo?: Array<RoleInfo>;
  relatedRoleNames?: Array<string>;
  relationRoleInfo?: Array<RoleInfo>;
  relationRoleNames?: Array<string>;
  /** 租户id  */
  tenantId?: number;
  typeId?: number;
  typeName?: string;
};

export type RoleMetaDataParam = {
  type?: string;
};

export type RoleOpenFindAllPermissionRequest = {
  /** 应用key - 选填  */
  appKey?: string;
  /** 角色id  */
  roleId?: number;
  /** 权限类型 - 选填  */
  type?: string;
};

export type RoleOpenGrantRequest = {
  /** 权限类型  */
  permissionType?: string;
  /** 授予的权限集合  */
  permissions?: Array<GrantPermission>;
  /** 角色id  */
  roleId?: number;
};

export type RolePermissionInfo = {
  permissionId?: number;
  permissionKey?: string;
  permissionRule?: string;
  permissionType?: string;
  projectId?: number;
  roleId?: number;
  tenantId?: number;
};

export type RoleRealmParam = {
  /** 主键id  */
  id?: number;
  /** 已选择的组织列表  */
  orgList?: Array<组织主体>;
  /** 组织树  */
  orgTree?: Array<OrgTreeParam>;
  /** 范围类型  */
  realmType?: RoleRealmParamRealmType;
  /** 角色id  */
  roleId?: number;
  /** 范围值  */
  value?: RealmValue;
};

export enum RoleRealmParamRealmType {
  "ORG" = "ORG",
  "POSITION" = "POSITION",
  "ORG_DIMENSION" = "ORG_DIMENSION",
  "ORG_TYPE" = "ORG_TYPE",
}

export type RoleRelationBatchCreateByRoleIdRequest = {
  /** 目标id  */
  bizId?: string;
  /** 目标类型  */
  bizType?: string;
  /** 需要授权的角色id的集合  */
  roleIds?: Array<number>;
  /** 规则下放ruleId  */
  ruleId?: number;
  /** 关联方式默认为direct  */
  type?: string;
};

export type RoleRelationBatchDeleteByKeyRequest = {
  /** 目标id  */
  bizId?: string;
  /** 目标类型  */
  bizType?: string;
  projectKey?: string;
  roleKeys?: Array<string>;
  /** 关联方式默认为direct  */
  type?: string;
};

export type RoleRelationBatchUpdateRequest = {
  /** 归属信息  */
  affiliation?: RoleAffiliationRequest;
  /** 目标id  */
  bizId?: string;
  /** 目标类型  */
  bizType?: string;
  /** 项目key  */
  projectKey?: string;
  /** 需要授权的角色id的集合  */
  roleIds?: Array<number>;
  /** 关联方式默认为direct  */
  type?: string;
};

export type RoleRelationDelegateRuleParam = {
  /** 删除状态，如果存在逻辑删除的时候使用  */
  deleted?: boolean;
  /** 项目id  */
  id?: number;
  /** 扩展信息  */
  metaData?: Record<string, unknown>;
  /** 角色关系表id  */
  targetId?: number;
};

export type RoleRelationInfo = {
  /** 目标对象id  */
  bizId?: string;
  /** 目标对象类型  */
  bizType?: string;
  /** 主键id  */
  id?: number;
  /** 项目id  */
  projectId?: number;
  /** 角色id  */
  roleId?: string;
  /** 角色id  */
  type?: string;
  /** 用户id  */
  userId?: string;
};

export type RoleRelationPagingInfo = {
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 目标id  */
  bizId?: string;
  /** 目标类型  */
  bizType?: string;
  /** 角色描述  */
  desc?: string;
  /** 是否虚拟角色  */
  hide?: boolean;
  /** 主键id  */
  id?: number;
  /** 角色标识  */
  key?: string;
  /** 下放权限  */
  permissionDelegate?: boolean;
  /** 项目id  */
  projectId?: number;
  /** 项目名称  */
  projectName?: string;
  /** 角色id  */
  roleId?: number;
  /** 角色名称  */
  roleName?: string;
  /** 下放规则  */
  ruleId?: number;
  /** 租户id  */
  tenantId?: number;
};

export type RoleRelationQueryGroupByBizIdRequest = {
  /** 归属id  */
  affiliationId?: string;
  /** 归属类型  */
  affiliationType?: string;
  appKey?: string;
  /** 目标id  */
  bizId?: string;
  /** 目标id集合  */
  bizIdList?: Array<string>;
  /** 目标类型  */
  bizType?: string;
  /** 当前页码-默认1，从1开始  */
  pageNo?: number;
  /** 每页条数-默认20，最大1024  */
  pageSize?: number;
  /** 项目key  */
  projectKey?: string;
  /** 角色id  */
  roleId?: number;
};

export type RoleRelationUserInfo = {
  /** 业务对象id  */
  bizId?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 角色信息列表  */
  roleBaseInfos?: Array<RoleBaseInfo>;
  /** 关联时间  */
  updateAt?: string;
};

export type RoleRequest = {
  /** 业务对象唯一标识  */
  affiliationId?: string;
  /** 角色类型  */
  affiliationType?: string;
  /** 应用id  */
  appId?: number;
  /** 应用编码  */
  appKey?: string;
  /** 应用名称  */
  appName?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 创建人id  */
  createdBy?: number;
  /** 角色描述  */
  desc?: string;
  /** 是否虚拟角色  */
  hide?: boolean;
  /** 主键id  */
  id?: number;
  /** 角色标识  */
  key?: string;
  /** 是否限制范围  */
  limited?: boolean;
  /** 是否主节点角色  */
  mastered?: boolean;
  /** 关联的主节点角色  */
  masteredRoleKeys?: Array<string>;
  /** metadata  */
  metaData?: RoleMetaDataParam;
  /** 角色扩展字段  */
  metaDataMap?: Record<string, unknown>;
  /** 更新时间  */
  modifiedAt?: string;
  /** 角色名称  */
  name?: string;
  /** 项目id  */
  projectId?: number;
  /** 项目编码  */
  projectKey?: string;
  /** 项目名称  */
  projectName?: string;
  relatedRoleId?: number;
  relatedRoleKey?: string;
  /** 角色适用范围  */
  roleRealmParam?: RoleRealmParam;
  /** 角色类型编码  */
  roleTypeKey?: string;
  /** 角色类型名称  */
  roleTypeName?: string;
  /** 角色类型id  */
  typeId?: number;
};

export type RoleUnAuthorizedInfo = {
  /** 业务对象唯一标识  */
  affiliationId?: string;
  /** 角色类型  */
  affiliationType?: string;
  /** 应用id  */
  appId?: number;
  /** 应用编码  */
  appKey?: string;
  /** 应用名称  */
  appName?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 创建人id  */
  createdBy?: number;
  /** 角色描述  */
  desc?: string;
  /** 是否虚拟角色  */
  hide?: boolean;
  /** 主键id  */
  id?: number;
  /** 角色标识  */
  key?: string;
  /** 是否限制范围  */
  limited?: boolean;
  /** 是否主节点角色  */
  mastered?: boolean;
  /** 关联的主节点角色  */
  masteredRoleKeys?: Array<string>;
  /** metadata  */
  metaData?: RoleMetaDataParam;
  /** 角色扩展字段  */
  metaDataMap?: Record<string, unknown>;
  /** 更新时间  */
  modifiedAt?: string;
  /** 角色名称  */
  name?: string;
  /** 项目id  */
  projectId?: number;
  /** 项目编码  */
  projectKey?: string;
  /** 项目名称  */
  projectName?: string;
  relatedRoleId?: number;
  relatedRoleKey?: string;
  /** 角色适用范围  */
  roleRealmParam?: RoleRealmParam;
  /** 角色类型编码  */
  roleTypeKey?: string;
  /** 角色类型名称  */
  roleTypeName?: string;
  /** 租户id  */
  tenantId?: number;
  /** 角色类型id  */
  typeId?: number;
};

export type RoleUpdateRequest = {
  appCode?: string;
  code?: string;
  desc?: string;
  id?: number;
  limit?: boolean;
  name?: string;
  projectId?: number;
  properties?: Array<MetaDataProperty>;
  roleRealm?: RoleRealmParam;
};

export type SendNoticeRequest = {
  /** 图片验证码  */
  captcha: string;
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 用户源  */
  origin?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token: string;
};

export type SendNoticeWithNoCaptchaRequest = {
  /** 手机号前缀  */
  mobilePrefix?: string;
  /** 用户源  */
  origin?: string;
  /** 接收人  */
  receiver: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type Serializable = Record<string, unknown>;

export type SignUpByEmailAndEmailCodeAndReturnTokenRequest = {
  /** 注册渠道  */
  channel?: string;
  /** 注册渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 国际区号  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户名  */
  username: string;
};

export type SignUpByEmailAndEmailCodeRequest = {
  /** 注册渠道  */
  channel?: string;
  /** 注册渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 国际区号  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户名  */
  username?: string;
};

export type SignUpByEmailSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type SignUpByGuestRequest = {
  /** 图片验证码答案  */
  captcha?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码 token  */
  token?: string;
  /** 用户名  */
  username?: string;
};

export type SignUpByMobileAndSmsCodeAndReturnTokenRequest = {
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
  /** 用户名  */
  username: string;
};

export type SignUpByMobileAndSmsCodeRequest = {
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
  /** 用户名  */
  username?: string;
};

export type SignUpByMobileSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha: string;
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 国际区号  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token: string;
};

export type SignUpByVerifyTokenRequest = {
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 昵称  */
  nickname?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户名  */
  username?: string;
  /** 验证Token  */
  verifyToken: string;
};

export type SmsCodeVerifyInfo = {
  /** 过期时长（秒）  */
  expireTime?: number;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 手机号  */
  mobile: string;
  /** 租户编号-Long  */
  tenantIdLong?: number;
  /** 验证 token 的值  */
  verifyToken?: string;
};

export type SyncSyncTaskRequest = {
  /** 间隔时间  */
  intervalTime?: number;
  /** 同步接口  */
  syncInterface?: string;
  /** 任务名称  */
  taskName?: string;
  /** 权限树的唯一标识  */
  treeKey?: string;
};

export type SyncTreeRequest = {
  /** 权限树描述  */
  desc?: string;
  /** 是否默认的权限树  */
  isDefault?: boolean;
  /** 权限树唯一标识，更新权限树需要传同样的key  */
  key?: string;
  /** 上次变更时间  */
  lastChangeTime?: string;
  /** 权限树名称  */
  name?: string;
  /** 整棵权限树节点数量  */
  nodeNum?: number;
  /** 权限树根节点  */
  treeNodeParam?: TreeNodeParam;
};

export type ThirdAccountBindByEmailAndEmailCodeRequest = {
  /** 微信用户头像  */
  avatarUrl?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 微信用户昵称  */
  nickName?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 三方账户信息  */
  thirdAccountParam: ThirdAccountParam;
};

export type ThirdAccountBindByEmailSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha: string;
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token: string;
};

export type ThirdAccountBindByIdentifyRequest = {
  /** 图片验证码答案  */
  captcha?: string;
  /** 确认密码  */
  confirm?: string;
  /** 用户登录唯一标识：手机号/用户名/邮箱  */
  identify: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 新密码  */
  newPassword: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 三方账户信息  */
  thirdAccountParam: ThirdAccountParam;
  /** 图片验证码 token  */
  token?: string;
};

export type ThirdAccountBindByMobileAndSmsCodeRequest = {
  /** 微信用户头像  */
  avatarUrl?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 确认密码  */
  confirm?: string;
  identify?: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否APP调用，false指代PC调用  */
  isApp: boolean;
  /** 扩展点参数，注册后放入用户上下文  */
  key?: Record<string, unknown>;
  /** 手机号  */
  mobile: string;
  /** 新密码  */
  newPassword: string;
  /** 微信用户昵称  */
  nickName?: string;
  /** 原始密码  */
  oldPassword?: string;
  /** 用户源  */
  origin?: string;
  /** 密码  */
  password?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
  /** 三方账户信息  */
  thirdAccountParam: ThirdAccountParam;
};

export type ThirdAccountBindByMobileSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type ThirdAccountInfo = {
  /** 三方账户id  */
  accountId?: string;
  /** 三方账户名  */
  accountName?: string;
  /** 三方账户类型，e.g:QQ、WECHAT、WECHAT-MP、WEIBO  */
  accountType?: string;
  /** 三方客户端id  */
  appId?: string;
  /** 扩展 json 字段  */
  extra?: string;
  /** id  */
  id?: number;
  /** 三方账户 openId   */
  openId?: string;
  /** 关联的用户主表id  */
  userId?: number;
};

export type ThirdAccountParam = {
  /** 三方账户id  */
  accountId?: string;
  /** 三方账户名  */
  accountName?: string;
  /** 三方账户类型，e.g:QQ、WECHAT、WECHAT-MP、WEIBO  */
  accountType?: string;
  /** 三方客户端id  */
  appId?: string;
  /** 三方板绑定的邮箱  */
  email?: string;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 三方绑定的手机号  */
  mobile?: string;
  /** 三方账户 openId   */
  openId?: string;
  /** 三方原始信息  */
  originalJson?: string;
  /** 关联的用户主表id  */
  userId?: number;
};

export type ThirdPartBindBean = {
  /** 应用名称  */
  appName?: string;
  /** 登录成功重定向地址  */
  targetUrl?: string;
  /** 第三方类型  */
  type: string;
  /** 要绑定的用户Id  */
  userId?: number;
};

export type TokenInfo = {
  /** 过期时长（秒）  */
  expireTime?: number;
  /** 额外信息  */
  extra?: { [key: string]: string };
  /** 是否首次登陆  */
  firstLogin?: boolean;
  /** 租户编号-Long  */
  tenantIdLong?: number;
  /** token的值  */
  token?: string;
  /** 用户ID  */
  userId?: number;
};

export type TokenParam = {
  /** 过期时长  */
  expireTime?: number;
  /** token对象  */
  token?: string;
  tokenType?: TokenParamTokenType;
};

export enum TokenParamTokenType {
  "JWT" = "JWT",
}

export type TreeConfig = {
  enabled?: boolean;
  parentField?: string;
};

export type TreeContainerParams = {
  condition?: string;
  frontendContext?: { [key: string]: Record<string, unknown> };
  queryValues?: { [key: string]: QueryValue };
  result?: ResultModel;
  search?: Record<string, unknown>;
};

export type TreeNodeParam = {
  /** 业务对象id  */
  bizId?: string;
  /** 业务对象名称  */
  bizName?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 业务对象类型名称  */
  bizTypeName?: string;
  /** 子节点， 无子节点 children = null  */
  children?: Array<TreeNodeParam>;
  /** 手机号  */
  mobile?: string;
};

export type TreeSearchData = {
  ancestorIds?: Array<Serializable>;
  data?: Record<string, unknown>;
  id?: Serializable;
  label?: string;
};

export type UnBindEmailAndEmailCodeRequest = {
  /** 邮箱  */
  email: string;
  /** 邮件验证码  */
  emailCode: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type UnBindEmailSendEmailCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type UnBindMobileAndSmsCodeRequest = {
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 国际区号  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
};

export type UnBindMobileSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type UnBindThirdAccountRequest = {
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 目标解绑三方渠道  */
  thirdAccountType: string;
};

export type UnfreezeByMobileRequest = {
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 短信验证码  */
  smsCode: string;
};

export type UpdateAppRequest = {
  /** 描述信息  */
  desc?: string;
  /** 应用端id  */
  id?: number;
  internal?: boolean;
  /** 应用key  */
  key?: string;
  /** 应用名  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type UpdateFeatureGroupRequest = {
  /** appId  */
  appId: number;
  /** 主键id  */
  id?: number;
  /** 权限组标识  */
  key?: string;
  /** 功能权限组名称  */
  name?: string;
  /** 父组id  */
  parentId?: number;
  /** 功能权限组名称  */
  projectId?: number;
};

export type UpdateFeaturePermissionRequest = {
  /** 应用id  */
  appId?: number;
  /** 应用名称  */
  appName?: string;
  /** 描述  */
  desc?: string;
  /** 是否直接挂在应用下  */
  directed?: boolean;
  /** 功能分组id，直接挂在分组下的权限需要传入,创建应用或者权限下子权限勿传  */
  featureGroupId?: number;
  /** 主键id  */
  id?: number;
  /** 权限标识  */
  key?: string;
  /** 权限名称，创建必填  */
  name?: string;
  /** 父权限id，有父权限需要传入，直接挂在分组或者应用下的权限勿传  */
  parentId?: number;
  /** 项目id  */
  projectId?: number;
  /** 关联权限id列表  */
  relationIds?: Array<number>;
  /** 关联的资源列表  */
  resources?: Array<ResourceParam>;
  /** 安全级别id  */
  safeLevelId?: number;
  /** 安全级别名称  */
  safeLevelName?: string;
  /** 权限类型1-代表功能权限，2-代表数据权限  */
  type?: number;
};

export type UpdateOriginRequest = {
  /** 描述信息  */
  desc?: string;
  /** 用户源id  */
  id?: number;
  /** key  */
  key?: string;
  /** 用户源名称  */
  name?: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type UpdateProjectRequest = {
  /** 创建人id  */
  createUser?: number;
  /** 描述信息  */
  desc?: string;
  /** 主键id  */
  id?: number;
  /** 逻辑主键  */
  key: string;
  /** 项目名称  */
  name?: string;
  syncUrl?: string;
  tenantId?: number;
};

export type UpdateRoleRelationRequest = {
  /** 目标id  */
  bizId?: string;
  /** 目标类型  */
  bizType?: string;
  /** 需要授权的角色id的集合  */
  roleIds?: Array<number>;
  /** 租户id  */
  tenantId?: number;
};

export type UpdateSyncTaskRequest = {
  /** 主键id  */
  id?: number;
  /** 刷新间隔  */
  intervalTime?: number;
  /** 同步接口  */
  syncInterface?: string;
  /** 任务名称  */
  taskName?: string;
  /** 权限树标识  */
  treeKey?: string;
};

export type UpdateTreeNodeConfigRequest = {
  /** 业务对象id  */
  bizId?: string;
  /** 业务对象类型  */
  bizType?: string;
  /** 逻辑主键  */
  key?: string;
  /** 权限是否下放：0-不下放，1-下放  */
  permissionDelegate?: boolean;
};

export type UserAuthority = Record<string, unknown>;

export type UserDestroyRequest = {
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type UserEndpointInfo = {
  /** 邮箱  */
  email?: string;
  /** 应用列表  */
  endpoints?: Array<AppInfo>;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 用户源  */
  origin?: string;
  /** 用户id  */
  userId?: number;
  /** 用户名  */
  username?: string;
};

export type UserFindByUserIdRequest = {
  /** 业务对象id  */
  userId?: string;
};

export type UserFindResponse = {
  id?: number;
  mobile?: string;
  tenantId?: number;
  userId?: string;
  userName?: string;
};

export type UserInfo = {
  /** 头像  */
  avatar?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 创建时间  */
  createdAt?: string;
  /** 邮箱  */
  email?: string;
  /** 是否启用  */
  enabled?: boolean;
  /** 扩展字段  */
  extra?: { [key: string]: string };
  /** 主键  */
  id?: number;
  /** 邀请码  */
  invitationCode?: string;
  /** 是否在线  */
  isOnline?: boolean;
  /** 最后一次登录时间  */
  lastLoginAt?: string;
  /** 冻结FLAG(0:NOT,1:YES)  */
  locked?: boolean;
  /** 手机号  */
  mobile?: string;
  /** 昵称  */
  nickname?: string;
  /** 用户源  */
  origin?: string;
  /** 密码是否存在  */
  passwordExist?: boolean;
  /** 用户标识pk  */
  pk?: number;
  /** 手机号前缀  */
  prefix?: string;
  /** 过期时间  */
  pwdExpireAt?: string;
  /** 用户来源  */
  source?: string;
  /** 来源类型  */
  sourceType?: string;
  /** 标签  */
  tag?: string;
  /** 租户ID  */
  tenantId?: number;
  /** 更新时间  */
  updatedAt?: string;
  /** 用户详细信息  */
  userDetail?: { [key: string]: string };
  /** 用户名  */
  username?: string;
};

export type UserInfoV1 = {
  avatar_url?: string;
  birthdate?: string;
  channel?: string;
  created_at?: string;
  email?: string;
  email_verified?: string;
  enabled?: boolean;
  extra?: { [key: string]: string };
  invitationCode?: string;
  lastLoginAt?: string;
  name?: string;
  nickname?: string;
  passwordStrength?: number;
  phone_number?: string;
  phone_number_verified?: string;
  realName?: string;
  type?: number;
  updated_at?: string;
  user_id?: number;
  username?: string;
};

export type UserInfoV2 = {
  address?: string;
  authorities?: Array<UserAuthority>;
  avatarUrl?: string;
  birthday?: string;
  channel?: string;
  createdAt?: string;
  email?: string;
  emailExist?: boolean;
  emailVerified?: boolean;
  enabled?: boolean;
  externalSource?: string;
  extraInfo?: Record<string, unknown>;
  gender?: number;
  group?: string;
  id?: number;
  invitationCode?: string;
  lastLoginAt?: string;
  locked?: boolean;
  metadata?: string;
  mobile?: string;
  mqCreateState?: string;
  mqUpdateState?: string;
  nickName?: string;
  nickname?: string;
  passwordExist?: boolean;
  passwordStrength?: number;
  phone?: string;
  phoneExist?: boolean;
  phoneVerified?: boolean;
  realName?: string;
  referrerId?: number;
  registerIp?: string;
  signUpType?: string;
  type?: number;
  updatedAt?: string;
  username?: string;
};

export type UserListCreateUserRequest = {
  /** 手机号  */
  mobile?: string;
  /** 角色列表  */
  roleIds?: Array<number>;
  /** 用户id  */
  userId?: number;
};

export type UserListDeleteUserRequest = {
  /** 项目key值  */
  projectKey?: string;
  /** 用户id  */
  userId?: string;
};

export type UserListPagingResponseRole = {
  /** 角色id  */
  roleId?: number;
  /** 角色名称  */
  roleName?: string;
};

export type ValueWrapper = {
  isSingleValue?: boolean;
  values?: Array<Record<string, unknown>>;
};

export type ValueWrapperobject = {
  isSingleValue?: boolean;
  values?: Array<Record<string, unknown>>;
};

export type VerifyCodeCheckInfo = {
  /** 是否通过  */
  passed: boolean;
  /** 验证通过后生产的token  */
  verifyToken?: string;
};

export type VerifyEmailSendEmailCodeRequest = {
  /** 邮箱  */
  email: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type VerifyMobileSendSmsCodeRequest = {
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type WxAppBindBean = {
  /** 微信用户头像  */
  avatarUrl: string;
  /** 加密数据  */
  encryptedData: string;
  /** 邀请码  */
  invitationCode?: string;
  /** 初始向量  */
  iv: string;
  /** 微信用户昵称  */
  nickName: string;
  /** 用户源  */
  origin?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
};

export type WxAppPhoneResponse = {
  /** 额外信息  */
  extra?: { [key: string]: string };
  mobile?: string;
  /** 租户编号-Long  */
  tenantIdLong?: number;
};

export type UnFreezeByMobileSendSmsCodeRequest = {
  /** 图片验证码  */
  captcha?: string;
  /** 手机号  */
  mobile: string;
  /** 用户源  */
  origin?: string;
  /** 手机号前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 图片验证码token  */
  token?: string;
};

export type 修改用户信息基类 = {
  /** 头像  */
  avatar?: string;
  /** 注册渠道  */
  channel?: string;
  /** 渠道类型  */
  channelType?: string;
  /** 邮箱  */
  email?: string;
  /** 密码过期时间  */
  expireAt?: string;
  /** 用户扩展字段  */
  extra?: { [key: string]: string };
  /** 最后一次登录时间  */
  lastLoginAt?: string;
  /** 手机号码  */
  mobile?: string;
  /** 用户昵称  */
  nickname?: string;
  /** 操作者id  */
  operatorId?: number;
  /** 用户源  */
  origin?: string;
  /** 手机号码前缀  */
  prefix?: string;
  /** 关联应用端（可选）  */
  relatedAppId?: number;
  /** 用户来源  */
  source?: string;
  /** 来源类型  */
  sourceType?: string;
  /** 标签  */
  tag?: string;
  /** 用户详情  */
  userDetail?: { [key: string]: string };
  /** 用户名  */
  username?: string;
};

export type 分页查询结果ProjectInfo = {
  /** 分页查询当前页的数据  */
  data?: Array<ProjectInfo>;
  /** 查询结果是否为空  */
  empty?: boolean;
  /** 总页数  */
  pageCount?: number;
  /** 每页记录数  */
  pageSize?: number;
  /** 分页查询到的数据总数  */
  total?: number;
};

export type 分页查询结果RoleInfo = {
  /** 分页查询当前页的数据  */
  data?: Array<RoleInfo>;
  /** 查询结果是否为空  */
  empty?: boolean;
  /** 总页数  */
  pageCount?: number;
  /** 每页记录数  */
  pageSize?: number;
  /** 分页查询到的数据总数  */
  total?: number;
};

export type 分页查询结果RoleRelationPagingInfo = {
  /** 分页查询当前页的数据  */
  data?: Array<RoleRelationPagingInfo>;
  /** 查询结果是否为空  */
  empty?: boolean;
  /** 总页数  */
  pageCount?: number;
  /** 每页记录数  */
  pageSize?: number;
  /** 分页查询到的数据总数  */
  total?: number;
};

export type 分页查询结果RoleRelationUserInfo = {
  /** 分页查询当前页的数据  */
  data?: Array<RoleRelationUserInfo>;
  /** 查询结果是否为空  */
  empty?: boolean;
  /** 总页数  */
  pageCount?: number;
  /** 每页记录数  */
  pageSize?: number;
  /** 分页查询到的数据总数  */
  total?: number;
};

export type 分页查询结果RoleUnAuthorizedInfo = {
  /** 分页查询当前页的数据  */
  data?: Array<RoleUnAuthorizedInfo>;
  /** 查询结果是否为空  */
  empty?: boolean;
  /** 总页数  */
  pageCount?: number;
  /** 每页记录数  */
  pageSize?: number;
  /** 分页查询到的数据总数  */
  total?: number;
};

export type 可授权用户 = {
  /** 创建时间  */
  createTime?: string;
  /** 手机号  */
  mobile?: string;
  /** 角色列表  */
  roles?: Array<UserListPagingResponseRole>;
  /** 用户id  */
  userId?: string;
  /** 用户名称  */
  userName?: string;
};

export type 组织主体 = {
  /** 条件限制  */
  childrenCondition?: string;
  /** 子类  */
  childrenCount?: number;
  /** 描述  */
  desc?: string;
  /** 维度id  */
  dimensionId?: number;
  /** 维度key  */
  dimensionKey?: string;
  /** 主键id  */
  id?: number;
  /** 排序  */
  index?: number;
  /** 逻辑主键  */
  key?: string;
  /** 管理者id  */
  managerId?: number;
  /** 管理者名称  */
  managerName?: string;
  /** 主负责岗位  */
  managerPositionId?: number;
  managerPositionName?: string;
  /** 元信息  */
  metaData?: string;
  /** 扩展信息  */
  metaDataMap?: Record<string, unknown>;
  /** 组织名称  */
  name?: string;
  /** 节点id  */
  nodeId?: number;
  /** 组织名  */
  orgManagerName?: string;
  /** 父id  */
  parentId?: number;
  /** 父类key  */
  parentKey?: string;
  /** 父节点名称  */
  parents?: string;
  /** *  权限下放标识  只做标识  具体下放规则以及下放关系  */
  permissionDelegate?: boolean;
  positionId?: number;
  positionIds?: Array<number>;
  /** 绑定的岗位列表  */
  positionList?: Array<PositionParam>;
  /** 项目id，创建必填  */
  projectId?: number;
  /** 绑定的角色列表  */
  roleIdDTO?: Array<RoleRequest>;
  /** 绑定的角色列表  */
  roleIds?: Array<number>;
  /** 下放规则  */
  roleRelationDelegateRuleParam?: RoleRelationDelegateRuleParam;
  /** 路由  */
  router?: string;
  /** 租户id  */
  tenantId?: number;
  /** 类型id  */
  typeId?: number;
  /** 类型key  */
  typeKey?: string;
  /** 类型名称  */
  typeName?: string;
};

export type 角色基本信息 = {
  /** 角色ID  */
  roleId?: number;
  /** 角色名称  */
  roleName?: string;
};

export type 项目和它下面对应的角色 = {
  /** 项目ID  */
  projectId?: number;
  /** 项目名称  */
  projectName?: string;
  /** 项目下角色集合  */
  roles?: Array<角色基本信息>;
};
