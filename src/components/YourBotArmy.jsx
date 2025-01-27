import React from 'react';
import BotCard from './BotCard';

// my bot army component that handles all bots that enlist. 
//Onces a bot is enlisted it appears at the bottom of bot collection page showing this is what you enlisted
function YourBotArmy({ army, onRelease }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map((bot) => (
          <div key={bot.id} className="army-card">
            <BotCard bot={bot} />
            <button onClick={() => onRelease(bot.id)} className="release-button">Release</button>
          </div>
        ))
      ) : (
        <p>No bots enlisted yet. Enlist some bots!</p>
      )}
    </div>
  );
}

export default YourBotArmy;
