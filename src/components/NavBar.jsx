import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/bots">Bot Collection</Link></li>
        <li><Link to="/your-army">Your Bot Army</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
