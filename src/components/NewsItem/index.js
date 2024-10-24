const NewsItem = (props) => {
  const { news } = props;
  const { country, description, name, url } = news;
  return (
    <div className="card " style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {name.toLowerCase()} - {country}
        </h6>
        <p className="card-text">{description}</p>
        <a href={url} target="__blank" className="card-link" style={{fontWeight:"600"}}>
          See more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
