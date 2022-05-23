import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description Add a new pet to the store
 */
export function postPet(payload: postPetPayloadParameters): Promise<void> {
  const path = "/pet";
  const payloadInType = "body";
  return request({ path, payload, payloadInType, method: "POST" });
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

export type postPetPayloadParameters = {
  undefined?: any;
} & Pet; /** Pet object that needs to be added to the store in body */

export type getPetFindByStatusPayloadParameters = {
  /** Status values that need to be considered for filter in query */
  status: Array<"available" | "pending" | "sold">;
  undefined?: any;
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
