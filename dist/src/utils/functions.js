"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllArticles = getAllArticles;
exports.formatDate = formatDate;
exports.findFileWithURL = findFileWithURL;
exports.getFilePath = getFilePath;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getAllArticles() {
    const fileNames = fs_1.default.readdirSync(path_1.default.join(__dirname, `../articles`));
    const getListofArticles = fileNames.map((fileName) => {
        const filePath = path_1.default.join(__dirname, `../articles/${fileName}`);
        const articleInfo = fileName.split("-");
        const articleName = articleInfo[1]?.split(".")[0]?.split("_").join(" ");
        const timestampString = articleInfo[0];
        const formattedDate = formatDate(timestampString);
        const url = articleName?.split(" ").join("_");
        return { fileName, articleName, dateCreated: formattedDate, filePath, url };
    });
    return getListofArticles;
}
function formatDate(date) {
    const timestamp = Number(date);
    const currentDate = new Date(timestamp);
    return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
function findFileWithURL(url) {
    const fileNames = fs_1.default.readdirSync(path_1.default.join(__dirname, `../articles`));
    const article = fileNames.find((fileName) => {
        const articleInfo = fileName.split("-");
        const articleName = articleInfo[1]?.split(".")[0];
        return articleName === url;
    });
    if (article) {
        const filePath = path_1.default.join(__dirname, `../articles/${article}`);
        const fileContent = fs_1.default.readFileSync(filePath, "utf-8");
        return fileContent;
    }
    else {
        return "Article not found";
    }
}
function getFilePath(url) {
    const fileNames = fs_1.default.readdirSync(path_1.default.join(__dirname, `../articles`));
    const article = fileNames.find((fileName) => {
        const articleInfo = fileName.split("-");
        const articleName = articleInfo[1]?.split(".")[0];
        return articleName === url;
    });
    if (article) {
        return path_1.default.join(__dirname, `../articles/${article}`);
    }
}
