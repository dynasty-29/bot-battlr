import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from '../src/components/BotCollection';
import YourBotArmy from '../src/components/YourBotArmy';
import BotDetails from '../src/pages/BotDetails';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import NavBar from '../src/components/NavBar'; // Import the Navigation component

function App (){
  const [myArmy, setMyArmy] = useState([]);

  const handleEnlist = (bot) => {
    if (!myArmy.some((b) => b.id === bot.id)) {
      setMyArmy([...myArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    setMyArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };
  return (
    <Router basename="/bot-battlr">
      <div className="app">
        <NavBar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bots" element={<BotCollection onEnlist={handleEnlist} />} />
          <Route path="/your-army" element={<YourBotArmy army={myArmy} onRelease={handleRelease}/>} />
          <Route path="/bot/:id" element={<BotDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
