"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserServices {
    getUser(username) {
        return user_1.default.find({ username });
    }
    createUser(username) {
        return user_1.default.create({ username });
    }
}
exports.UserServices = UserServices;
