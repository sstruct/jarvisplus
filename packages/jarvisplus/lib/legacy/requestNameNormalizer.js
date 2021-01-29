"use strict";
/**
 * legacy name normalizer, copied from:
 * https://terminus-org.app.terminus.io/workBench/projects/190/apps/5232/repo/tree/master/lib/v2/utils/index.js
 * a.k.a https://terminus-org.app.terminus.io/wb/T-Project/Jarvis -> lib/v2/utils/index.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionName = void 0;
var toUpperCaseFirstChar = function (k) {
    if (!k || k.length === 0) {
        return "";
    }
    return k.substr(0, 1).toUpperCase() + k.substr(1, k.length - 1);
};
exports.getFunctionName = function (url, mt, alias) {
    if (alias === void 0) { alias = ""; }
    var method;
    var result = [];
    switch (mt.toUpperCase()) {
        case "GET":
            method = "get";
            break;
        case "POST":
            method = "create";
            break;
        case "PUT":
            method = "update";
            break;
        case "PATCH":
            method = "patch";
            break;
        case "DELETE":
            method = "delete";
            break;
        default:
            method = mt.toLowerCase();
            break;
    }
    if (alias) {
        if (method === "") {
            method += alias.replace(/-|_/g, "");
        }
        else {
            method += toUpperCaseFirstChar(alias.replace(/-|_/g, ""));
        }
        result.push(method);
    }
    else if (method) {
        result.push(method);
    }
    var urlSplits = url
        .replace(/:/g, "")
        .replace(/^(\/|)api/, "")
        .split("/");
    urlSplits.forEach(function (item, index) {
        var match = item.match(/[{|<][\s\S]*[}|>]/);
        if (match && match.length > 0) {
            var k = item.replace(/[{|<|}|>]/g, "");
            if (k === "*") {
                k = "Path";
            }
            if (method === "" && result.length === 0) {
                result.push(k);
            }
            else {
                result.push(toUpperCaseFirstChar(k));
            }
        }
        else if (item.indexOf("_") > -1) {
            result.push(item);
        }
        else if (item.indexOf("-") > -1) {
            result.push(item.replace(/-/g, "_"));
        }
        else if (item.includes("*")) {
            result.push("Path" + index);
        }
        else {
            switch (item) {
                case "":
                    break;
                default:
                    if (method === "" && result.length === 0) {
                        result.push(item);
                    }
                    else {
                        result.push(toUpperCaseFirstChar(item));
                    }
            }
        }
    });
    return result.join("").replace(/\.|«|»/g, "");
};
exports.default = exports.getFunctionName;
