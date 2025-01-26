import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from '../src/components/BotCollection';
import YourBotArmy from '../src/components/YourBotArmy';
import BotDetails from '../src/pages/BotDetails';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import NavBar from '../src/components/NavBar'; // Import the Navigation component

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />  {/* Render the Navigation component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bots" element={<BotCollection />} />
          <Route path="/your-army" element={<YourBotArmy />} />
          <Route path="/bot/:id" element={<BotDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
