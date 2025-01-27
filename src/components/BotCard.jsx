import React from 'react';


//Botcard component
//It will display the demographics of each bot
function BotCard ({ bot, onEnlist }) {

  //function that shows these demographic on handling the click event
  function handleClick() {
    onEnlist(bot); 
  };
  return (
    <div className="bot-card" onClick={handleClick}> 
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotCard;

