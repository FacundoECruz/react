import React from "react";
import PlayerGrid from "./PlayerGrid";
import { useContext } from "react";
import { GameContext } from "../store/GameProvider";
import { types, cardsPerRound } from "../store/GameReducer";
import Table from "./Table";
import "../stylesheets/Round.css";

function Round() {
  const [game, dispatch] = useContext(GameContext);

  const { round, players, table, cleaned, inProgress } = game;

  return (
    <>
      <div className="round-container">
        {inProgress 
        ? <div className="title-container">
          <h1>Ronda {round}</h1>
          <h3>Cartas: {cardsPerRound[round - 1]}</h3>
        </div>
        : <div className="finish-display">
          <h1>Juego terminado</h1>
          <h3>Se lo lleva {table[0].name}</h3>
          </div>}
        <div className="player-grids-container">
          <div className="players-and-button">
            {players.map((p) => (
              <PlayerGrid index={p.key} key={p.name} />
            ))}
          </div>
          <button className="custom-btn clean-btn" onClick={() => dispatch({ type: types.clean })}>
            Limpiar
          </button>

          <button
            className="custom-btn next-round-btn"
            onClick={() => dispatch({ type: types.nextRound })}
            disabled={cleaned}
          >
            Siguiente 
          </button>
        </div>
      </div>
      <Table data={table} />
    </>
  );
}

export default Round;
