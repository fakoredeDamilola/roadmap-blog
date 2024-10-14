"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createANewUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const createANewUser = async (profile, signinMethod, accessToken, refreshToken) => {
    const user = await user_model_1.default.findOne({ authId: profile.id });
    if (user) {
        if (accessToken) {
            user.accessToken = accessToken;
            if (refreshToken) {
                user.refreshToken = refreshToken || user.refreshToken;
            }
            await user.save();
        }
        return { user, message: "user already exists", status: 400 };
    }
    else {
        const newUser = new user_model_1.default({
            email: profile.emails[0].value,
            authId: profile.id,
            name: profile.displayName,
            signinMethod,
        });
        await newUser.save();
        return { user: newUser, message: "user created", status: 201 };
    }
};
exports.createANewUser = createANewUser;
