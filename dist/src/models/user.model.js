"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    authId: { type: String, required: true },
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
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
