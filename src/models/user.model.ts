import mongoose, { Schema, Types } from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  email: { type: String, required: true, unique: true },
  username: { type: String },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  name: { type: String, required: true },
  authId: { type: String, required: true },
  googleId: { type: String, sparse: true },
  createdAt: { type: Date, default: Date.now },
  description: { type: String },
  signinMethod: {
    type: String,
    required: true,
    default: "email",
    enum: ["email", "google"],
  },
  passwordHash: String,
  accessToken: String,
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);

export default User;
