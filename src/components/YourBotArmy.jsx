import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map((bot) => (
          <div key={bot.id} className="army-card">
            <BotCard bot={bot} />
            <button onClick={() => onRelease(bot.id)}>Release</button>
          </div>
        ))
      ) : (
        <p>No bots enlisted yet. Enlist some bots!</p>
      )}
    </div>
  );
}

export default YourBotArmy;
