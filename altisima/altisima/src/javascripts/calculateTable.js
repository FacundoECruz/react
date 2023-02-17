function calculateTable(tableState) {
  
    const pointsByWin = 5;

    tableState.map((p) => {
      if (p.bidsLost === 0) {
        let winInRound = pointsByWin + p.bid
        p.score = p.score + winInRound;
        p.win = true;
        p.history.push(winInRound)
      } else {
        p.score = p.score - p.bidsLost;
        p.history.push(-p.bidsLost)
      }
    });
    return tableState;
  }

export default calculateTable;
