import React from "react";
import "./App.css";
import Form from "./components/Form"
import Game from "./components/Game";

function App() {
  
  let startGame = true
  
  return (
    <div className="App">
      {startGame ? <Game /> : <Form />}
    </div>
  );
}

export default App;
