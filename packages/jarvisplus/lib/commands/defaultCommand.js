"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCommand = void 0;
var typescriptClientGenerator_1 = require("../typescriptClientGenerator");
var typescriptConverter_1 = require("../typescriptConverter");
exports.defaultCommand = function (swagger, options) {
    var generator = new typescriptClientGenerator_1.TypescriptClientGenerator(swagger, new typescriptConverter_1.TypescriptConverter(swagger, options));
    return generator.generateSingleFile(options.name);
};
