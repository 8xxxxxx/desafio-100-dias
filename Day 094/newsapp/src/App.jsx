import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NavBar.jsx";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "ec11e723523e4669be9ce695fc0b8dbc";
  const apiUrl = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>News App</h1>
        <p>Your news</p>
      </header>
      <main>
        {}
        {loading ? <p>Loading...</p> : <NewsList news={news} />}
      </main>
    </div>
  );
}

export default App;
