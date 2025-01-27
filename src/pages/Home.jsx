import React from 'react';
import { Link } from 'react-router-dom';

function Home (){
  return (
    <div className="home">
      <h1>Welcome to Bot Battlr!</h1>
      <p>
        Ready to command your robotic forces? 
        <strong> Build your army, strategize, and dominate the galaxy!</strong>
        Recruit <em>bots</em> with unique abilities and watch them battle for glory.
      </p>
      <div className="home-buttons">
        <Link to="/bots" className="home-button">Start Enlisting Bots</Link>
        <Link to="/about" className="home-button">Learn the Story</Link>
      </div>
      <p>
        <strong>Remember:</strong> The strongest armies are built with the smartest strategies. 
        Choose your bots wisely!
      </p>
    </div>
  );
};

export default Home;

