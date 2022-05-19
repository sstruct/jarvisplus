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
