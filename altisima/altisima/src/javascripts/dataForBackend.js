function dataForBackend(state) {
    let newStateForBackend = [];
    state.map((p) => {
        let { name, bid, win, bidsLost } = p;
        newStateForBackend.push({
            name: name,
            bid: bid,
            win: win,
            bidsLost: bidsLost,
        });
    });
    return newStateForBackend
}

export default dataForBackend;
