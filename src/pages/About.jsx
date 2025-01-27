import React from 'react';
import { Link } from 'react-router-dom';

// My about page component
function About () {
  return (
    <div className="about">
      <h1>The Story Behind Bot Battlr</h1>
      <p>
        Welcome to the galaxy of <strong>Bot Battlr</strong>, where robotics
        meets adventure! This app lets you become a commander of elite bots
        with special powers.
      </p>
      <p>
        Each bot is unique, with distinct strengths and skills. Enlist them into
        your army, devise your strategy, and take on the toughest challenges. 
        Are you ready to lead your team to victory and claim your place among 
        the stars?
      </p>
      <p>
        Built for commanders who dream big, <strong>Bot Battlr</strong> is 
        more than just a game—it's a test of strategy, wit, and courage.
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
