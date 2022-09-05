"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_1 = require("../services/product");
const ProductService = new product_1.ProductServices();
class ProductController {
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield ProductService.getProducts();
            res.status(200).json({
                status: 'success',
                data: products,
            });
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield ProductService.getProduct(req.params.id);
            res.status(200).json({
                status: 'success',
                data: product,
            });
        });
    }
    removeProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield ProductService.deleteProduct(req.params.id);
            res.status(200).json({
                status: 'success',
                data: product,
            });
        });
    }
    createProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productCreated = yield ProductService.createProduct(req.body.name, req.body.image, req.body.user);
            res.status(201).json({
                status: 'success',
                data: productCreated,
            });
        });
    }
}
exports.ProductController = ProductController;
