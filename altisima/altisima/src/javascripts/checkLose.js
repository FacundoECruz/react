function checkLose(finishedRound) {
    const bidsLost = []
    finishedRound.map(p => {
        bidsLost.push(p.bidsLost)
    })
    const check = bidsLost.every(p => p === 0)
    return check;
}

export default checkLose;