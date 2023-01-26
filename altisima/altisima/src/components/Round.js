import React from "react";
import PlayerGrid from "./PlayerGrid";
import "../stylesheets/Round.css";

function Round() {
  const gameData = window.localStorage.getItem("GameCreated");
  const { cardsPerRound, players } = JSON.parse(gameData);

  function gameStateReducer(state, action) {
    // console.log(action);
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
        let newState = {...state, ...action};
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

  
  React.useEffect(() => {
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  }, [gameState])

  console.log(gameState);

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
    round = round + 1;
    let finishedRound = gameState.results;
    finishedRound.forEach(p => {
      if(p.bidsLost === 0) {
        p.win = true;
        // p.score = p.score + 5 + p.bid;
      } 
      // else {
      //   p.score = p.score - p.bidsLost; 
      // }
    })
    setGameState({
      rounds: [
        {
          current: round + 1,
          left: leftRounds - 1,
          cardsToDeal: cardsPerRound[round - 1],
        },
      ],
      results: finishedRound,
      manage: "round",
    });
  };

  return (
    <div className="round-container">
      <div className="title-container">
        <h2>Ronda {gameState.rounds[0].current}</h2>
        <h3>Cartas: {gameState.rounds[0].cardsToDeal}</h3>
      </div>
      <div className="player-grids-container">
        <div>
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
          <button onClick={nextRound}>Siguiente Ronda</button>
        </div>
      </div>
    </div>
  );
}

export default Round;
