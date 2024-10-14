import mongoose, { Types, Schema } from "mongoose";

const commentSchema: Schema = new mongoose.Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  comments: [{ type: Types.ObjectId, ref: "Comment" }],
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
