import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleClick = () => {
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        const randomQuotes = Math.floor(Math.random() * res.data.length);
        setLoading(false);
        setQuotes(res.data[randomQuotes].text);
        setAuthor(res.data[randomQuotes].author);
        setError('');
      })
      .catch(() => {
        setLoading(false);
        setQuotes('');
        setAuthor('');
        setError('Something went wrong bro!');
      });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="quote">
      <div className="login-box">
        <h3>{loading ? 'loading...' : quotes}</h3>
        <h3>{error || null}</h3>
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
