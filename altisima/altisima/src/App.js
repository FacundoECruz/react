import React from "react";
import "./App.css";
import Form from "./components/Form"

function App() {
  
  let startGame = false
  
  return (
    <div className="App">
      {startGame ? <h1>Game</h1> : <Form />}
    </div>
  );
}

export default App;
