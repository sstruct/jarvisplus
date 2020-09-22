"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametersArrayToSchemaConverter = void 0;
var swaggerTypes_1 = require("./swaggerTypes");
var ParametersArrayToSchemaConverter = /** @class */ (function () {
    function ParametersArrayToSchemaConverter() {
    }
    ParametersArrayToSchemaConverter.prototype.convertToObject = function (parameters) {
        if (!Array.isArray(parameters)) {
            throw new Error("invalid argument");
        }
        if (parameters.length === 1) {
            var definition_1 = parameters[0];
            if (typeof definition_1.title === "string") {
                definition_1.required = Object.keys(definition_1.properties)
                    .filter(function (param) { var _a; return Boolean((_a = definition_1.properties[param]) === null || _a === void 0 ? void 0 : _a.required); })
                    .map(function (param) { return param; });
                definition_1.in = swaggerTypes_1.PARAMETER_TYPE_BODY;
                return definition_1;
            }
            if (definition_1.schema) {
                return definition_1;
            }
        }
        var schema = {
            type: "object",
            required: parameters
                .filter(function (param) { return Boolean(param.required); })
                .map(function (param) { return param.name; }),
            properties: {}
        };
        parameters.forEach(function (param) {
            if (typeof param.title === "string") {
                var properties = param.properties;
                for (var property in properties) {
                    properties[property]["in"] = swaggerTypes_1.PARAMETER_TYPE_BODY;
                }
                schema.properties = __assign(__assign({}, schema.properties), properties);
            }
            else {
                schema.properties[param.name] = param;
            }
        });
        return schema;
    };
    ParametersArrayToSchemaConverter.prototype.convertToUnion = function (parameters) {
        if (!Array.isArray(parameters)) {
            throw new Error("invalid argument");
        }
        return {
            allOf: parameters
        };
    };
    return ParametersArrayToSchemaConverter;
}());
exports.ParametersArrayToSchemaConverter = ParametersArrayToSchemaConverter;
