import React from "react";
import NewsCard from "./NewsBoard.jsx";
import './NavBar.css';

function NavBar({ news }) {
  return (
    <div className="news-bar">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NavBar;
