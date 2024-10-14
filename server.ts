import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import "./src/config/passport-config";
import adminRoutes from "./src/routes/adminRoutes";
import authRoutes from "./src/routes/authRoutes";
import articleRoutes from "./src/routes/articleRoutes";
import indexRoutes from "./src/routes/indexRoutes";
import db from "./src/config/db";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/src/views"));

app.use(
  session({
    secret: "blog",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db();

app.use(express.static("src/public"));

app.use("/admin", adminRoutes);
app.use("/article", articleRoutes);
app.use("/auth", authRoutes);
app.use(indexRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
