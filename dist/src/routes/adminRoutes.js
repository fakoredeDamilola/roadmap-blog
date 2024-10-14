"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_service_1 = require("../services/admin.service");
const functions_1 = require("../utils/functions");
const router = express_1.default.Router();
router.get("/new-article", (req, res) => {
    res.render("new-article");
});
router.post("/newArticle", (req, res) => {
    console.log(req.body);
    const { title, author, body } = req.body;
    const response = (0, admin_service_1.createNewArticle)(title, author, body);
    if (response.status === true) {
        res.redirect("/");
    }
});
router.get("/", (req, res) => {
    const articles = (0, functions_1.getAllArticles)();
    res.render("index", { articles, admin: true });
});
router.get("/edit-article/:url", (req, res) => {
    const url = req.params.url;
    const article = JSON.parse((0, functions_1.findFileWithURL)(url));
    res.render("new-article", { article });
});
router.post("/edit-article/:url", (req, res) => {
    const url = req.params.url;
    const article = JSON.parse((0, functions_1.findFileWithURL)(url));
    const { title, author, body } = req.body;
    const updatedArticle = {
        ...article,
        title,
        author,
        body,
        updatedAt: new Date(),
    };
    const response = (0, admin_service_1.createNewArticle)(title, author, body);
    if (response.status === true) {
        res.redirect("/");
    }
});
exports.default = router;
