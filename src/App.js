import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
