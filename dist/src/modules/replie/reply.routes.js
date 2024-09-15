"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyRouter = void 0;
const express_1 = require("express");
const verifiyToken_1 = require("../../middleware/verifiyToken");
const replyController_1 = require("./replyController");
exports.replyRouter = (0, express_1.Router)();
exports.replyRouter
    .use(verifiyToken_1.verfifyToken)
    .route("/:id")
    .post(replyController_1.replyToComment)
    .patch(replyController_1.editReply)
    .delete(replyController_1.deleteReply);
