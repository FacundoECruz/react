import { useState } from 'react'
import logo from '../images/logo.jpg'
import '../stylesheets/Input.css'
import { v4 as uuidv4 } from 'uuid'

function Input(props) {

  const [text, setText] = useState('');

  const changeHandler = e => {
    setText(e.target.value);
  }

  const sendHandler = e => {
    e.preventDefault();

    const newPlayer = {
      id: uuidv4(),
      name: text
    }

    console.log(newPlayer);
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

export default Input