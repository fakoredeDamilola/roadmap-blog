import express, { Request, Response } from "express";
import path from "path";
import adminRoutes from "./src/routes/adminRoutes";
import articleRoutes from "./src/routes/articleRoutes";
import { getAllArticles } from "./src/utils/functions";

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/src/views"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  const articles = getAllArticles();
  res.render("index", { articles, admin: false });
});

app.use(express.static("src/public"));

app.use("/admin", adminRoutes);
app.use("/article", articleRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
