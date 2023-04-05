import React from "react";

function PlayerGrid({ player }) {
  return (
    <>
      <div>
        <h2>{player.name}</h2>
        <h2 data-testid="score">{player.score}</h2>
      </div>
      <div>
        <button data-testid="bet-up-btn">+</button>
        <h3 data-testid="bet-value">{player.bet}</h3>
        <button data-testid="bet-down-btn">-</button>
      </div>
      <div>
        <button data-testid="lost-up-btn">+</button>
        <h3 data-testid="lost-value">{player.lost}</h3>
        <button data-testid="lost-down-btn">-</button>
      </div>
    </>
  );
}

export default PlayerGrid;
