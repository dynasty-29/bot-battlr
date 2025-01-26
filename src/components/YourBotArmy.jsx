import React from 'react';

function YourBotArmy({ army, onRelease }){
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id} className="bot">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => onRelease(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
