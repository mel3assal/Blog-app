"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
    },
    edited: {
        type: Boolean,
        default: false,
    },
    content: String,
    replies: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "Reply",
        },
    ],
});
exports.Comment = (0, mongoose_1.model)("Post", postSchema);
