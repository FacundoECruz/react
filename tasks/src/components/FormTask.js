import React, { useState } from 'react';
import '../stylesheets/FormTask.css'

function FormTask(props) {

  const [input, setInput] = useState('');

  const changeHandler = e => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const sendHandler = e => {
    const newTask = {
      id: '234234',
      text: 'Hello'
    }
  }

  return (
    <form className='task-form'>            
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={changeHandler}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  )
}

export default FormTask;