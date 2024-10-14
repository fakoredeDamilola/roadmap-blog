"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("../utils/functions");
const router = express_1.default.Router();
router.get("/:url", (req, res) => {
    const url = req.params.url;
    if (url) {
        const article = JSON.parse((0, functions_1.findFileWithURL)(url));
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
exports.default = router;
