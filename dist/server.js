"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRoutes_1 = __importDefault(require("./src/routes/adminRoutes"));
const path_1 = __importDefault(require("path"));
const functions_1 = require("./src/utils/functions");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "/src/views"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    const articles = (0, functions_1.getAllArticles)();
    console.log({ articles });
    res.render("index", { articles });
});
app.use(express_1.default.static("src/public"));
app.use("/admin", adminRoutes_1.default);
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
