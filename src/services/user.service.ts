import Article from "../models/article.model";

export async function getAllArticles(userId?: string) {
  const articles = userId
    ? await Article.find({
        author: userId,
      })
    : await Article.find().populate("author", "name email");
  if (articles) {
    const formatArticles = articles?.map((article) => {
      const plainArticle = article.toObject();

      return { ...plainArticle, createdAt: article.createdAt.toDateString() };
    });
    return formatArticles;
  }
}
