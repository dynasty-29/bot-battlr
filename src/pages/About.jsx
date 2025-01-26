import React from 'react';
import { Link } from 'react-router-dom';

function About () {
  return (
    <div className="about">
      <h1>About Bot Battlr</h1>
      <p>This is a web app where you can enlist bots and build your army!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
