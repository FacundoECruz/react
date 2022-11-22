import React from 'react';
import '../stylesheets/Task.css'

function Task({ text }) {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='task-icon'>
        Eliminar
      </div>
    </div>    
  )
}

export default Task;