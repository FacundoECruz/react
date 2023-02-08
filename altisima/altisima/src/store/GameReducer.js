import calculateTable from "../javascripts/calculateTable";
import checkLose from "../javascripts/checkLose";

const dataFromLocalStorage = window.localStorage.getItem("GameCreated");
const gameData = JSON.parse(dataFromLocalStorage);
const { cardsPerRound, players } = gameData;

const gameState = {
  round: 1,
  players,
  table: [],
  cleaned: true,
  inProgress: true,
};

const types = {
  addBid: "bid - add",
  resetBid: "bid - reset",
  addLost: "lost - add",
  resetLost: "lost - reset",
  nextRound: "round - next",
  clean: "round - clean",
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case types.addBid: {
      return {
        ...state,
        bid: (state.players[action.index].bid += 1),
        cleaned: false,
      };
    }
    case types.resetBid: {
      let newState = { ...state };
      newState.players[action.index].bid = 0;
      return newState;
    }
    case types.addLost: {
      return {
        ...state,
        bidsLost: (state.players[action.index].bidsLost += 1),
        cleaned: false,
      };
    }
    case types.resetLost: {
      let newState = { ...state };
      newState.players[action.index].bidsLost = 0;
      return newState;
    }
    case types.nextRound: {
      let newState = { ...state };
      if (checkLose(newState.players)) {
        window.alert("No pueden ganar todos!!");
      } else {
        const table = calculateTable(newState.players);
        newState.table = table;
        if (newState.round === 9) {
          newState.inProgress = false;
        } else {
          newState.round = newState.round += 1;
        }
        newState.cleaned = true;
      }
      console.log(newState.players);
      return newState;
    }
    case types.clean: {
      let newState = { ...state };
      newState.players.map((p) => {
        p.bid = 0;
        p.bidsLost = 0;
      });
      newState.cleaned = false;
      return newState;
    }
    default:
      return state;
  }
};

export { gameState, types, cardsPerRound };
export default gameReducer;
