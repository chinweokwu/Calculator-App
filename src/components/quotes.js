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
      <div className="quote-box">
        <div className="quote-container">
          <div className="quote-button">
            {' '}
            <button type="button" onClick={handleClick}>Change Quotes</button>
          </div>
          <div className="main-quote">
            <h3>{quotes}</h3>
          </div>
          <div className="author">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
