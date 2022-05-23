import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description Creates list of users with given input array
 */
export function postUserCreateWithArray(
  payload: postUserCreateWithArrayPayloadParameters
): Promise<void> {
  const path = "/user/createWithArray";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "POST" });
}

/**
 * @description Creates list of users with given input array
 */
export function postUserCreateWithList(
  payload: postUserCreateWithListPayloadParameters
): Promise<void> {
  const path = "/user/createWithList";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "POST" });
}

/**
 * @description Get user by user name
 */
export function getUserByUsername(
  payload: getUserByUsernamePayloadParameters
): Promise<User> {
  let path = "/user/{username}";
  path = path.replace("{username}", String(payload["username"]));
  return request({ path, payload, method: "GET" });
}

/**
 * @description Updated user
 */
export function putUserByUsername(
  payload: putUserByUsernamePayloadParameters
): Promise<void> {
  let path = "/user/{username}";
  path = path.replace("{username}", String(payload["username"]));
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "PUT" });
}

/**
 * @description Delete user
 */
export function deleteUserByUsername(
  payload: deleteUserByUsernamePayloadParameters
): Promise<void> {
  let path = "/user/{username}";
  path = path.replace("{username}", String(payload["username"]));
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description Logs user into the system
 */
export function getUserLogin(
  payload: getUserLoginPayloadParameters
): Promise<string> {
  const path = "/user/login";
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description Logs out current logged in user session
 */
export function getUserLogout(): Promise<void> {
  const path = "/user/logout";
  return request({ path, method: "GET" });
}

/**
 * @description Create user
 */
export function postUser(payload: postUserPayloadParameters): Promise<void> {
  const path = "/user";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "POST" });
}

export type postUserCreateWithArrayPayloadParameters = {
  /** List of user object in body */
  body: Array<User>;
};

export type postUserCreateWithListPayloadParameters = {
  /** List of user object in body */
  body: Array<User>;
};

export type getUserByUsernamePayloadParameters = {
  /** The name that needs to be fetched. Use user1 for testing.  in path */
  username: string;
};

export type putUserByUsernamePayloadParameters = {
  /** name that need to be updated in path */
  username: string;
} & User; /** Updated user object in body */

export type deleteUserByUsernamePayloadParameters = {
  /** The name that needs to be deleted in path */
  username: string;
};

export type getUserLoginPayloadParameters = {
  /** The user name for login in query */
  username: string;
  /** The password for login in clear text in query */
  password: string;
};

export type postUserPayloadParameters = User; /** Created user object in body */

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
