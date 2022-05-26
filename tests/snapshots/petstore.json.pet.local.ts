/* eslint-disable */

import { request } from "@terminus/mall-utils";

/**
 * @description uploads an image
 */
export function postPetByPetIdUploadImage(
  payload: postPetByPetIdUploadImageParameters
): Promise<ApiResponse> {
  return request(`/pet/${payload["petId"]}/uploadImage`, {
    payload,
    payloadIn: "formData",
    method: "POST",
  });
}

/**
 * @description Add a new pet to the store
 */
export function postPet(payload: postPetParameters): Promise<void> {
  const payloadIn = {
    body: ["id", "category", "name", "photoUrls", "tags", "status"],
    header: ["X-Request-ID"],
  };
  return request("/pet", { payload, payloadIn, method: "POST" });
}

/**
 * @description Update an existing pet
 */
export function putPet(payload: putPetParameters): Promise<void> {
  return request("/pet", { payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description Finds Pets by status
 */
export function getPetFindByStatus(
  payload: getPetFindByStatusParameters
): Promise<Array<Pet>> {
  return request("/pet/findByStatus", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description Finds Pets by tags
 */
export function getPetFindByTags(
  payload: getPetFindByTagsParameters
): Promise<Array<Pet>> {
  return request("/pet/findByTags", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description Find pet by ID
 */
export function getPetByPetId(payload: getPetByPetIdParameters): Promise<Pet> {
  return request(`/pet/${payload["petId"]}`, {
    payload,
    payloadIn: "header",
    method: "GET",
  });
}

/**
 * @description Updates a pet in the store with form data
 */
export function postPetByPetId(
  payload: postPetByPetIdParameters
): Promise<void> {
  return request(`/pet/${payload["petId"]}`, {
    payload,
    payloadIn: "formData",
    method: "POST",
  });
}

/**
 * @description Deletes a pet
 */
export function deletePetByPetId(
  payload: deletePetByPetIdParameters
): Promise<void> {
  return request(`/pet/${payload["petId"]}`, {
    payload,
    payloadIn: "header",
    method: "DELETE",
  });
}

/**
 * @description Place an order for a pet
 */
export function postStoreOrder(
  payload: postStoreOrderParameters
): Promise<Order> {
  return request("/store/order", {
    payload,
    payloadIn: "body",
    method: "POST",
  });
}

/**
 * @description Find purchase order by ID
 */
export function getStoreOrderByOrderId(
  payload: getStoreOrderByOrderIdParameters
): Promise<Order> {
  return request(`/store/order/${payload["orderId"]}`, {
    payload,
    method: "GET",
  });
}

/**
 * @description Delete purchase order by ID
 */
export function deleteStoreOrderByOrderId(
  payload: deleteStoreOrderByOrderIdParameters
): Promise<void> {
  return request(`/store/order/${payload["orderId"]}`, {
    payload,
    method: "DELETE",
  });
}

/**
 * @description Returns pet inventories by status
 */
export function getStoreInventory(
  payload: getStoreInventoryParameters
): Promise<{ [key: string]: number }> {
  return request("/store/inventory", {
    payload,
    payloadIn: "header",
    method: "GET",
  });
}

export type postPetByPetIdUploadImageParameters = {
  /** ID of pet to update in path */
  petId: number;
  /** Additional data to pass to server in formData */
  additionalMetadata?: string;
  /** file to upload in formData */
  file?: any;
  undefined?: any;
};

export type postPetParameters = {
  /** in header */
  "X-Request-ID": string;

  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type putPetParameters = {
  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type getPetFindByStatusParameters = {
  /** Status values that need to be considered for filter in query */
  status: Array<"available" | "pending" | "sold">;
  undefined?: any;
};

export type getPetFindByTagsParameters = {
  /** Tags to filter by in query */
  tags: Array<string>;
  undefined?: any;
};

export type getPetByPetIdParameters = {
  /** ID of pet to return in path */
  petId: number;
  /** in header */
  api_key?: any;
};

export type postPetByPetIdParameters = {
  /** ID of pet that needs to be updated in path */
  petId: number;
  /** Updated name of the pet in formData */
  name?: string;
  /** Updated status of the pet in formData */
  status?: string;
  undefined?: any;
};

export type deletePetByPetIdParameters = {
  /** in header */
  api_key?: string;
  /** Pet id to delete in path */
  petId: number;
  undefined?: any;
};

export type postStoreOrderParameters =
  Order; /** order placed for purchasing the pet in body */

export type getStoreOrderByOrderIdParameters = {
  /** ID of pet that needs to be fetched in path */
  orderId: number;
};

export type deleteStoreOrderByOrderIdParameters = {
  /** ID of the order that needs to be deleted in path */
  orderId: number;
};

export type getStoreInventoryParameters = {
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
