import logo from '../images/logo.jpg'
import '../stylesheets/Input.css'

function Input(props) {
  return(
    <div className='main-input-container'>
      <div className='logo-container'>
        <img src={logo}/>
      </div>
      <div className='input-container'>
        <h2>Agregar jugadores</h2>
        <input type='text' />
        <div className='input-button'>
          Agregar
        </div>
      </div>
    </div>
  )
}

export default Input