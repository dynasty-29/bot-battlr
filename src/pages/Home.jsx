import React from 'react';
import { Link } from 'react-router-dom';

function Home (){
  return (
    <div className="home">
      <h1>Welcome to Bot Battlr!</h1>
      <p>Build your ultimate bot army and conquer the galaxy!</p>
      <div className="home-buttons">
        <Link to="/bots" className="home-button">Start Enlisting Bots</Link>
        <Link to="/about" className="home-button">About</Link>
      </div>
    </div>
  );
};

export default Home;

