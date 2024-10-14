import express, { Request, Response } from "express";
import { ensureAuthenticated } from "../middleware/auth.middleware";
import { getAllArticles } from "../services/user.service";

const router = express.Router();

router.get("/profile", ensureAuthenticated, async (req, res) => {
  const articles = await getAllArticles((req.user as any)?._id);
  res.render("profile", { user: req.user, articles });
});

router.get("/", async (req: Request, res: Response) => {
  const articles = await getAllArticles();
  res.render("index", { articles, admin: false, user: req.user });
});

router.get("/logout", async (req: Request, res: Response, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid");
      res.redirect("/login");
    });
  });
  res.redirect("/login.html");
});

export default router;
