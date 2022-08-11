/* eslint-disable */

import { default as requestFactory } from "@terminus/jarvisplus-runtime/lib/superagent-request";

const request = requestFactory("", {});

/**
 * @description Get quotes for all symbols
 */
export function GetQuotes(): Promise<void> {
  const path = "/quotes";
  return request({ path, method: "GET" });
}

/**
 * @description Get a list of symbols for which we provide real-time quotes
 */
export function GetSymbols(): Promise<Array<string>> {
  const path = "/symbols";
  return request({ path, method: "GET" });
}
