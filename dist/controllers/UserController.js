"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const UserModel_1 = require("@models/UserModel");
class userController {
    handle() {
        const user = new UserModel_1.UserModel();
        console.log(user);
    }
}
exports.userController = userController;
exports.default = userController;
