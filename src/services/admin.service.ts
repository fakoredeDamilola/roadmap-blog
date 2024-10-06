import { createNewFile } from "../utils/storage";

const createNewArticle = (title: string, author: string, body: string) => {
  if (title && author && body) {
    const newArticle = {
      title,
      author,
      body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const uniqueName = `${new Date().getTime()}-${title.split(" ").join("_")}`;
    const newFile = createNewFile(uniqueName, newArticle);
    if (newFile) {
      return { status: true, message: "success", fileName: uniqueName };
    } else {
      return { status: false, message: "error" };
    }
  } else {
    console.log("error");
    return { status: false, message: "error" };
  }
};

const updateArticle = (title: string, author: string, body: string) => {
  const getFileName = title.split(" ").join("_");
};
export { createNewArticle };
