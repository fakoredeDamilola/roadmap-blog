"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewFile = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const createNewFile = (fileName, content) => {
    const filePath = path_1.default.join(__dirname, `../articles/${fileName}.json`);
    if (!fs_1.default.existsSync(filePath)) {
        fs_1.default.writeFileSync(filePath, JSON.stringify(content, null, 2));
        return true;
    }
    else {
        console.log("file already exists");
    }
};
exports.createNewFile = createNewFile;
