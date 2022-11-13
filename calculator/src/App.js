import React from 'react';
import logo from './images/logo.jpg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        <img
          src={logo}
          className='logo'
          alt='logo' />
      </div>
    </div>
  );
}

export default App;
