"use strict";
// socket example
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
const conversation_1 = require("../services/conversation");
const ConvService = new conversation_1.ConversationService();
const chatSocket = (socket) => {
    // opening conversation
    socket.on('open-chat', (arg) => __awaiter(void 0, void 0, void 0, function* () {
        const foundConversation = yield ConvService.findConversationForChat(arg.productId, arg.userId, arg.sellerId);
        if (!foundConversation) {
            const newConversation = yield ConvService.createConversationForChat(arg.productId, arg.userId, arg.sellerId);
            socket.join(newConversation === null || newConversation === void 0 ? void 0 : newConversation._id);
            socket.emit('returned-conversation', newConversation);
        }
        else {
            socket.join(foundConversation === null || foundConversation === void 0 ? void 0 : foundConversation._id);
            socket.emit('returned-conversation', foundConversation);
        }
    }));
    // sending the message
    socket.on('chatting', (arg) => {
        socket.to(arg.conversationId).broadcast.emit(arg.message);
    });
};
exports.default = chatSocket;
