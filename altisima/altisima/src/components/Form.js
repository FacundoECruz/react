import { useState } from "react";
import logo from "../images/logo.jpg";
import "../stylesheets/Form.css";
import { v4 as uuidv4 } from "uuid";
import Player from "../components/Player";

function Input({ name, onChange, onSubmit }) {
  return (
    <div className="main-input-container">
      <div className="logo-container">
        <img src={logo} alt="..." />
      </div>
      <div className="input-container">
        <h2>Agregar jugadores</h2>
        <form className="player-form" onSubmit={onSubmit} autoComplete="off">
          <input
            className="player-input"
            type="text"
            placeholder="Nombre del jugador"
            name="name"
            value={name}
            onChange={onChange}
          />
          <button className="input-button">Agregar</button>
        </form>
      </div>
    </div>
  );
}

function List({ players, setPlayers }) {
  const deletePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  };

  function handleClick() {
    
    window.localStorage.setItem("players", players)
  }

  return (
    <>
      <div className="list-container">
        {players.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            deletePlayer={deletePlayer}
          />
        ))}
        {players.length >= 3 ? (
          <button
            className="start-button"
            onClick={handleClick}>
            Start
          </button>
        ) : null}
      </div>
    </>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);

  const addPlayer = (e) => {
    e.preventDefault();

    const newPlayer = {
      id: uuidv4(),
      name: name,
    };

    if (newPlayer.name.trim()) {
      newPlayer.name = newPlayer.name.trim();
      const updatedPlayers = [...players, newPlayer];
      setPlayers(updatedPlayers);
      setName("");
    }
  };

  return (
    <div className="form-container">
      <Input
        name={name}
        onChange={(e) => setName(e.target.value)}
        onSubmit={addPlayer}
      />
      <List players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default Form;
