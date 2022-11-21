import logo from '../images/logo.jpg'

function Input(props) {
  return(
    <div className='main-input-container'>
      <img src={logo} />
      <h2>Agregar jugadores</h2>
      <div className='input-field'>
        <input type='text' className='input' />
      </div>
    </div>
  )
}

export default Input