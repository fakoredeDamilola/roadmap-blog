"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_service_1 = require("../services/admin.service");
const router = express_1.default.Router();
router.post("/newArticle", (req, res) => {
    console.log(req.body);
    const { title, author, body } = req.body;
    const response = (0, admin_service_1.createNewArticle)(title, author, body);
    if (response.status === true) {
        res.redirect("/");
    }
});
exports.default = router;
