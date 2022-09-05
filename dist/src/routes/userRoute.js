"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const User = new user_1.UserController();
const router = (0, express_1.Router)();
router.route('/signin').post(User.getUser);
router.route('/register').post(User.createUser);
exports.default = router;
