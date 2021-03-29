"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptClientGenerator = void 0;
var TypescriptClientGenerator = /** @class */ (function () {
    function TypescriptClientGenerator(swagger, converter) {
        this.swagger = swagger;
        this.converter = converter;
    }
    TypescriptClientGenerator.prototype.generateSingleFile = function (clientName) {
        return [
            this.generateClient(clientName),
            this.generateParameterTypesForOperations(),
            this.generateModels(),
        ].join("\n");
    };
    TypescriptClientGenerator.prototype.generateModels = function () {
        return this.converter.generateDefinitionTypes([]
            .concat(Object.entries(this.swagger.definitions || {}))
            .concat(Object.entries(this.swagger.responses || {})));
    };
    TypescriptClientGenerator.prototype.generateParameterTypesForOperations = function () {
        var _this = this;
        return Object.entries(this.swagger.paths)
            .map(function (_a) {
            var path = _a[0], methods = _a[1];
            return Object.entries(methods)
                .map(function (_a) {
                var method = _a[0], operation = _a[1];
                return _this.converter.generateParameterTypesForOperation(path, method, operation);
            })
                .join("\n");
        })
            .join("\n");
    };
    TypescriptClientGenerator.prototype.generateClient = function (clientName) {
        return this.converter.generateClient(clientName);
    };
    return TypescriptClientGenerator;
}());
exports.TypescriptClientGenerator = TypescriptClientGenerator;
