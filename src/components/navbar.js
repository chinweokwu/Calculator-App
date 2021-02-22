import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/calculator">Calculator</Link>
      {' | '}
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export { Navbar as default };
