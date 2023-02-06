import React from "react";
import "../stylesheets/PlayerGrid.css";

function PlayerGrid({
  state,
  setBidState,
  setLoseState,
  resetBid,
  resetLost,
  index,
}) {
  return (
    <div className="player-info-container">
      <h2 className="name">{state[index].name}</h2>
      <div className="buttons">
        <div className="bid-container">
          <p className="label" onClick={resetBid}>Apuesta</p>
          <button id="bid-button" onClick={setBidState}>
            {state[index].bid}
          </button>
        </div>
        <div className="lost-container">
          <p className="label" onClick={resetLost}>Pierde</p>
          <button id="lost-button" onClick={setLoseState}>
            {state[index].bidsLost}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerGrid;