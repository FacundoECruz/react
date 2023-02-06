import nextRound from "../javascripts/nextRound";

const dataFromLocalStorage = window.localStorage.getItem("GameCreated");
const gameData = JSON.parse(dataFromLocalStorage)
const { cardsPerRound, players } = gameData;

const gameState = {
  round: 1,
  players,
  table: []
}

const types = {
  addBid: "bid - add",
  resetBid: "bid - reset",
  addLost: "lost - add",
  resetLost: "lost - reset",
  nextRound: "round - next",
  clean: "round - clean"
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case types.addBid: {
      return {
        ...state,
        bid: state.players[action.index].bid += 1
      };
    }
    case types.resetBid: {
      let newState = {...state}
      newState.players[action.index].bid = 0
      return newState;
    }
    case types.addLost: {
      return {
        ...state,
        bidsLost: (state.players[action.index].bidsLost += 1),
      };
    }
    case types.resetLost: {
      let newState = {...state}
      newState.players[action.index].bidsLost = 0
      return newState;
    }
    case types.nextRound: {
      let newState = {...state}
      const table = nextRound(newState.players)
      console.log(table)
      newState.table = table
      newState.round = newState.round += 1
      return newState
    }
    case types.clean: {
      let newState = {...state}
      newState.players.map(p => {
        p.bid = 0
        p.bidsLost = 0
      })
      return newState
    }
    default:
      return state;
  }
};

export { gameState, types };
export default gameReducer;
