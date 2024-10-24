import { useState, useEffect } from "react";
import Header from "../Header";
import ArticleItem from "../ArticleItem";
import "./index.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const api =
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=43669a7f9aca41ce9a138e8699bbc8a4";

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(api, {
        method: "GET",
        headers: {
          Authorization: "Bearer 43669a7f9aca41ce9a138e8699bbc8a4",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setArticles(data.articles);
        console.log(data.articles);
      }
    };
    fetchArticles();
  }, []);
  return (
    <div className="article-bg-container">
      <Header />
      <ul className="articles-container">
        {articles.map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default Articles;
