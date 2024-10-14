import express, { Request, Response } from "express";
import {
  createNewArticle,
  deleteArticle,
  getArticleToUpdate,
  updateNewArticle,
} from "../services/admin.service";
import { ensureAuthenticated } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/new-article", (req: Request, res: Response) => {
  res.render("new-article", { article: {}, user: req.user, edit: false });
});

router.post(
  "/new-article",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    if (req.user) {
      const response = await createNewArticle(req.body, (req.user as any)._id);

      if (response?.status === true) {
        res.redirect("/");
      }
    }
  }
);

router.get("/edit-article/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;
  if (slug) {
    const article = await getArticleToUpdate(slug);
    if (article.status) {
      res.render("new-article", {
        article: article.article,
        edit: true,
        user: req.user,
        slug,
      });
    } else {
      res.render("error", { error: `Article with slug ${slug} not found` });
    }
  }
});

router.post(
  "/edit-article/:slug",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    const response = await updateNewArticle(req.body, req.params.slug);
    if (response?.status === true) {
      res.redirect("/");
    }
  }
);

router.delete("/delete-article/:slug", async (req: Request, res: Response) => {
  const response = await deleteArticle(req.params.slug);
  if (response.status) {
    res.redirect("/profile");
  }
});

export default router;
