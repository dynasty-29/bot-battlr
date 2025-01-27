import React from 'react';
import { Link } from 'react-router-dom';

//Navigator component- since i wanted to utilise use of routers
function NavBar() {
  return (
    <nav>
      <ul>
        {/* User can manuver from each one of these pages with easy by clicking on them */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/bots">Bot Collection</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
