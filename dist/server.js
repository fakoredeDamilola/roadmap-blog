"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
require("./src/config/passport-config");
const adminRoutes_1 = __importDefault(require("./src/routes/adminRoutes"));
const authRoutes_1 = __importDefault(require("./src/routes/authRoutes"));
const articleRoutes_1 = __importDefault(require("./src/routes/articleRoutes"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const functions_1 = require("./src/utils/functions");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "/src/views"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    const articles = (0, functions_1.getAllArticles)();
    res.render("index", { articles, admin: false });
});
app.use(express_1.default.static("src/public"));
app.use("/admin", adminRoutes_1.default);
app.use("/article", articleRoutes_1.default);
app.use("/auth", authRoutes_1.default);
app.use(routes_1.default);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
