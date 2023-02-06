import React from "react";
import PlayerGrid from "./PlayerGrid";
import dataForBackend from "../javascripts/dataForBackend";
import { useContext } from "react";
import { GameContext } from "../store/GameProvider";
import { types, cardsPerRound } from "../store/GameReducer";
import "../stylesheets/Round.css";

function Round() {
  const [game, dispatch] = useContext(GameContext);

  const { round, players, table } = game;

  return (
    <div className="round-container">
      <div className="title-container">
        <h1>Ronda {round}</h1>
        <h3>Cartas: {cardsPerRound[round - 1]}</h3>
      </div>
      <div className="player-grids-container">
        <div className="players-and-button">
          {players.map((p) => (
            <PlayerGrid index={p.key} key={p.key} />
          ))}
        </div>
        <button onClick={() => dispatch({ type: types.clean })}>Limpiar</button>

        <button
          className="next-round-button"
          onClick={() => dispatch({ type: types.nextRound })}
        >
          Siguiente Ronda
        </button>
      </div>
    </div>
  );
}

export default Round;
