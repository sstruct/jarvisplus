/* eslint-disable */

import { request } from "@terminus/mall-utils";

/**
 * @description Creates list of users with given input array
 */
export function postUserCreateWithArray(
  payload: postUserCreateWithArrayParameters
): Promise<void> {
  return request("/user/createWithArray", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description Creates list of users with given input array
 */
export function postUserCreateWithList(
  payload: postUserCreateWithListParameters
): Promise<void> {
  return request("/user/createWithList", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description Get user by user name
 */
export function getUserByUsername(
  payload: getUserByUsernameParameters
): Promise<User> {
  return request(`/user/${payload["username"]}`, { payload, method: "GET" });
}

/**
 * @description Updated user
 */
export function putUserByUsername(
  payload: putUserByUsernameParameters
): Promise<void> {
  return request(`/user/${payload["username"]}`, {
    payload,
    payloadIn: "body",
    method: "PUT",
  });
}

/**
 * @description Delete user
 */
export function deleteUserByUsername(
  payload: deleteUserByUsernameParameters
): Promise<void> {
  return request(`/user/${payload["username"]}`, { payload, method: "DELETE" });
}

/**
 * @description Logs user into the system
 */
export function getUserLogin(payload: getUserLoginParameters): Promise<string> {
  return request("/user/login", { payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Logs out current logged in user session
 */
export function getUserLogout(): Promise<void> {
  return request("/user/logout", { method: "GET" });
}

/**
 * @description Create user
 */
export function postUser(payload: postUserParameters): Promise<void> {
  return request("/user", { payload, payloadIn: "body", method: "POST" });
}

export type postUserCreateWithArrayParameters = {
  /** List of user object in body */
  body: Array<User>;
};

export type postUserCreateWithListParameters = {
  /** List of user object in body */
  body: Array<User>;
};

export type getUserByUsernameParameters = {
  /** The name that needs to be fetched. Use user1 for testing.  in path */
  username: string;
};

export type putUserByUsernameParameters = {
  /** name that need to be updated in path */
  username: string;
} & User; /** Updated user object in body */

export type deleteUserByUsernameParameters = {
  /** The name that needs to be deleted in path */
  username: string;
};

export type getUserLoginParameters = {
  /** The user name for login in query */
  username: string;
  /** The password for login in clear text in query */
  password: string;
};

export type postUserParameters = User; /** Created user object in body */

export type User = {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** User Status  */
  userStatus?: number;
};
