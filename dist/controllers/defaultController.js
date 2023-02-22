"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultController = void 0;
const defaultModel_1 = require("@models/defaultModel");
class defaultController {
    handle() {
        const user = new defaultModel_1.DefaultModel();
    }
}
exports.defaultController = defaultController;
exports.default = defaultController;
