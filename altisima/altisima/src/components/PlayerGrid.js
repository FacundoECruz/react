import React from "react";
import "../stylesheets/PlayerGrid.css";
import { useContext } from "react";
import { GameContext } from "../store/GameProvider";
import { types } from "../store/GameReducer";

function PlayerGrid({ index }) {
  const [game, dispatch] = useContext(GameContext);

  const { players } = game;

  return (
    <div className="player-info-container">
      <h2 className="name">{players[index].name}</h2>
      <div className="buttons">
        <div className="bid-container">
          <p
            className="label"
            onClick={() => dispatch({ type: types.resetBid, index: index })}
          >
            Apuesta
          </p>
          <button
            id="bid-button"
            onClick={() => dispatch({ type: types.addBid, index: index })}
          >
            {players[index].bid}
          </button>
        </div>
        <div className="lost-container">
          <p
            className="label"
            onClick={() => dispatch({ type: types.resetLost, index: index })}
          >
            Pierde
          </p>
          <button
            id="lost-button"
            onClick={() => dispatch({ type: types.addLost, index: index })}
          >
            {players[index].bidsLost}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerGrid;
