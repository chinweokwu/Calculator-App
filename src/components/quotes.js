import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('');

  const handleClick = () => {
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        const randomQuotes = Math.floor(Math.random() * res.data.length);
        setQuotes(res.data[randomQuotes].text);
        setAuthor(res.data[randomQuotes].author);
      })
      .catch(err => err);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="quote">
      <div className="login-box">
        <h3>{quotes}</h3>
        <div className="author">{author}</div>
        <button type="button" onClick={handleClick}>
          <span />
          <span />
          <span />
          <span />
          Change Quotes
        </button>
      </div>
    </div>
  );
};

export default Quotes;
