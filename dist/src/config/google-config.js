"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const auth_service_1 = require("../services/auth.service");
const constants_1 = require("../utils/constants");
const GoogleStrat = passport_google_oauth20_1.default.Strategy;
console.log(process.env.GOOGLE_CLIENT_ID);
const GoogleStrategy = new GoogleStrat({
    callbackURL: "/auth/google/redirect",
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}, async function (accessToken, refreshToken, profile, done) {
    try {
        console.log({ accessToken, refreshToken, profile });
        const userDetails = await (0, auth_service_1.createANewUser)(profile, constants_1.signInMethods.google);
        console.log({ userDetails });
        done(null, userDetails.user);
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = GoogleStrategy;
