import { Types } from "mongoose";

export interface IComment {
  user: Types.ObjectId;
  content: string;
  createdAt: Date;
  comments: Types.ObjectId[];
  articleId: Types.ObjectId;
}
