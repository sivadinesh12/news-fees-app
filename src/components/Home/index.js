import { useState, useEffect } from "react";
import Header from "../Header";
import NewsItem from "../NewsItem";
import "./index.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [dropdownOption, setDropdownOption] = useState("all");
  const apiKey = "43669a7f9aca41ce9a138e8699bbc8a4";
  const api = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(api);
        if (response.ok) {
          console.log("news Fetched successfully");
          const data = await response.json();
          console.log(data.sources);
          setNews(data.sources);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  const handleDropDown = (e) => {
    setDropdownOption(e.target.value);
  };

  const getFilteredNews = () => {
    if (dropdownOption === "all") {
      return news;
    }
    return news.filter((news) => news.category === dropdownOption);
  };

  const filteredNews = getFilteredNews();

  return (
    <div className="news-feed-app">
      <Header />
      <div className="articles-container">
        <select
          value={dropdownOption}
          className="dropdown"
          onChange={handleDropDown}
        >
          <option value="all">All</option>
          <option value="general">General</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </select>
        <div className="news-cards-container">
          {filteredNews.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
