function calculateTable(tableState) {
  
    const pointsByWin = 5;

    tableState.map((p) => {
      if (p.bidsLost === 0) {
        let pointsWinnedInRound = pointsByWin + p.bid
        p.score = p.score + pointsWinnedInRound;
        p.win = true;
        p.history.push(pointsWinnedInRound)
      } else {
        p.score = p.score - p.bidsLost;
        p.history.push(-p.bidsLost)
      }
    });
    return tableState;
  }

export default calculateTable;
