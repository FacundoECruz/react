import './App.css';
import { useState } from 'react'
import logo from './images/logo.jpg'
import './stylesheets/Input.css'
import { v4 as uuidv4 } from 'uuid'
import Player from './components/Player'

function Input({onSubmit}) {

  const initialValue = ''

  const [text, setText] = useState(initialValue);

  const changeHandler = e => {
    setText(e.target.value);
  }

  const sendHandler = e => {
    e.preventDefault();

    const newPlayer = {
      id: uuidv4(),
      name: text
    }
    onSubmit(newPlayer);
  }

  return (
    <div className='main-input-container'>
      <div className='logo-container'>
        <img src={logo} alt='...' />
      </div>
      <div className='input-container'>
        <h2>Agregar jugadores</h2>
        <form 
        className='player-form'
        onSubmit={sendHandler}>
          <input
            className='player-input'
            type='text'
            placeholder='Nombre del jugador'
            name='name'
            onChange={changeHandler} />
          <button className='input-button'>
            Agregar
          </button>
        </form>
      </div>
    </div>
  )
}


function List() {

  const [players, setPlayers] = useState([]);

  const addPlayer = player => {
      if (player.name.trim()) {
          player.name = player.name.trim();
          const updatedPlayers = [...players, player];
          setPlayers(updatedPlayers);
      }
  }

  return (
      <>
      <Input onSubmit={addPlayer} />
        <div className='list-container'>
          {
              players.map((player) => 
              <Player
                  key={player.id}
                  id={player.id}
                  name={player.name} />
              )
          }
        </div>
      </>
  );
}
  

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
