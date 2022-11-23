import React from 'react';

function FormTask(props) {
  return (
    <form className='task-form'>            
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  )
}

export default FormTask;