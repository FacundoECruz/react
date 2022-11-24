import React, { useState } from 'react';
import '../stylesheets/FormTask.css'

function FormTask(props) {

  const [input, setInput] = useState('');

  const changeHandler = e => {
    setInput(e.target.value);
  }

  const sendHandler = e => {
    e.preventDefault();
    const newTask = {
      id: '234234',
      text: input,
      completed: false
    }
  }

  return (
    <form 
      className='task-form'
      onSubmit={sendHandler}>
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