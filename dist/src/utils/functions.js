"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllArticles = getAllArticles;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getAllArticles() {
    const fileNames = fs_1.default.readdirSync(path_1.default.join(__dirname, `../articles`));
    const getListofArticles = fileNames.map((fileName) => {
        const filePath = path_1.default.join(__dirname, `../articles/${fileName}`);
        const articleInfo = fileName.split("-");
        const articleName = articleInfo[1]?.split(".")[0]?.split("_").join(" ");
        const timestampString = articleInfo[0];
        const timestamp = Number(timestampString);
        const dateCreated = new Date(timestamp);
        const formattedDate = `${dateCreated.getFullYear()}-${dateCreated.getMonth() + 1}-${dateCreated.getDate()} ${dateCreated.getHours()}:${dateCreated.getMinutes()}:${dateCreated.getSeconds()}`;
        return { fileName, articleName, dateCreated: formattedDate, filePath };
    });
    return getListofArticles;
}
