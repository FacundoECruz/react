function calculateTable(tableState) {
  
    const pointsForWin = 5;

    tableState.map((p) => {
      if (p.bidsLost === 0) {
        const winInRound = pointsForWin + p.bid
        p.score = p.score + winInRound;
        p.win = true;
        p.history.push(winInRound)
      } else {
        p.score = p.score - p.bidsLost;
        p.history.push(p.score)
      }
    });
    return tableState;
  }

export default calculateTable;
