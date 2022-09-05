"use strict";
// router example
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conversation_1 = require("../controllers/conversation");
const ConvController = new conversation_1.ConversationController();
const router = (0, express_1.Router)();
router.route('/').get(ConvController.getConversations);
exports.default = router;
