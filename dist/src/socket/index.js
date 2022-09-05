"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const chatSocket_1 = __importDefault(require("./chatSocket"));
const socketIo = (server) => {
    const io = new socket_io_1.Server(server);
    io.on('connection', (socket) => {
        console.log('client is connected now');
        (0, chatSocket_1.default)(socket);
    });
    return io;
};
exports.default = socketIo;
