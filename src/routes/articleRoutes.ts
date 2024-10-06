import express, { Request, Response } from "express";
import { findFileWithURL, formatDate } from "../utils/functions";

const router = express.Router();

router.get("/:url", (req: Request, res: Response) => {
  const url = req.params.url;
  if (url) {
    const article = JSON.parse(findFileWithURL(url));
    article.createdAt =
      article.createdAt.split("T")[0] +
      " " +
      article.createdAt.split("T")[1].split(".")[0];
    article.updatedAt =
      article.updatedAt.split("T")[0] +
      " " +
      article.updatedAt.split("T")[1].split(".")[0];
    if (!article) {
      return res.status(404).render("404", { message: "Article not found!" });
    }

    console.log(article);
    res.render("article", { article });
  }
});

export default router;
