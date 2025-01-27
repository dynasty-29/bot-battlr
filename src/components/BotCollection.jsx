import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import YourBotArmy from './YourBotArmy';

//Bot Collection component
function BotCollection() {

  //utilisaing usState that handles our component arrays
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);

  // Fetch bots from the database
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  // function that enlist bot into the army
  function handleEnlist(bot) {
    console.log(`Enlisted ${bot.name}`);
    setMyArmy((prevArmy) => [...prevArmy, bot]);
  }

  // function that release bot from the army
  function handleRelease(botId) {
    console.log(`Released bot with ID: ${botId}`);
    setMyArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  }

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <BotCard bot={bot} onEnlist={handleEnlist} /> 
            <button onClick={() => handleEnlist(bot)} className="enlist-button">Enlist</button> 
          </div>
        ))}
      </div>

      <YourBotArmy army={myArmy} onRelease={handleRelease} />
    </div>
  );
}

export default BotCollection;
