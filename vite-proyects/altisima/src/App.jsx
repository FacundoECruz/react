import "./App.css";
import { useState, useEffect } from 'react';
import playersData from "./utils/playersData";
import PlayerGrid from "./components/PlayerGrid";

function App() {

  const [gameData, setGameData] = useState(playersData)

  useEffect(() => {
    console.log(gameData)
  })

  return (
    <div className="App">
      <div>
        <h2>Round 1</h2>
        <p>Cards to deal: 3</p>
      </div>
      <div>
        {gameData.map((p) => {
          return <PlayerGrid player={p} key={p.name}/>
        })}
      </div>
    </div>
  );
}

export default App;
