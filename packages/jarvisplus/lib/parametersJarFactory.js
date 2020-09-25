"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametersJarFactory = void 0;
var swaggerTypes_1 = require("./swaggerTypes");
var ParametersJarFactory = /** @class */ (function () {
    function ParametersJarFactory(swagger) {
        this.swagger = swagger;
    }
    ParametersJarFactory.prototype.createFromOperation = function (operation) {
        return {
            payloadParams: this.getOperationParameters(operation),
            pathParams: this.getOperationParametersByType(operation, swaggerTypes_1.PARAMETER_TYPE_PATH),
            queryParams: this.getOperationParametersByType(operation, swaggerTypes_1.PARAMETER_TYPE_QUERY),
            bodyParams: this.getOperationParametersByType(operation, swaggerTypes_1.PARAMETER_TYPE_BODY),
            formDataParams: this.getOperationParametersByType(operation, swaggerTypes_1.PARAMETER_TYPE_FORM_DATA),
            headerParams: this.getOperationParametersByType(operation, swaggerTypes_1.PARAMETER_TYPE_HEADER),
        };
    };
    ParametersJarFactory.prototype.getOperationParameters = function (operation) {
        var parameters = this.mapParameters(operation);
        var authorization = this.mapAuthorization(operation);
        return [].concat(parameters).concat(authorization);
    };
    ParametersJarFactory.prototype.getOperationParametersByType = function (operation, type) {
        var parameters = this.mapParameters(operation);
        var authorization = this.mapAuthorization(operation);
        return []
            .concat(parameters)
            .concat(authorization)
            .filter(function (parameter) { return parameter && parameter.in === type; });
    };
    ParametersJarFactory.prototype.mapParameters = function (operation) {
        var _this = this;
        return (operation.parameters || []).map(function (parameter) {
            var _a;
            if (typeof ((_a = parameter === null || parameter === void 0 ? void 0 : parameter.schema) === null || _a === void 0 ? void 0 : _a.$ref) === "string") {
                var segments = parameter.schema.$ref.replace("#/definitions/", "");
                var referred = _this.swagger.definitions[segments];
                if (!referred) {
                    throw new Error("cannot find reference " + parameter.schema.$ref);
                }
                referred["in"] = parameter.in;
                return referred;
            }
            return parameter;
        });
    };
    ParametersJarFactory.prototype.mapAuthorization = function (operation) {
        var _this = this;
        return (operation.security || [])
            .reduce(function (prev, current) {
            return prev.concat(Object.keys(current));
        }, [])
            .map(function (name) {
            return _this.swagger.securityDefinitions[name];
        });
    };
    return ParametersJarFactory;
}());
exports.ParametersJarFactory = ParametersJarFactory;
