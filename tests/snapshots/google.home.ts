/* eslint-disable */

import { default as requestFactory } from "jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description Legal Notice
 */
export function GetNOTICEHtmlGz(): Promise<void> {
  const path = "/NOTICE.html.gz";
  return request({ path, method: "GET" });
}

/**
 * @description Accessibility
 */
export function PostAssistantA11yMode(): Promise<void> {
  const path = "/assistant/a11y_mode";
  return request({ path, method: "POST" });
}

/**
 * @description Get Alarms and Timers
 */
export function GetAssistantAlarms(): Promise<void> {
  const path = "/assistant/alarms";
  return request({ path, method: "GET" });
}

/**
 * @description Delete Alarms and Timers
 */
export function PostAssistantAlarmsDelete(): Promise<void> {
  const path = "/assistant/alarms/delete";
  return request({ path, method: "POST" });
}

/**
 * @description Alarm Volume
 */
export function PostAssistantAlarmsVolume(): Promise<void> {
  const path = "/assistant/alarms/volume";
  return request({ path, method: "POST" });
}

/**
 * @description Check Ready Status
 */
export function PostAssistantCheckReadyStatus(): Promise<void> {
  const path = "/assistant/check_ready_status";
  return request({ path, method: "POST" });
}

/**
 * @description Do Not Disturb
 */
export function PostAssistantNotifications(
  payload: PostAssistantNotificationsParameters
): Promise<void> {
  const path = "/assistant/notifications";
  return request({ path, payload, payloadIn: "header", method: "POST" });
}

/**
 * @description Night Mode settings
 */
export function PostAssistantSetNightModeParams(): Promise<void> {
  const path = "/assistant/set_night_mode_params";
  return request({ path, method: "POST" });
}

/**
 * @description Forget paired device
 */
export function PostBluetoothBond(): Promise<void> {
  const path = "/bluetooth/bond";
  return request({ path, method: "POST" });
}

/**
 * @description Pair with Speaker
 */
export function PostBluetoothConnect(): Promise<void> {
  const path = "/bluetooth/connect";
  return request({ path, method: "POST" });
}

/**
 * @description Change Discoverability
 */
export function PostBluetoothDiscovery(): Promise<void> {
  const path = "/bluetooth/discovery";
  return request({ path, method: "POST" });
}

/**
 * @description Get Paired Devices
 */
export function GetBluetoothGetBonded(): Promise<void> {
  const path = "/bluetooth/get_bonded";
  return request({ path, method: "GET" });
}

/**
 * @description Scan for devices
 */
export function PostBluetoothScan(): Promise<void> {
  const path = "/bluetooth/scan";
  return request({ path, method: "POST" });
}

/**
 * @description Get Scan Results
 */
export function GetBluetoothScanResults(): Promise<void> {
  const path = "/bluetooth/scan_results";
  return request({ path, method: "GET" });
}

/**
 * @description Status
 */
export function GetBluetoothStatus(): Promise<void> {
  const path = "/bluetooth/status";
  return request({ path, method: "GET" });
}

/**
 * @description Get Saved Networks
 */
export function GetConfiguredNetworks(): Promise<void> {
  const path = "/configured_networks";
  return request({ path, method: "GET" });
}

/**
 * @description Connect to Wi-Fi Network
 */
export function PostConnectWifi(): Promise<void> {
  const path = "/connect_wifi";
  return request({ path, method: "POST" });
}

/**
 * @description Eureka Info
 */
export function GetEurekaInfo(payload: GetEurekaInfoParameters): Promise<void> {
  const path = "/eureka_info";
  return request({ path, payload, payloadIn: "query", method: "GET" });
}

/**
 * @description Forget Wi-Fi Network
 */
export function PostForgetWifi(): Promise<void> {
  const path = "/forget_wifi";
  return request({ path, method: "POST" });
}

/**
 * @description App Device ID
 */
export function PostGetAppDeviceId(): Promise<void> {
  const path = "/get_app_device_id";
  return request({ path, method: "POST" });
}

/**
 * @description Chromecast Icon
 */
export function GetIconPng(): Promise<void> {
  const path = "/icon.png";
  return request({ path, method: "GET" });
}

/**
 * @description Offer
 */
export function GetOffer(): Promise<void> {
  const path = "/offer";
  return request({ path, method: "GET" });
}

/**
 * @description Reboot and Factory Reset
 */
export function PostReboot(): Promise<void> {
  const path = "/reboot";
  return request({ path, method: "POST" });
}

/**
 * @description Get Wi-Fi Scan Results
 */
export function GetScanResults(): Promise<void> {
  const path = "/scan_results";
  return request({ path, method: "GET" });
}

/**
 * @description Scan for Networks
 */
export function PostScanWifi(): Promise<void> {
  const path = "/scan_wifi";
  return request({ path, method: "POST" });
}

/**
 * @description Set Eureka Info
 */
export function PostSetEurekaInfo(): Promise<void> {
  const path = "/set_eureka_info";
  return request({ path, method: "POST" });
}

/**
 * @description Locales
 */
export function GetSupportedLocales(): Promise<void> {
  const path = "/supported_locales";
  return request({ path, method: "GET" });
}

/**
 * @description Timezones
 */
export function GetSupportedTimezones(): Promise<void> {
  const path = "/supported_timezones";
  return request({ path, method: "GET" });
}

/**
 * @description Test Internet Download Speed
 */
export function PostTestInternetDownloadSpeed(): Promise<void> {
  const path = "/test_internet_download_speed";
  return request({ path, method: "POST" });
}

/**
 * @description Set Equalizer Values
 */
export function PostUserEqSetEqualizer(): Promise<void> {
  const path = "/user_eq/set_equalizer";
  return request({ path, method: "POST" });
}

export type PostAssistantNotificationsParameters = {
  /** in header */
  "Content-Type": string;
};

export type GetEurekaInfoParameters = {
  /** in query */
  params: string;
  /** in query */
  options: string;
  /** in query */
  nonce: number;
};
