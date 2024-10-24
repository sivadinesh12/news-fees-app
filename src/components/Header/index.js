import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  const handleArticle = () => {
    navigate("/articles");
  };

  const handleNewsPage = () => {
    navigate("/");
  };

  return (
    <nav className="nav-bar ">
      <h2 className="logo">
        News Feed <br></br>
        <span className="hl-logo">App</span>
      </h2>
      <div>
        <a className="nav-item" href="#" onClick={handleNewsPage}>
          News
        </a>
        <a className="nav-item" href="#" onClick={handleArticle}>
          Articles
        </a>
      </div>
    </nav>
  );
};

export default Header;
