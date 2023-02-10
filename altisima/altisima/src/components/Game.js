import React, { useContext } from "react";
import Round from "./Round";
import GameProvider from "../store/GameProvider";

function Game() {
  return (
    <GameProvider>
      <Round />
    </GameProvider>
  );
}

export default Game;
