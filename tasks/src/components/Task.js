import React from 'react';
import '../stylesheets/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, completed, crossOutTask, deleteTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div 
        className='task-text'
        onClick={() => crossOutTask(id)}>
        {text}
      </div>
      <div 
        className='task-icon-container'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon'/>
      </div>
    </div>    
  )
}

export default Task;