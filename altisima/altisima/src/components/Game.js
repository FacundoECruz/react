import React, { useContext } from "react";
import "../stylesheets/Game.css";
import Round from "./Round";
import GameProvider from "../store/GameProvider";

function Game() {

  return (
    <div className="main-container">
      <GameProvider>
        <Round />
      </GameProvider>
    </div>
  );
}

export default Game;
