import mongoose, { Schema, Types } from "mongoose";
import { IArticle } from "../interfaces/IArticle";

const articleSchema: Schema = new Schema<IArticle>({
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  tags: [{ type: String }],
  likes: [{ type: Types.ObjectId, ref: "User" }],
  comments: [
    {
      type: Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Article = mongoose.model<IArticle>("Article", articleSchema);

export default Article;
