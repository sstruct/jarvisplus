/* eslint-disable */

import { request } from "@terminus/mall-utils";

/**
 * @description false
 */
export function getProvidersMicrosoftEnterpriseKnowledgeGraphOperations(
  payload: getProvidersMicrosoftEnterpriseKnowledgeGraphOperationsParameters
): Promise<OperationEntityListResult> {
  return request("/providers/Microsoft.EnterpriseKnowledgeGraph/operations", {
    payload,
    payloadIn: "query",
    method: "GET",
  });
}

/**
 * @description false
 */
export function getSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServices(
  payload: getSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters
): Promise<EnterpriseKnowledgeGraphResponseList | Error> {
  return request(
    `/subscriptions/${payload["subscriptionId"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services`,
    { payload, payloadIn: "query", method: "GET" }
  );
}

/**
 * @description false
 */
export function getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServices(
  payload: getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters
): Promise<EnterpriseKnowledgeGraphResponseList | Error> {
  return request(
    `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services`,
    { payload, payloadIn: "query", method: "GET" }
  );
}

/**
 * @description false
 */
export function deleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: deleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<Error> {
  return request(
    `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`,
    { payload, payloadIn: "query", method: "DELETE" }
  );
}

/**
 * @description false
 */
export function getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  return request(
    `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`,
    { payload, payloadIn: "query", method: "GET" }
  );
}

/**
 * @description false
 */
export function patchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: patchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  const payloadIn = { query: ["api-version"], body: ["properties"] };
  return request(
    `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`,
    { payload, payloadIn, method: "PATCH" }
  );
}

/**
 * @description false
 */
export function putSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: putSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  const payloadIn = { query: ["api-version"], body: ["properties"] };
  return request(
    `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`,
    { payload, payloadIn, method: "PUT" }
  );
}

export type getProvidersMicrosoftEnterpriseKnowledgeGraphOperationsParameters =
  {
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
  };

export type getSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters =
  {
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  };

export type getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
  };

export type deleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** The name of the EnterpriseKnowledgeGraph resource. in path */
    resourceName: string;
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  };

export type getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** The name of the EnterpriseKnowledgeGraph resource. in path */
    resourceName: string;
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  };

export type patchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** The name of the EnterpriseKnowledgeGraph resource. in path */
    resourceName: string;

    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  } & EnterpriseKnowledgeGraph; /** The parameters to provide for the created EnterpriseKnowledgeGraph. in body */

export type putSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** The name of the EnterpriseKnowledgeGraph resource. in path */
    resourceName: string;

    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  } & EnterpriseKnowledgeGraph; /** The parameters to provide for the created EnterpriseKnowledgeGraph. in body */

export type EnterpriseKnowledgeGraph = Resource;

export type EnterpriseKnowledgeGraphProperties = {
  /** The description of the EnterpriseKnowledgeGraph  */
  description?: string;
  /** Specifies the metadata  of the resource.  */
  metadata?: Record<string, unknown>;
  /** The state of EnterpriseKnowledgeGraph provisioning  */
  provisioningState?: EnterpriseKnowledgeGraphPropertiesProvisioningState;
};

export enum EnterpriseKnowledgeGraphPropertiesProvisioningState {
  "Creating" = "Creating",
  "Deleting" = "Deleting",
  "Failed" = "Failed",
  "Succeeded" = "Succeeded",
}

export type EnterpriseKnowledgeGraphResponseList = {
  /** The link used to get the next page of EnterpriseKnowledgeGraph service resources.  */
  nextLink?: string;
  /** Gets the list of EnterpriseKnowledgeGraph service results and their properties.  */
  value?: Array<EnterpriseKnowledgeGraph>;
};

export type Error = {
  /** The error body.  */
  error?: ErrorBody;
};

export type ErrorBody = {
  /** error code  */
  code: string;
  /** error message  */
  message: string;
};

export type OperationDisplayInfo = {
  /** The description of the operation.  */
  description?: string;
  /** The action that users can perform, based on their permission level.  */
  operation?: string;
  /** Service provider: Microsoft EnterpriseKnowledgeGraph Service.  */
  provider?: string;
  /** Resource on which the operation is performed.  */
  resource?: string;
};

export type OperationEntity = {
  /** The operation supported by EnterpriseKnowledgeGraph Service Management.  */
  display?: OperationDisplayInfo;
  /** Operation name: {provider}/{resource}/{operation}.  */
  name?: string;
  /** The origin of the operation.  */
  origin?: string;
  /** Additional properties.  */
  properties?: Record<string, unknown>;
};

export type OperationEntityListResult = {
  /** The link used to get the next page of operations.  */
  nextLink?: string;
  /** The list of operations.  */
  value?: Array<OperationEntity>;
};

export type Resource = {
  /** Specifies the resource ID.  */
  id?: string;
  /** Specifies the location of the resource.  */
  location?: string;
  /** Specifies the name of the resource.  */
  name?: string;
  /** Gets or sets the SKU of the resource.  */
  sku?: Sku;
  /** Contains resource tags defined as key/value pairs.  */
  tags?: { [key: string]: string };
  /** Specifies the type of the resource.  */
  type?: string;
};

export type Sku = {
  /** The sku name  */
  name: SkuName;
};

export type SkuName = "F0" | "S1";
