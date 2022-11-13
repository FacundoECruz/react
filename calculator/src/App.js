import React from 'react';
import logo from './images/logo.jpg'
import './App.css'
import Button from './components/Button'

function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        <img
          src={logo}
          className='logo'
          alt='logo' />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
