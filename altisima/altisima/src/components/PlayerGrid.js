import React from "react";
import '../stylesheets/PlayerGrid.css'

function PlayerGrid({ name, players }) {

    const [control, setControl] = React.useState({
      bet: 0,
      lose: 0,
      score: 0,
    });
    
    const [table, setTable] = React.useState(players);
    
    const handleControl = (item, action) => {
      setControl((prevState) => {
        return {
          ...prevState,
          
          [item]: action === "up" ? control[item] + 1 : control[item] - 1,
        };
      });
    };
    
    const saveResults = (e) => {
      const newScore =
        parseInt(control.lose) === 0
        ? control.score + 5 + control.bet
        : control.score - control.lose;
      const newControl = {
        bet: 0,
        lose: 0,
        score: newScore,
      };
      setControl(newControl);
      
      const currentPlayer = players.findIndex((p) => p.name === name);
      const tableCopy = [...table]
      function addScore() {
        tableCopy[currentPlayer].score = newScore
        return tableCopy
      }
      setTable(addScore());
      console.log(table)
     }
    return (
      <div className="player-info-container">
        <h1>
          {name} {control.score}
        </h1>
        <div className="controls">
          <div className="bet">
            <div className="label-display">
          
              <span>Apuesta</span>
              <div
                className={
                  parseInt(control.bet) === 0
                    ? "num-display"
                    : "num-display-active"
                }
              >
                {control.bet}
              </div>
            </div>
            <div className="buttons">
              <button
                className="up-button"
                onClick={() => handleControl("bet", "up")}
              >
                +
              </button>
              <button
                className="down-button"
                onClick={() => handleControl("bet", "down")}
              >
                -
              </button>
            </div>
          </div>
          <div className="lose">
            <div className="label-display">
              <span>Pierde</span>
              <div
                className={
                  parseInt(control.lose) === 0
                    ? "num-display"
                    : "num-display-active"
                }
              >
                {control.lose}
              </div>
            </div>
            <div className="buttons">
              <button
                className="up-button"
                onClick={() => handleControl("lose", "up")}
              >
                +
              </button>
              <button
                className="down-button"
                onClick={() => handleControl("lose", "down")}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <button className="save-button" onClick={saveResults}>
          Resultados
        </button>
      </div>
    );
  }
  
  export default PlayerGrid;