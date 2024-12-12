import React from "react";
import "./NewsBoard.css";

function NewsBoard({ article }) {
  return (
    <div className="news-board">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">See more!</a>
    </div>
  );
}

export default NewsBoard;
