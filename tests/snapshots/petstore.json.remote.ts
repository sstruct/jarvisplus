/* eslint-disable */

import { default as requestFactory } from "jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description uploads an image
 */
export function PostPetByPetIdUploadImage(
  payload: PostPetByPetIdUploadImageParameters
): Promise<ApiResponse> {
  const path = `/pet/${payload["petId"]}/uploadImage`;
  return request({ path, payload, payloadIn: "formData", method: "POST" });
}

/**
 * @description Add a new pet to the store
 */
export function PostPet(payload: PostPetParameters): Promise<void> {
  const path = "/pet";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Update an existing pet
 */
export function PutPet(payload: PutPetParameters): Promise<void> {
  const path = "/pet";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description Finds Pets by status
 */
export function GetPetFindByStatus(
  payload: GetPetFindByStatusParameters
): Promise<Array<Pet>> {
  const path = "/pet/findByStatus";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Finds Pets by tags
 */
export function GetPetFindByTags(
  payload: GetPetFindByTagsParameters
): Promise<Array<Pet>> {
  const path = "/pet/findByTags";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Find pet by ID
 */
export function GetPetByPetId(payload: GetPetByPetIdParameters): Promise<Pet> {
  const path = `/pet/${payload["petId"]}`;
  return request({ path, payload, payloadIn: "header", method: "GET" });
}

/**
 * @description Updates a pet in the store with form data
 */
export function PostPetByPetId(
  payload: PostPetByPetIdParameters
): Promise<void> {
  const path = `/pet/${payload["petId"]}`;
  return request({ path, payload, payloadIn: "formData", method: "POST" });
}

/**
 * @description Deletes a pet
 */
export function DeletePetByPetId(
  payload: DeletePetByPetIdParameters
): Promise<void> {
  const path = `/pet/${payload["petId"]}`;
  return request({ path, payload, payloadIn: "header", method: "DELETE" });
}

/**
 * @description Place an order for a pet
 */
export function PostStoreOrder(
  payload: PostStoreOrderParameters
): Promise<Order> {
  const path = "/store/order";
  return request({ path, payload, payloadIn: "body", method: "POST" });
}

/**
 * @description Find purchase order by ID
 */
export function GetStoreOrderByOrderId(
  payload: GetStoreOrderByOrderIdParameters
): Promise<Order> {
  const path = `/store/order/${payload["orderId"]}`;
  return request({ path, payload, method: "GET" });
}

/**
 * @description Delete purchase order by ID
 */
export function DeleteStoreOrderByOrderId(
  payload: DeleteStoreOrderByOrderIdParameters
): Promise<void> {
  const path = `/store/order/${payload["orderId"]}`;
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description Returns pet inventories by status
 */
export function GetStoreInventory(
  payload: GetStoreInventoryParameters
): Promise<{ [key: string]: number }> {
  const path = "/store/inventory";
  return request({ path, payload, payloadIn: "header", method: "GET" });
}

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

export type PostPetByPetIdUploadImageParameters = {
  /** ID of pet to update in path */
  petId: number;
  /** Additional data to pass to server in formData */
  additionalMetadata?: string;
  /** file to upload in formData */
  file?: any;
  undefined?: any;
};

export type PostPetParameters = {
  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type PutPetParameters = {
  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type GetPetFindByStatusParameters = {
  /** Status values that need to be considered for filter in query */
  status: Array<"available" | "pending" | "sold">;
  undefined?: any;
};

export type GetPetFindByTagsParameters = {
  /** Tags to filter by in query */
  tags: Array<string>;
  undefined?: any;
};

export type GetPetByPetIdParameters = {
  /** ID of pet to return in path */
  petId: number;
  /** in header */
  api_key?: any;
};

export type PostPetByPetIdParameters = {
  /** ID of pet that needs to be updated in path */
  petId: number;
  /** Updated name of the pet in formData */
  name?: string;
  /** Updated status of the pet in formData */
  status?: string;
  undefined?: any;
};

export type DeletePetByPetIdParameters = {
  /** in header */
  api_key?: string;
  /** Pet id to delete in path */
  petId: number;
  undefined?: any;
};

export type PostStoreOrderParameters =
  Order; /** order placed for purchasing the pet in body */

export type GetStoreOrderByOrderIdParameters = {
  /** ID of pet that needs to be fetched in path */
  orderId: number;
};

export type DeleteStoreOrderByOrderIdParameters = {
  /** ID of the order that needs to be deleted in path */
  orderId: number;
};

export type GetStoreInventoryParameters = {
  /** in header */
  api_key?: any;
};

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

export type ApiResponse = {
  code?: number;
  type?: string;
  message?: string;
};

export type Category = {
  id?: number;
  name?: string;
};

export type Pet = {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  /** pet status in the store  */
  status?: PetStatus;
};

export enum PetStatus {
  "available" = "available",
  "pending" = "pending",
  "sold" = "sold",
}

export type Tag = {
  id?: number;
  name?: string;
};

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /** Order Status  */
  status?: OrderStatus;
  complete?: boolean;
};

export enum OrderStatus {
  "placed" = "placed",
  "approved" = "approved",
  "delivered" = "delivered",
}

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
