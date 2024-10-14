import Article from "../models/article.model";
import { IComment } from "../interfaces/IComment";
import { Types } from "mongoose";
import Comment from "../models/comment.model";
import { IArticle } from "../interfaces/IArticle";
import { formatDate } from "../utils/functions";

export async function getArticleBySlug(slug: string) {
  if (slug) {
    const article = await Article.findOne({
      slug,
    })
      .populate("author", "name email")
      .populate({
        path: "comments",
        populate: {
          path: "user",
          // select: "name",
        },
      });

    if (!article) {
      return { article: null, response: false };
    } else {
      const formattedArticle = {
        ...article.toObject(),
        createdAt: formatDate(article.createdAt), // Format article's createdAt
        updatedAt: formatDate(article.updatedAt), // Format article's updatedAt
        comments: article.toObject().comments.map((comment: any) => {
          return {
            ...comment,
            createdAt: formatDate(comment.createdAt), // Format comment's createdAt
          };
        }),
      };
      return { article: formattedArticle, response: true };
    }
  } else {
    return { article: null, response: false };
  }
}

export async function createNewCommentForArticle(
  userId: string,
  content: string,
  articleId?: string,
  commentId?: string
) {
  const newComment: IComment = {
    content,
    user: new Types.ObjectId(userId),
    articleId: new Types.ObjectId(articleId),
    createdAt: new Date(),
    comments: [],
  };
  if (commentId) {
    newComment?.comments.push(new Types.ObjectId(commentId));
  }
  const newCommentInstance = await Comment.create(newComment);
  const response = await newCommentInstance.save();
  if (response) {
    const article = (await Article.findById(articleId)) as IArticle;
    if (article) {
      article.comments.push((response as any)._id);
      await (article as any).save();
    }
    if (commentId) {
      const comment = (await Comment.findById(commentId)) as IComment;
      if (comment) {
        comment.comments.push((response as any)._id);
        await (comment as any).save();
      }
    }
    return { status: true, response: article };
  } else {
    return { status: false, response: null };
  }
}
