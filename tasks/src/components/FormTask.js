import React, { useState } from 'react';
import '../stylesheets/FormTask.css'
import { v4 as uuidv4 } from 'uuid'

function FormTask(props) {

  const [input, setInput] = useState('');

  const changeHandler = e => {
    setInput(e.target.value);
  }

  const sendHandler = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    console.log(newTask);
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