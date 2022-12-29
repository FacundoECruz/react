//Que tengo que pasarle a esta funcion para que funcione?
//-Cantidad de jugadores

function createCardsPerRound(players) {
  const defaultRounds = 9;
  const cardsInDeck = 40;
  let cardsPerRound = [];

  const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  for (let i = 0; i < defaultRounds; i++) {
    let maxCardsByRound = cardsInDeck / players;
    const minCardsByRound = 3;
    cardsPerRound[i] = randomNum(minCardsByRound, maxCardsByRound + 1);
  }
  console.log(cardsPerRound);
}

export default createCardsPerRound;
