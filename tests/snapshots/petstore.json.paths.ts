/* eslint-disable */

import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description Add a new pet to the store
 */
export function postPet(payload: postPetParameters): Promise<void> {
  const path = "/pet";
  const payloadIn = {
    body: ["id", "category", "name", "photoUrls", "tags", "status"],
    header: ["X-Request-ID"],
  };
  return request({ path, payload, payloadIn, method: "POST" });
}

/**
 * @description Update an existing pet
 */
export function putPet(payload: putPetParameters): Promise<void> {
  const path = "/pet";
  return request({ path, payload, payloadIn: "body", method: "PUT" });
}

/**
 * @description Finds Pets by status
 */
export function getPetFindByStatus(
  payload: getPetFindByStatusParameters
): Promise<Array<Pet>> {
  const path = "/pet/findByStatus";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Find pet by ID
 */
export function getPetByPetId(payload: getPetByPetIdParameters): Promise<Pet> {
  const path = `/pet/${payload["petId"]}`;
  return request({ path, payload, payloadIn: "header", method: "GET" });
}

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

export type getPetByPetIdParameters = {
  /** ID of pet to return in path */
  petId: number;
  /** in header */
  api_key?: any;
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
