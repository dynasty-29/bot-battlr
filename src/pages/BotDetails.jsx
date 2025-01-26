import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BotDetails({ onEnlist, onBack }) {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8001/bots/${id}`)
      .then(response => response.json())
      .then(data => setBot(data));
  }, [id]);

  if (!bot) return <div>Loading...</div>;

  return (
    <div className="bot-details">
      <button onClick={onBack}>Back</button>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotDetails;
