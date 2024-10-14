import { Types } from "mongoose";
import { IArticle } from "./IArticle";

export interface IUser {
  username: string;
  email: string;
  password?: string;
  authId?: string;
  signinMethod: string;
  articles: Types.DocumentArray<IArticle>;
  name: string;
  googleId?: string;
}
