import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description false
 */
export function getProvidersMicrosoftEnterpriseKnowledgeGraphOperations(
  payload: getProvidersMicrosoftEnterpriseKnowledgeGraphOperationsPayloadParameters
): Promise<OperationEntityListResult> {
  const path = "/providers/Microsoft.EnterpriseKnowledgeGraph/operations";
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description false
 */
export function getSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServices(
  payload: getSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServicesPayloadParameters
): Promise<EnterpriseKnowledgeGraphResponseList | Error> {
  let path =
    "/subscriptions/{subscriptionId}/providers/Microsoft.EnterpriseKnowledgeGraph/services";
  path = path.replace("{subscriptionId}", String(payload["subscriptionId"]));
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description false
 */
export function getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServices(
  payload: getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesPayloadParameters
): Promise<EnterpriseKnowledgeGraphResponseList | Error> {
  let path =
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services";
  path = path.replace(
    "{resourceGroupName}",
    String(payload["resourceGroupName"])
  );
  path = path.replace("{subscriptionId}", String(payload["subscriptionId"]));
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description false
 */
export function deleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: deleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters
): Promise<Error> {
  let path =
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}";
  path = path.replace(
    "{resourceGroupName}",
    String(payload["resourceGroupName"])
  );
  path = path.replace("{resourceName}", String(payload["resourceName"]));
  path = path.replace("{subscriptionId}", String(payload["subscriptionId"]));
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "DELETE" });
}

/**
 * @description false
 */
export function getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  let path =
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}";
  path = path.replace(
    "{resourceGroupName}",
    String(payload["resourceGroupName"])
  );
  path = path.replace("{resourceName}", String(payload["resourceName"]));
  path = path.replace("{subscriptionId}", String(payload["subscriptionId"]));
  const payloadInType = "query";
  return request({ path, payload, payloadInType, method: "GET" });
}

/**
 * @description false
 */
export function patchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: patchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  let path =
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}";
  path = path.replace(
    "{resourceGroupName}",
    String(payload["resourceGroupName"])
  );
  path = path.replace("{resourceName}", String(payload["resourceName"]));
  path = path.replace("{subscriptionId}", String(payload["subscriptionId"]));
  const payloadIn = { query: ["api-version"], body: ["properties"] };
  return request({ path, payload, payloadIn, method: "PATCH" });
}

/**
 * @description false
 */
export function putSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceName(
  payload: putSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters
): Promise<EnterpriseKnowledgeGraph | Error> {
  let path =
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}";
  path = path.replace(
    "{resourceGroupName}",
    String(payload["resourceGroupName"])
  );
  path = path.replace("{resourceName}", String(payload["resourceName"]));
  path = path.replace("{subscriptionId}", String(payload["subscriptionId"]));
  const payloadIn = { query: ["api-version"], body: ["properties"] };
  return request({ path, payload, payloadIn, method: "PUT" });
}

export type getProvidersMicrosoftEnterpriseKnowledgeGraphOperationsPayloadParameters =
  {
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
  };

export type getSubscriptionsBySubscriptionIdProvidersMicrosoftEnterpriseKnowledgeGraphServicesPayloadParameters =
  {
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
  };

export type getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesPayloadParameters =
  {
    /** The name of the EnterpriseKnowledgeGraph resource group in the user subscription. in path */
    resourceGroupName: string;
    /** Azure Subscription ID. in path */
    subscriptionId: string;
    /** Version of the API to be used with the client request. in query */
    "api-version": string;
  };

export type deleteSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters =
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

export type getSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters =
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

export type patchSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters =
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

export type putSubscriptionsBySubscriptionIdResourceGroupsByResourceGroupNameProvidersMicrosoftEnterpriseKnowledgeGraphServicesByResourceNamePayloadParameters =
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
