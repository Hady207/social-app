"use strict";
// Services example
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationService = void 0;
const conversation_1 = __importDefault(require("../models/conversation"));
class ConversationService {
    findAllConversation() {
        return conversation_1.default.find({});
    }
    findConversation(id) {
        return conversation_1.default.findOne({ id });
    }
    findConversationForChat(productId, userId, sellerId) {
        return conversation_1.default.findOne({
            product: productId,
            buyer: userId,
            seller: sellerId,
        });
    }
    createConversationForChat(productId, userId, sellerId) {
        return conversation_1.default.create({
            product: productId,
            buyer: userId,
            seller: sellerId,
        });
    }
}
exports.ConversationService = ConversationService;
