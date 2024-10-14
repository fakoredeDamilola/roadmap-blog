import { Types } from "mongoose";
import { IComment } from "./IComment";

export interface IArticle {
  _id?: Types.ObjectId;
  title: string;
  content: string;
  tags: string[];
  likes: Types.ObjectId[];
  description: string;
  comments: IComment[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  author: Types.ObjectId;
}
