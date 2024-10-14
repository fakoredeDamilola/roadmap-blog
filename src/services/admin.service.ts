import { Types } from "mongoose";
import { IArticle } from "../interfaces/IArticle";
import { IUser } from "../interfaces/IUser";
import Article from "../models/article.model";
import User from "../models/user.model";
import { generateRandomString } from "../utils/functions";
import { INewArticle } from "../interfaces/INewArticle";

const createNewArticle = async (articleParams: INewArticle, userId: string) => {
  const { title, description, content } = articleParams;
  if (title && description && content) {
    let articleSlug = articleParams.slug
      ? articleParams.slug.split(" ").join("_")
      : `title.split(" ").join("_")_${generateRandomString(5)}`;
    const article: Omit<IArticle, "_id"> = {
      title,
      description,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: [],
      tags: [],
      comments: [],
      slug: articleSlug,
      author: new Types.ObjectId(userId),
    };
    const newArticle = await Article.create(article);
    const response: IArticle = await newArticle.save();
    if (response && response._id) {
      const user = (await User.findById(userId)) as IUser;
      if (user) {
        user.articles.push(response._id);
        await (user as any).save();
      }
      if (response) {
        return { status: true, message: "success", articleSlug };
      } else {
        return { status: false, message: "error" };
      }
    }
  } else {
    console.log("error");
    return { status: false, message: "error" };
  }
};

const updateNewArticle = async (articleParams: INewArticle, slug?: string) => {
  try {
    if (slug) {
      const { title, description, content } = articleParams;
      const article = await Article.findOne({ slug });
      if (article) {
        article.title = title;
        article.description = description;
        article.content = content;
        article.updatedAt = new Date();
        await article.save();
        return { status: true, article };
      } else {
        return { status: false, article: null };
      }
    }
  } catch (e) {
    return { status: false, article: null };
  }
};

const getArticleToUpdate = async (slug: string) => {
  const article = await Article.findOne({ slug });
  if (article) {
    const articleData = {
      ...article.toObject(),
      slug: article.slug.split("_").join(" "),
    };
    return { status: true, article: articleData };
  } else {
    return { status: false, article: null };
  }
};

const deleteArticle = async (slug?: string) => {
  try {
    const article = await Article.findOneAndDelete({ slug });
    if (article) {
      return { status: true, deleted: true };
    } else {
      return { status: false, deleted: false };
    }
  } catch (e) {
    return { status: false, deleted: false };
  }
};

export {
  createNewArticle,
  getArticleToUpdate,
  updateNewArticle,
  deleteArticle,
};
