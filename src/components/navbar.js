import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <Link className="navitem" to="/">Home</Link>
      <Link className="navitem" to="/calculator">Calculator</Link>
      <Link className="navitem" to="/quote">Quote</Link>
    </div>
  </nav>
);

export { Navbar as default };
