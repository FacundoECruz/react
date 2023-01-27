import React from "react";
import PlayerGrid from "./PlayerGrid";
import dataForBackend from "../javascripts/dataForBackend";
import checkLose from "../javascripts/checkLose"
import "../stylesheets/Round.css";

function Round() {
  const gameData = window.localStorage.getItem("GameCreated");
  const { cardsPerRound, players } = JSON.parse(gameData);

  function gameStateReducer(state, action) {
    switch (action.manage) {
      case "bid": {
        let newState = { ...state };
        newState.results[action.index].bid += 1;
        return newState;
      }
      case "lost": {
        let newState = { ...state };
        newState.results[action.index].bidsLost += 1;
        return newState;
      }
      case "win": {
        const player = state.results[action.player];
        player.win = true;
        return { ...state, ...player };
      }
      case "resetBid": {
        let newState = { ...state };
        newState.results[action.index].bid = 0;
        return newState;
      }
      case "resetLost": {
        let newState = { ...state };
        newState.results[action.index].bidsLost = 0;
        return newState;
      }
      case "round": {
        let newState = { ...state, ...action };
        return newState;
      }
      default: {
        throw new Error(`Unsupported action ${action.manage}`);
      }
    }
  }

  let round = 1;
  let leftRounds = 8;

  const [gameState, setGameState] = React.useReducer(gameStateReducer, {
    rounds: [
      {
        current: 0,
        left: 8,
        cardsToDeal: cardsPerRound[round - 1],
      },
    ],
    status: "inProgress",
    results: players,
  });

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
    e.preventDefault();
    let finishedRound = gameState.results;
    if (checkLose(finishedRound)) {
      window.alert("No pueden ganar todos!!");
    } else {
      finishedRound.forEach((p) => {
        if (p.bidsLost === 0) {
          p.win = true;
        }
      });

      const playersRound = dataForBackend(finishedRound);
      window.localStorage.setItem("gameState", JSON.stringify(playersRound));
      
      setGameState({
        rounds: [
          {
            current: round + 1,
            left: leftRounds - 1,
            cardsToDeal: cardsPerRound[round - 1],
          },
        ],
        results: players,
        manage: "round",
      });
    }
  };

  return (
    <div className="round-container">
      <div className="title-container">
        <h1>Ronda {gameState.rounds[0].current}</h1>
        <h3>Cartas: {gameState.rounds[0].cardsToDeal}</h3>
      </div>
      <div className="player-grids-container">
        <div className="players-and-button">
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
        </div>
        <button className="next-round-button" onClick={nextRound}>
          Siguiente Ronda
        </button>
      </div>
    </div>
  );
}

export default Round;
