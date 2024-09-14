import { boolean } from "joi";
import { Schema, Types, model } from "mongoose";

const postSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  content: String,
  category: String,
  tags: [String],
  finished: {
    type: Boolean,
    default: true,
  },
  scheduled:{
    type:Date
  },
  comments: [{ type: Types.ObjectId, ref: "Comment" }],
});
export const Post = model("Post", postSchema);
