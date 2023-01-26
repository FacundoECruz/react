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
      <h2>{state[index].name}</h2>
      <p onClick={resetBid}>Apuesta</p>
      <button id="bid" onClick={setBidState}>
        {state[index].bid}
      </button>
      <p onClick={resetLost}>Pierde</p>
      <button id="lost" onClick={setLoseState}>
        {state[index].bidsLost}
      </button>
    </div>
  );
}

export default PlayerGrid;

// function PlayerGrid({ name, players }) {
//   const [control, setControl] = React.useState({
//     name: name,
//     bid: 0,
//     win: false,
//     bidsLost: 0,
//     score: 0,
//   });

//   const handleControl = (item, action) => {
//     setControl((prevState) => {
//       return {
//         ...prevState,

//         [item]: action === "up" ? control[item] + 1 : control[item] - 1,
//       };
//     });
//   };

//   return (
//     <div className="player-info-container">
//       <h1>
//         {name} {control.score}
//       </h1>
//         <div className="label-display">
//           <span>Apuesta</span>
//           <div
//             className={
//               parseInt(control.bid) === 0
//               ? "num-display"
//               : "num-display-active"}>{control.bid}</div>
//         </div>
//           <button className="up-button" onClick={() => handleControl("bet", "up")}>+</button>
//           <button className="down-button" onClick={() => handleControl("bet", "down")}>-</button>
//         <div className="label-display">
//           <span>Pierde</span>
//           <div className={ parseInt(control.bidsLost) === 0
//             ? "num-display"
//             : "num-display-active"}>{control.bidsLost}</div>
//         </div>
//         <div className="buttons">
//           <button className="up-button" onClick={() => handleControl("lose", "up")}>+</button>
//           <button className="down-button" onClick={() => handleControl("lose", "down")}>-</button>
//         </div>
//     </div>
//   );
// }

// export default PlayerGrid;

// const [table, setTable] = React.useState(players);

// const saveResults = (e) => {
//   const newScore =
//     parseInt(control.lose) === 0
//       ? control.score + 5 + control.bet
//       : control.score - control.lose;
//   const newControl = {
//     bet: 0,
//     lose: 0,
//     score: newScore,
//   };
//   setControl(newControl);

//   const currentPlayer = players.findIndex((p) => p.name === name);
//   const tableCopy = [...table];
//   function addScore() {
//     tableCopy[currentPlayer].score = newScore;
//     return tableCopy;
//   }
//   setTable(addScore());
//   console.log(table);
// };
