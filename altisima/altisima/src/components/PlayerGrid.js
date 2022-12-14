import React from "react";
import "../stylesheets/PlayerGrid.css";

function PlayerGrid ({name, players}) {


  return (
    <div className="player-info-container">
      <h2>{name}</h2>
      <label htmlFor="bid">Apuesta</label>
      <input type="number" id="bid" value={players.bid}/>
      
      <label htmlFor="bidsLost">Pierde</label>
      <input type="number" id="bidsLost" value={players.bidsLost} />
    </div>
  )
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
