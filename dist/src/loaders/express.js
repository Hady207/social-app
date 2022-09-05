"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expressLoader = ({ app }) => {
    // Body parser, reading data from body into req.body
    app.use((0, express_1.json)({ limit: '10kb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '10kb' }));
    // adding routes as middleware here
    // app.use('/api/v1/products', productRoute);
    // app.use('/api/v1/conversation', conversationRoute);
    // app.use('/api/v1/user', userRoute);
    return app;
};
exports.default = expressLoader;
