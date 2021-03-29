"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptConverter = exports.TYPESCRIPT_TYPE_EMPTY_OBJECT = exports.TYPESCRIPT_TYPE_ANY = exports.TYPESCRIPT_TYPE_VOID = exports.TYPESCRIPT_TYPE_UNDEFINED = void 0;
var Mustache = require("mustache");
var templates_1 = require("./templates");
var parameterArrayToSchemaConverter_1 = require("./parameterArrayToSchemaConverter");
var parametersJarFactory_1 = require("./parametersJarFactory");
var swaggerTypes_1 = require("./swaggerTypes");
var typescriptNameNormalizer_1 = require("./typescriptNameNormalizer");
var requestNameNormalizer_1 = require("./legacy/requestNameNormalizer");
exports.TYPESCRIPT_TYPE_UNDEFINED = "undefined";
exports.TYPESCRIPT_TYPE_VOID = "void";
exports.TYPESCRIPT_TYPE_ANY = "any";
exports.TYPESCRIPT_TYPE_EMPTY_OBJECT = "{}";
var PARAMETER_PATH_SUFFIX = "PathParameter";
var PARAMETERS_QUERY_SUFFIX = "QueryParameters";
var PARAMETERS_BODY_SUFFIX = "BodyParameters";
var PARAMETERS_FORM_DATA_SUFFIX = "FormDataParameters";
var PARAMETERS_HEADER_SUFFIX = "HeaderParameters";
var PARAMETERS_PAYLOAD_SUFFIX = "PayloadParameters";
function getSegmentsFromRef(ref) {
    return typeof ref === "string" ? ref.replace("#/definitions/", "") : "";
}
var TypescriptConverter = /** @class */ (function () {
    function TypescriptConverter(swagger, settings) {
        var _this = this;
        this.swagger = swagger;
        this.settings = settings;
        this.parametersJarFactory = new parametersJarFactory_1.ParametersJarFactory(this.swagger);
        this.parametersArrayToSchemaConverter = new parameterArrayToSchemaConverter_1.ParametersArrayToSchemaConverter();
        this.normalizer = new typescriptNameNormalizer_1.TypescriptNameNormalizer({
            customNormalizeRequestName: this.settings.legacy
                ? function (method, path) { return requestNameNormalizer_1.default(path, method); }
                : null,
        });
        this.requiredDefinitionAndResponses = new Set();
        this.filterByTags = function (_a) {
            var method = _a[0], operation = _a[1];
            if (Array.isArray(_this.settings.tags) &&
                _this.settings.tags.length > 0 &&
                Array.isArray(operation.tags) &&
                operation.tags.length > 0) {
                return _this.settings.tags.includes(operation.tags[0]);
            }
            return true;
        };
        this.settings = Object.assign({}, {
            backend: "",
            template: "superagent-request",
            mergeParam: false,
        }, settings || {});
    }
    TypescriptConverter.prototype.generateParameterTypesForOperation = function (path, method, operation) {
        var _this = this;
        if (this.filterByTags([method, operation]) === false)
            return "";
        var name = this.getNormalizer().normalizeRequestName(method, path);
        var _a = this.getParametersJarFactory().createFromOperation(operation), queryParams = _a.queryParams, bodyParams = _a.bodyParams, formDataParams = _a.formDataParams, headerParams = _a.headerParams, payloadParams = _a.payloadParams;
        var parameterTypes = [];
        var appendParameterTypes = function (params, suffix) {
            if (params.length > 0) {
                var schema = _this.getParametersArrayToSchemaConverter().convertToObject(params);
                parameterTypes.push(_this.generateType(name + suffix, schema));
            }
        };
        if (this.settings.mergeParam) {
            appendParameterTypes(payloadParams, PARAMETERS_PAYLOAD_SUFFIX);
        }
        else {
            appendParameterTypes(queryParams, PARAMETERS_QUERY_SUFFIX);
            appendParameterTypes(bodyParams, PARAMETERS_BODY_SUFFIX);
            appendParameterTypes(formDataParams, PARAMETERS_FORM_DATA_SUFFIX);
            appendParameterTypes(headerParams, PARAMETERS_HEADER_SUFFIX);
        }
        return parameterTypes.join("\n");
    };
    TypescriptConverter.prototype.generateOperation = function (path, method, operation) {
        var _this = this;
        var name = this.getNormalizer().normalizeRequestName(method, path);
        var _a = this.getParametersJarFactory().createFromOperation(operation), payloadParams = _a.payloadParams, pathParams = _a.pathParams, queryParams = _a.queryParams, bodyParams = _a.bodyParams, formDataParams = _a.formDataParams, headerParams = _a.headerParams;
        var output = "";
        var parameters = [];
        var payloadInType = [];
        var payloadIn = {};
        if (!this.settings.mergeParam) {
            parameters = pathParams.map(function (parameter) {
                return "" + parameter.name + PARAMETER_PATH_SUFFIX + ": " + _this.generateTypeValue(parameter);
            });
        }
        var args = {
        // [PARAMETER_TYPE_PATH]: true,
        };
        var appendParametersArgs = function (paramsType, params, paramsSuffix) {
            if (params.length > 0) {
                if (_this.settings.mergeParam) {
                    if (paramsType === swaggerTypes_1.PARAMETER_TYPE_PAYLOAD) {
                        parameters.push(paramsType + ": " + name + paramsSuffix);
                        args[paramsType] = true;
                    }
                    else {
                        payloadIn[paramsType] = params
                            .map(function (param) {
                            var _a;
                            if (typeof ((_a = param === null || param === void 0 ? void 0 : param.schema) === null || _a === void 0 ? void 0 : _a.$ref) === "string") {
                                var segments = getSegmentsFromRef(param.schema.$ref);
                                var referred = _this.swagger.definitions[segments];
                                if (!referred) {
                                    throw new Error("cannot find reference " + param.schema.$ref);
                                }
                                _this.requiredDefinitionAndResponses.add(segments);
                                return Object.keys(referred.properties);
                            }
                            return param.name;
                        })
                            .flat();
                        if (!payloadInType.includes(paramsType)) {
                            payloadInType.push(paramsType);
                        }
                    }
                }
                else {
                    parameters.push(paramsType + ": " + name + paramsSuffix);
                    args[paramsType] = true;
                }
            }
        };
        if (this.settings.mergeParam) {
            appendParametersArgs(swaggerTypes_1.PARAMETER_TYPE_PAYLOAD, payloadParams, PARAMETERS_PAYLOAD_SUFFIX);
        }
        appendParametersArgs(swaggerTypes_1.PARAMETER_TYPE_QUERY, queryParams, PARAMETERS_QUERY_SUFFIX);
        appendParametersArgs(swaggerTypes_1.PARAMETER_TYPE_BODY, bodyParams, PARAMETERS_BODY_SUFFIX);
        appendParametersArgs(swaggerTypes_1.PARAMETER_TYPE_FORM_DATA, formDataParams, PARAMETERS_FORM_DATA_SUFFIX);
        appendParametersArgs(swaggerTypes_1.PARAMETER_TYPE_HEADER, headerParams, PARAMETERS_HEADER_SUFFIX);
        var responseTypes = Object.entries(operation.responses || {})
            .map(function (_a) {
            var code = _a[0], response = _a[1];
            return _this.generateTypeValue(response);
        })
            .filter(function (value, index, self) {
            return self.indexOf(value) === index && value !== "any";
        })
            .join(" | ") || exports.TYPESCRIPT_TYPE_VOID;
        output += Mustache.render(templates_1.readerTemplate("singleMethod"), {
            // method summary
            summary: this.getNormalizer().normalizeSummary(operation.summary) || false,
            // method name
            name: name,
            // method parameters
            parameters: parameters.join(", "),
            payloadIn: Object.keys(payloadIn).length > 1
                ? JSON.stringify(payloadIn)
                : undefined,
            payloadInType: payloadInType.length === 1 ? payloadInType[0] : undefined,
            // request arguments(payload | query, body, formData)
            requestArgs: Object.keys(args).filter(function (arg) { return args[arg]; }),
            // define path keyword const/let
            definePath: pathParams.length > 0 ? "let" : "const",
            path: path,
            pathParams: pathParams,
            // decorate path params' name with curly braces
            pathParamName: function () {
                return "{" + this.name + "}";
            },
            method: method.toUpperCase(),
            responseTypes: responseTypes,
        });
        return output;
    };
    TypescriptConverter.prototype.generateType = function (name, definition) {
        return "export type " + this.getNormalizer().normalize(name) + " = " + (typeof definition.title === "string"
            ? this.getNormalizer().normalize(definition.title)
            : this.generateTypeValue(definition)) + "\n";
    };
    TypescriptConverter.prototype.generateDefinitionTypes = function (definitions) {
        var _this = this;
        // Collect referred definitions before generating
        definitions.forEach(function (_a) {
            var name = _a[0], definition = _a[1];
            _this.generateTypeValue(definition, { parentName: name });
        });
        return definitions
            .map(function (_a) {
            var name = _a[0], definition = _a[1];
            if (!_this.requiredDefinitionAndResponses.has(name))
                return "";
            return "export type " + _this.getNormalizer().normalize(name) + " = " + _this.generateTypeValue(definition, { parentName: name }) + "\n\n      " + _this.generateEnumForDefinitionType(name, definition) + "\n";
        })
            .join("\n");
    };
    TypescriptConverter.prototype.generateEnumForDefinitionType = function (name, definition) {
        var _this = this;
        var hasProperties = definition.properties && Object.keys(definition.properties).length > 0;
        if (hasProperties) {
            return Object.entries(definition.properties)
                .map(function (_a) {
                var typeName = _a[0], def = _a[1];
                if (Array.isArray(def.enum)) {
                    var normalizedName = _this.getNormalizer().normalize(name + "/" + typeName);
                    return "export enum " + normalizedName + " {\n           " + def.enum.map(function (ele) { return "\"" + ele + "\" = \"" + ele + "\""; }).join(",") + "\n        }";
                }
                return "";
            })
                .join("\n");
        }
        return "";
    };
    TypescriptConverter.prototype.generateTypeValue = function (definition, options) {
        var _this = this;
        if (definition.schema) {
            return this.generateTypeValue(definition.schema);
        }
        if (definition.$ref) {
            var segments = getSegmentsFromRef(definition.$ref);
            this.requiredDefinitionAndResponses.add(segments);
            return this.getNormalizer().normalize(segments);
        }
        if (Array.isArray(definition.enum)) {
            if ((options === null || options === void 0 ? void 0 : options.parentName) && (options === null || options === void 0 ? void 0 : options.name)) {
                return this.getNormalizer().normalize(options.parentName + "/" + options.name);
            }
        }
        if (Array.isArray(definition.allOf) && definition.allOf.length > 0) {
            return (definition.allOf
                .map(function (schema) { return _this.generateTypeValue(schema); })
                .join(" & ") || exports.TYPESCRIPT_TYPE_VOID);
        }
        switch (definition.type) {
            case swaggerTypes_1.DEFINITION_TYPE_STRING: {
                return definition.enum
                    ? definition.enum.map(function (ele) { return "\"" + ele + "\""; }).join("|")
                    : definition.type;
            }
            case swaggerTypes_1.DEFINITION_TYPE_BOOLEAN: {
                return definition.type;
            }
            case swaggerTypes_1.DEFINITION_TYPE_NUMBER:
            case swaggerTypes_1.DEFINITION_TYPE_INTEGER: {
                return swaggerTypes_1.DEFINITION_TYPE_NUMBER;
            }
            case swaggerTypes_1.DEFINITION_TYPE_ARRAY: {
                return "Array<" + this.generateTypeValue(definition.items) + ">";
            }
        }
        var getPropertyDescription = function (def) {
            var output = "";
            var description = def.description;
            var defIn = def["in"];
            if (description) {
                output += "/** " + description + " " + (defIn ? "in " + defIn : "") + " */\n";
            }
            else if (defIn) {
                output += "/** in " + defIn + " */\n";
            }
            return output;
        };
        if (definition.type === swaggerTypes_1.DEFINITION_TYPE_OBJECT ||
            (!definition.type &&
                (definition.allOf ||
                    definition.properties ||
                    definition.additionalProperties))) {
            var output = "";
            var hasProperties = definition.properties && Object.keys(definition.properties).length > 0;
            var schemaProperties_1 = {};
            if (hasProperties) {
                output += "{\n";
                output += Object.entries(definition.properties)
                    .map(function (_a) {
                    var _b;
                    var name = _a[0], def = _a[1];
                    var output = "";
                    // @ts-expect-error add proper type
                    if (typeof ((_b = def === null || def === void 0 ? void 0 : def.schema) === null || _b === void 0 ? void 0 : _b.$ref) === "string") {
                        schemaProperties_1[name] = def;
                    }
                    else {
                        var isRequired = (definition.required || []).indexOf(name);
                        output += getPropertyDescription(def);
                        output += "'" + name + "'" + (isRequired ? "?" : "") + ": " + _this.generateTypeValue(def, {
                            parentName: options === null || options === void 0 ? void 0 : options.parentName,
                            name: name,
                        });
                    }
                    return output;
                })
                    .join("\n");
                output += "\n}";
            }
            var isEmpty_1 = output.replace(/\n/g, "") === "{}";
            if (isEmpty_1) {
                output = "";
            }
            output += Object.entries(schemaProperties_1)
                .map(function (_a) {
                var name = _a[0], def = _a[1];
                // @ts-expect-error add proper type
                var segments = getSegmentsFromRef(def.schema.$ref);
                var referred = _this.swagger.definitions[segments];
                if (!referred) {
                    // @ts-expect-error add proper type
                    throw new Error("cannot find reference " + def.schema.$ref);
                }
                _this.requiredDefinitionAndResponses.add(segments);
                var seg = "" + (isEmpty_1 ? "" : "& ") + _this.getNormalizer().normalize(segments) + " " + getPropertyDescription(def);
                isEmpty_1 = false;
                return seg;
            })
                .join("");
            if (definition.additionalProperties &&
                typeof definition.additionalProperties === "object") {
                if (hasProperties) {
                    output += " & ";
                }
                output +=
                    "{ [key: string]: " +
                        this.generateTypeValue(definition.additionalProperties) +
                        " }";
            }
            if (output.trim().length === 0) {
                return exports.TYPESCRIPT_TYPE_EMPTY_OBJECT;
            }
            return output;
        }
        return exports.TYPESCRIPT_TYPE_ANY;
    };
    TypescriptConverter.prototype.generateClient = function (name) {
        var _this = this;
        var output = "";
        output += Mustache.render(templates_1.readerTemplate("methodModule"), {
            RequestFactoryName: this.settings.template,
            customAgent: this.settings.customAgent,
            // base path
            baseUrl: this.settings.backend,
        });
        output += "\n";
        output += Object.entries(this.swagger.paths)
            .map(function (_a) {
            var path = _a[0], methods = _a[1];
            return Object.entries(methods)
                .filter(_this.filterByTags)
                .map(function (_a) {
                var method = _a[0], operation = _a[1];
                return _this.generateOperation(path, method, operation);
            })
                .join("\n");
        })
            .join("\n");
        return output;
    };
    TypescriptConverter.prototype.getNormalizer = function () {
        return this.normalizer;
    };
    TypescriptConverter.prototype.getParametersJarFactory = function () {
        return this.parametersJarFactory;
    };
    TypescriptConverter.prototype.getParametersArrayToSchemaConverter = function () {
        return this.parametersArrayToSchemaConverter;
    };
    return TypescriptConverter;
}());
exports.TypescriptConverter = TypescriptConverter;
