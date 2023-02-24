"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const UserModel_1 = require("@models/UserModel");
class userService {
    handle() {
        const user = new UserModel_1.UserModel();
        console.log(user);
    }
}
exports.userService = userService;
exports.default = userService;
