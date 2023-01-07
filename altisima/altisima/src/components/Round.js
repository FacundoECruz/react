import React from "react";
import PlayerGrid from "./PlayerGrid";
import "../stylesheets/Round.css";

function gameStateReducer(state, action) {
  // return state;
}

function Round({ round = 1 }) {
  const gameData = window.localStorage.getItem("GameCreated");
  const { cardsPerRound, players } = JSON.parse(gameData);

  const playerResult = players.map((p) => {
    return { name: p.name, score: p.score };
  });

  const [gameState, setGameState] = React.useReducer(gameStateReducer, {
    rounds: [
      {
        current: round,
        left: 9,
        cardsToDeal: cardsPerRound[round - 1],
      },
    ],
    status: "inProgress",
    results: playerResult,
  });

  // const [round, setRound] = React.useState(1);
  // const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  const nextRound = () => {
    round += 1;
    // setGameState({})
  };

  return (
    <div className="round-container">
      <div className="title-container">
        <h2>Ronda {round}</h2>
        <h3>Cartas: {cardsPerRound[round - 1]}</h3>
      </div>
      <div className="player-grids-container">
        {/* <form> */}
          {players.map((player) => (
            <PlayerGrid
              key={player.name}
              name={player.name}
              players={players}
            />
          ))}
        {/* </form> */}
      </div>
      <button className="next-round-button" onClick={nextRound}>
        Siguiente Ronda
      </button>
    </div>
  );
}

export default Round;
