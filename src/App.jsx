import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    const url = "https://api.quotable.io/random";
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        setQuote(item.content);
        setAuthor(item.author);
      });
  };

  return (
    <div className="section">
      <h1 className="title">Simple Random Quote Generator</h1>
      <div className="container glass">
        <p>"{quote}"</p>
        <h3>{author}</h3>
        <button onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
