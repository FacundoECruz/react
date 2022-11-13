import './App.css';
import logo from './images/logo.png'
import Button from './componentes/Button'
import Counter from './componentes/Counter'

function App() {

const clickHandler = () => {
  console.log('Click')
}

const resetCounter = () => {
  console.log('Reset')
}

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
        src={logo}
        alt='logo' />
      </div>
      <div className='main-container'>
        <Counter />
        <Button
          text='Click'
          isClickButton={true}
          clickHandler={clickHandler} />
        <Button
          text='Reset'
          isClickButton={false}
          clickHandler={resetCounter} /> 
      </div>
    </div>
  );
}

export default App;
