import "./index.css";

const ArticleItem = (props) => {
  const { article } = props;
  const { author, content, description, publishedAt, title, url, urlToImage } =
    article;

  const handleArticle = () => {
    window.open(url, "_blank");
  };
  return (
    <li className="article-item" onClick={handleArticle}>
      <h2>{title}</h2>
      <img src={urlToImage} alt={title} className="article-img " />
      <h2 className="description">{description}</h2>
      <div className="d-flex flex-column">
        <span>Author: {author}</span>
        <span>Published At: {publishedAt}</span>
      </div>
    </li>
  );
};

export default ArticleItem;
