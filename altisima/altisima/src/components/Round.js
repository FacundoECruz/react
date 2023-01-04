import React from "react";
import PlayerGrid from "./PlayerGrid";
import '../stylesheets/Round.css'

function Round() {
  const cardsPerRound = JSON.parse(window.localStorage.getItem("cards"));
  const players = JSON.parse(window.localStorage.getItem("players"));

  const [round, setRound] = React.useState(1);
  const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  const nextRound = () => {
    setRound(round + 1);
    setCardsInCurrent(cardsPerRound[round]);
  };

  return (
    <div className="round-container">
      <div className="title-container">
        <h2>Ronda {round}</h2>
        <h3>Cartas: {cardsInCurrent}</h3>
      </div>
      <div className="player-grids-container">
        {players.map((player) => (
          <PlayerGrid key={player.name} name={player.name} players={players} />
        ))}
      </div>
      <button className="next-round-button" onClick={nextRound}>
        Siguiente Ronda
      </button>
    </div>
  );
}

export default Round;
