/* eslint-disable */

import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description false
 */
export function GetProvidersMicrosoftEnterpriseKnowledgeGraphOperations(
  payload: GetProvidersMicrosoftEnterpriseKnowledgeGraphOperationsParameters
): Promise<OperationEntityListResult> {
  const path = "/providers/Microsoft.EnterpriseKnowledgeGraph/operations";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description false
 */
export function GetSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServices(
  payload: GetSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters
): Promise<EnterpriseKnowledgeGraphResponseList | Error> {
  const path = `/subscriptions/${payload["subscriptionId"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description false
 */
export function GetSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServices(
  payload: GetSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters
): Promise<EnterpriseKnowledgeGraphResponseList | Error> {
  const path = `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description false
 */
export function DeleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: DeleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<Error> {
  const path = `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`;
  return request({ path, payload, payloadIn: "query", method: "DELETE" });
}

/**
 * @description false
 */
export function GetSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: GetSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  const path = `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`;
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description false
 */
export function PatchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: PatchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  const path = `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`;
  const payloadIn = { query: ["api-version"], body: ["properties"] };
  return request({ path, payload, payloadIn, method: "PATCH" });
}

/**
 * @description false
 */
export function PutSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: PutSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  const path = `/subscriptions/${payload["subscriptionId"]}/resourceGroups/${payload["resourceGroupName"]}/providers/Microsoft.EnterpriseKnowledgeGraph/services/${payload["resourceName"]}`;
  const payloadIn = { query: ["api-version"], body: ["properties"] };
  return request({ path, payload, payloadIn, method: "PUT" });
}

export type GetProvidersMicrosoftEnterpriseKnowledgeGraphOperationsParameters =
  {
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
  };

export type GetSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters =
  {
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  };

export type GetSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
  };

export type DeleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
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

export type GetSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
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

export type PatchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
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

export type PutSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNameParameters =
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
