import React from "react";
import "../stylesheets/PlayerGrid.css";
import { useContext } from "react";
import { GameContext } from "../store/GameProvider";
import { types } from "../store/GameReducer";

// Aca el objeto del que saco la data para renderear los 
// PlayerGrids proviene del provider del contexto, por lo que 
// tabla y tablero consumen del mismo value.

function PlayerGrid({ index }) {
  const [game, dispatch] = useContext(GameContext);

  const { players, inProgress } = game;

  return (
    <div className="player-info-container">
      <h2 className="name">{players[index].name}</h2>
      <div className="buttons">
        <div className="bid-container">
          <button
            className="label"
            onClick={() => dispatch({ type: types.resetBid, index: index })}
          >
            Apuesta
          </button>
          <button
            id="bid-button"
            onClick={() => dispatch({ type: types.addBid, index: index })}
            disabled={!inProgress}
          >
            {players[index].bid}
          </button>
        </div>
        <div className="lost-container">
          <button 
            className="label"
            onClick={() => dispatch({ type: types.resetLost, index: index })}
          >
            Pierde
          </button>
          <button
            id="lost-button"
            onClick={() => dispatch({ type: types.addLost, index: index })}
            disabled={!inProgress}
          >
            {players[index].bidsLost}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerGrid;
