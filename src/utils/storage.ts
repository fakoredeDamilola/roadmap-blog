import path from "path";
import fs from "fs";

const createNewFile = (fileName: string, content: any) => {
  const filePath = path.join(__dirname, `../articles/${fileName}.json`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    return true;
  } else {
    console.log("file already exists");
  }
};

export { createNewFile };
