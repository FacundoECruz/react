import React from 'react'
import logo from './images/logo.jpg'
import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton'
import { useState } from 'react'

function App() {

const [input, setInput] = useState('')

const addInput = val => {
  setInput(input + val);
}

  return (
    <div className='App'>
      <div className='title-container'>
        <img
          src={logo}
          className='logo'
          alt='logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button></div>
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button></div>
        <div className='row'>
          <Button clickHandler={addInput}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
