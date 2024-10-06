import path from "path";
import fs from "fs";

export function getAllArticles() {
  const fileNames = fs.readdirSync(path.join(__dirname, `../articles`));
  const getListofArticles = fileNames.map((fileName) => {
    const filePath = path.join(__dirname, `../articles/${fileName}`);
    const articleInfo = fileName.split("-");
    const articleName = articleInfo[1]?.split(".")[0]?.split("_").join(" ");
    const timestampString = articleInfo[0] as string;
    const formattedDate = formatDate(timestampString);
    const url = articleName?.split(" ").join("_");

    return { fileName, articleName, dateCreated: formattedDate, filePath, url };
  });

  return getListofArticles;
}

export function formatDate(date: string) {
  const timestamp = Number(date);
  const currentDate = new Date(timestamp);
  return `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

export function findFileWithURL(url?: string) {
  const fileNames = fs.readdirSync(path.join(__dirname, `../articles`));
  const article = fileNames.find((fileName) => {
    const articleInfo = fileName.split("-");
    const articleName = articleInfo[1]?.split(".")[0];
    return articleName === url;
  });
  if (article) {
    const filePath = path.join(__dirname, `../articles/${article}`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return fileContent;
  } else {
    return "Article not found";
  }
}

export function getFilePath(url: string) {
  const fileNames = fs.readdirSync(path.join(__dirname, `../articles`));
  const article = fileNames.find((fileName) => {
    const articleInfo = fileName.split("-");
    const articleName = articleInfo[1]?.split(".")[0];
    return articleName === url;
  });
  if (article) {
    return path.join(__dirname, `../articles/${article}`);
  }
}
