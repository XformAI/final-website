// src/utils/loadArticles.ts
export const loadArticle = (articleName: string) => {
    try {
      return import(`../pages/blog/${articleName}`).then((module) => module.default);
    } catch (error) {
      console.error(`Failed to load article: ${articleName}`, error);
      return null;
    }
  };
  