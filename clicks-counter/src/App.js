import './App.css';
import logo from './images/logo.png'
import Button from './componentes/Button'
import Counter from './componentes/Counter'
import {useState} from 'react'

function App() {

const [clicksNum, setNumClicks] = useState(0);

const clickHandler = () => {
  setNumClicks(clicksNum + 1);
}

const resetCounter = () => {
  setNumClicks(0);
}

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
        src={logo}
        alt='logo' />
      </div>
      <div className='main-container'>
        <Counter 
        clicksNum={clicksNum} />
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
