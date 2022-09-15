/* eslint-disable */

import { default as requestFactory } from "jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description Creates list of users with given input array
 */
export function PostUserCreateWithArray(
  payload: PostUserCreateWithArrayParameters
): Promise<void> {
  const path = "/user/createWithArray";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Creates list of users with given input array
 */
export function PostUserCreateWithList(
  payload: PostUserCreateWithListParameters
): Promise<void> {
  const path = "/user/createWithList";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Get user by user name
 */
export function GetUserByUsername(
  payload: GetUserByUsernameParameters
): Promise<User> {
  const path = `/user/${payload["username"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description Updated user
 */
export function PutUserByUsername(
  payload: PutUserByUsernameParameters
): Promise<void> {
  const path = `/user/${payload["username"]}`;
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description Delete user
 */
export function DeleteUserByUsername(
  payload: DeleteUserByUsernameParameters
): Promise<void> {
  const path = `/user/${payload["username"]}`;
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description Logs user into the system
 */
export function GetUserLogin(payload: GetUserLoginParameters): Promise<string> {
  const path = "/user/login";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Logs out current logged in user session
 */
export function GetUserLogout(): Promise<void> {
  const path = "/user/logout";
  return request({ path, method: "GET" });
}

/**
 * @description Create user
 */
export function PostUser(payload: PostUserParameters): Promise<void> {
  const path = "/user";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

export type PostUserCreateWithArrayParameters = {
  /** List of user object in body */
  body: Array<User>;
};

export type PostUserCreateWithListParameters = {
  /** List of user object in body */
  body: Array<User>;
};

export type GetUserByUsernameParameters = {
  /** The name that needs to be fetched. Use user1 for testing.  in path */
  username: string;
};

export type PutUserByUsernameParameters = {
  /** name that need to be updated in path */
  username: string;
} & User; /** Updated user object in body */

export type DeleteUserByUsernameParameters = {
  /** The name that needs to be deleted in path */
  username: string;
};

export type GetUserLoginParameters = {
  /** The user name for login in query */
  username: string;
  /** The password for login in clear text in query */
  password: string;
};

export type PostUserParameters = User; /** Created user object in body */

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
