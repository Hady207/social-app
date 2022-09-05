"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_1 = __importDefault(require("../models/product"));
class ProductServices {
    getProducts() {
        return product_1.default.find({}).populate('user');
    }
    getProduct(id) {
        return product_1.default.find({ _id: id });
    }
    createProduct(name, image, user) {
        return product_1.default.create({ name, image, user });
    }
    deleteProduct(id) {
        return product_1.default.deleteOne({ _id: id });
    }
}
exports.ProductServices = ProductServices;
