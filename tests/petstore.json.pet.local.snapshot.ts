import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

import {
  default as customAgent,
  onResponse,
  onError,
} from "./customAgent.example";

const request = requestFactory("", {
  request: customAgent,
  onResponse,
  onError,
});

/**
 * @description uploads an image
 */
export function postPetByPetIdUploadImage(
  payload: postPetByPetIdUploadImagePayloadParameters
): Promise<ApiResponse> {
  let path = "/pet/{petId}/uploadImage";
  path = path.replace("{petId}", String(payload["petId"]));
  const payloadInType = "formData";
  return request({ path, payload, payloadInType, method: "POST" });
}

/**
 * @description Add a new pet to the store
 */
export function postPet(payload: postPetPayloadParameters): Promise<void> {
  const path = "/pet";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "POST" });
}

/**
 * @description Update an existing pet
 */
export function putPet(payload: putPetPayloadParameters): Promise<void> {
  const path = "/pet";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "PUT" });
}

/**
 * @description Finds Pets by status
 */
export function getPetFindByStatus(
  payload: getPetFindByStatusPayloadParameters
): Promise<Array<Pet>> {
  const path = "/pet/findByStatus";
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description Finds Pets by tags
 */
export function getPetFindByTags(
  payload: getPetFindByTagsPayloadParameters
): Promise<Array<Pet>> {
  const path = "/pet/findByTags";
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description Find pet by ID
 */
export function getPetByPetId(
  payload: getPetByPetIdPayloadParameters
): Promise<Pet> {
  let path = "/pet/{petId}";
  path = path.replace("{petId}", String(payload["petId"]));
  const payloadInType = "header";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description Updates a pet in the store with form data
 */
export function postPetByPetId(
  payload: postPetByPetIdPayloadParameters
): Promise<void> {
  let path = "/pet/{petId}";
  path = path.replace("{petId}", String(payload["petId"]));
  const payloadInType = "formData";
  return request({ path, payload, payloadInType, method: "POST" });
}

/**
 * @description Deletes a pet
 */
export function deletePetByPetId(
  payload: deletePetByPetIdPayloadParameters
): Promise<void> {
  let path = "/pet/{petId}";
  path = path.replace("{petId}", String(payload["petId"]));
  const payloadInType = "header";
  return request({ path, payload, payloadInType, method: "DELETE" });
}

/**
 * @description Place an order for a pet
 */
export function postStoreOrder(
  payload: postStoreOrderPayloadParameters
): Promise<Order> {
  const path = "/store/order";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "POST" });
}

/**
 * @description Find purchase order by ID
 */
export function getStoreOrderByOrderId(
  payload: getStoreOrderByOrderIdPayloadParameters
): Promise<Order> {
  let path = "/store/order/{orderId}";
  path = path.replace("{orderId}", String(payload["orderId"]));
  return request({ path, payload, method: "GET" });
}

/**
 * @description Delete purchase order by ID
 */
export function deleteStoreOrderByOrderId(
  payload: deleteStoreOrderByOrderIdPayloadParameters
): Promise<void> {
  let path = "/store/order/{orderId}";
  path = path.replace("{orderId}", String(payload["orderId"]));
  return request({ path, payload, method: "DELETE" });
}

/**
 * @description Returns pet inventories by status
 */
export function getStoreInventory(
  payload: getStoreInventoryPayloadParameters
): Promise<{ [key: string]: number }> {
  const path = "/store/inventory";
  const payloadInType = "header";
  return request({ path, payload, payloadInType, method: "GET" });
}

export type postPetByPetIdUploadImagePayloadParameters = {
  /** ID of pet to update in path */
  petId: number;
  /** Additional data to pass to server in formData */
  additionalMetadata?: string;
  /** file to upload in formData */
  file?: any;
  undefined?: any;
};

export type postPetPayloadParameters = {
  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type putPetPayloadParameters = {
  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type getPetFindByStatusPayloadParameters = {
  /** Status values that need to be considered for filter in query */
  status: Array<"available" | "pending" | "sold">;
  undefined?: any;
};

export type getPetFindByTagsPayloadParameters = {
  /** Tags to filter by in query */
  tags: Array<string>;
  undefined?: any;
};

export type getPetByPetIdPayloadParameters = {
  /** ID of pet to return in path */
  petId: number;
  /** in header */
  api_key?: any;
};

export type postPetByPetIdPayloadParameters = {
  /** ID of pet that needs to be updated in path */
  petId: number;
  /** Updated name of the pet in formData */
  name?: string;
  /** Updated status of the pet in formData */
  status?: string;
  undefined?: any;
};

export type deletePetByPetIdPayloadParameters = {
  /** in header */
  api_key?: string;
  /** Pet id to delete in path */
  petId: number;
  undefined?: any;
};

export type postStoreOrderPayloadParameters =
  Order; /** order placed for purchasing the pet in body */

export type getStoreOrderByOrderIdPayloadParameters = {
  /** ID of pet that needs to be fetched in path */
  orderId: number;
};

export type deleteStoreOrderByOrderIdPayloadParameters = {
  /** ID of the order that needs to be deleted in path */
  orderId: number;
};

export type getStoreInventoryPayloadParameters = {
  /** in header */
  api_key?: any;
};

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
