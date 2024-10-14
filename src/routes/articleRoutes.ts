import express, { Request, Response } from "express";
import {
  createNewCommentForArticle,
  getArticleBySlug,
} from "../services/article.service";
import { ensureAuthenticated } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;
  try {
    if (slug) {
      const response = await getArticleBySlug(slug);
      if (response?.response === false) {
      } else {
        const { article } = response;
        res.render("article", { article, user: req.user });
      }
    }
  } catch (e) {
    res.render("error", { message: "Article not found", user: req?.user });
  }
});

router.post(
  "/comment/:articleId",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    const { content } = req.body;
    const response = await createNewCommentForArticle(
      (req?.user as any)._id,
      content,
      req?.params?.articleId,
      req.body?.commentId
    );
    if (response.status) {
      res.redirect(`/article/${response?.response?.slug}`);
    }
  }
);

export default router;
