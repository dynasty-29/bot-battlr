import React from 'react';
import { Link } from 'react-router-dom';

function Home (){
  return (
    <div className="home">
      <h1>Welcome to Bot Battlr!</h1>
      <p>Build your ultimate bot army and conquer the galaxy!</p>
      <Link to="/bots">Start Enlisting Bots</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;

