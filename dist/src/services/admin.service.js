"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewArticle = void 0;
const storage_1 = require("../utils/storage");
const createNewArticle = (title, author, body) => {
    if (title && author && body) {
        const newArticle = {
            title,
            author,
            body,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const uniqueName = `${new Date().getTime()}-${title.split(" ").join("_")}`;
        const newFile = (0, storage_1.createNewFile)(uniqueName, newArticle);
        if (newFile) {
            return { status: true, message: "success", fileName: uniqueName };
        }
        else {
            return { status: false, message: "error" };
        }
    }
    else {
        console.log("error");
        return { status: false, message: "error" };
    }
};
exports.createNewArticle = createNewArticle;
