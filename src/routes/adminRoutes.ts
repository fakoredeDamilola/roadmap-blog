import express, { Request, Response } from "express";
import { createNewArticle } from "../services/admin.service";
import { findFileWithURL, getAllArticles } from "../utils/functions";

const router = express.Router();

router.get("/new-article", (req: Request, res: Response) => {
  res.render("new-article");
});

router.post("/newArticle", (req: Request, res: Response) => {
  console.log(req.body);
  const { title, author, body } = req.body;
  const response = createNewArticle(title, author, body);
  if (response.status === true) {
    res.redirect("/");
  }
});

router.get("/", (req: Request, res: Response) => {
  const articles = getAllArticles();
  res.render("index", { articles, admin: true });
});

router.get("/edit-article/:url", (req: Request, res: Response) => {
  const url = req.params.url;
  const article = JSON.parse(findFileWithURL(url));
  res.render("new-article", { article });
});

router.post("/edit-article/:url", (req: Request, res: Response) => {
  const url = req.params.url;
  const article = JSON.parse(findFileWithURL(url));
  const { title, author, body } = req.body;
  const updatedArticle = {
    ...article,
    title,
    author,
    body,
    updatedAt: new Date(),
  };
  const response = createNewArticle(title, author, body);
  if (response.status === true) {
    res.redirect("/");
  }
});

export default router;
