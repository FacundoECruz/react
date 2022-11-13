import './App.css';
import logo from './images/logo.png'
import Button from './componentes/Button'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo'
        src={logo}
        alt='logo' />
      </div>
      <div className='main-container'>
        <Button
          text='Click'
          isClickButton={true}
          clickHandler={} />
        <Button
          text='Reset'
          isClickButton={false}
          clickHandler={} /> 
      </div>
    </div>
  );
}

export default App;
