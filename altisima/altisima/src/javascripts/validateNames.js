const validateNames = (players, newPlayer) => {
  let playersList = JSON.parse(players);

  if (playersList.length === 0) {
    return false;
  } else {
    playersList.map((p) => {
      console.log(p.name, newPlayer)
      if (p.name === newPlayer) {
        console.log("REPEATED NAME!!!!")
        return true;
      } 
    });
    return false;
  }
};

export default validateNames;
