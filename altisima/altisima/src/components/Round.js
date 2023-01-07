import React from "react";
import PlayerGrid from "./PlayerGrid";
import "../stylesheets/Round.css";

const gameStateReducer = (state, action) => ({...state, ...action})

function Round() {
  const gameData = window.localStorage.getItem("GameCreated");
  const { cardsPerRound, players } = JSON.parse(gameData);

  const playerResult = players.map((p) => {
    return { name: p.name, score: p.score };
  });

  let round = 1

  const [gameState, setGameState] = React.useReducer(gameStateReducer, {

    rounds: [
      {
        current: round,
        left: 9,
        cardsToDeal: cardsPerRound[round - 1],
      }
    ],
    status: "inProgress",
    results: playerResult,
    playerRound: [],
  });

  // const [round, setRound] = React.useState(1);
  // const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  const nextRound = (e) => {
    e.preventDefault()
    round = round + 1
    setGameState({rounds: [
      {
        current: round,
        left: 9,
        cardsToDeal: cardsPerRound[round - 1],
      }]})
      console.log(gameState)
  };

  return (
    <div className="round-container">
      <div className="title-container">
        <h2>Ronda {round}</h2>
        <h3>Cartas: {cardsPerRound[round - 1]}</h3>
      </div>
      <div className="player-grids-container">
        <form onSubmit={nextRound}>
          {players.map((player) => (
            <PlayerGrid
              key={player.name}
              name={player.name}
              players={players}
            />
          ))}
          <button type="submit">
            Siguiente Ronda
          </button>
        </form>
      </div>
    </div>
  );
}

export default Round;
