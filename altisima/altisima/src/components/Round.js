import React from "react";
import PlayerGrid from "./PlayerGrid";
import "../stylesheets/Round.css";

function Round() {
  const gameData = window.localStorage.getItem("GameCreated");
  const { cardsPerRound, players } = JSON.parse(gameData);


function gameStateReducer(state, action) {
  switch (action.manage) {
    case "bid": {
      let newState = {...state}
      newState.game[action.index].bid += 1
      return newState 
    }
    case "lost": {
      let newState = {...state}
      newState.game[action.index].bidsLost += 1
      return newState 
    }
    case "win": {
      const player = state.game[action.player];
      player.win = true;
      return { ...state, ...player };
    }
    case "resetBid": {
      let newState = {...state}
      newState.game[action.index].bid = 0
      return newState 
    }
    case "resetLost": {
      let newState = {...state}
      newState.game[action.index].bidsLost = 0
      return newState 
    }
    default: {
      throw new Error(`Unsupported action ${action.manage}`);
    }
  }
}

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
    results: players,
    playerRound: [],
  });

  // const [round, setRound] = React.useState(1);
  // const [cardsInCurrent, setCardsInCurrent] = React.useState(cardsPerRound[0]);

  const handlePlayersBidState = (index) => {
    setGameState({ index: index, manage: "bid" });
  };

  const handlePlayersLoseState = (index) => {
    setGameState({ index: index, manage: "lost" });
  };

  const resetPlayersBid = (index) => {
    setGameState({ index: index, manage: "resetBid" });
  };

  const resetPlayersLost = (index) => {
    setGameState({ index: index, manage: "resetLost" });
  };

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
          {players.map((p) => (
            <PlayerGrid
            state={gameState.results}
            setBidState={() => handlePlayersBidState(p.key)}
            setLoseState={() => handlePlayersLoseState(p.key)}
            resetBid={() => resetPlayersBid(p.key)}
            resetLost={() => resetPlayersLost(p.key)}
            index={p.key}
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
