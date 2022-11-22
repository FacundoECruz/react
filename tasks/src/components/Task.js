import React from 'react';
import '../stylesheets/Task.css'
import { IoTrashOutline } from 'react-icons/ai';

function Task({ text, complete }) {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='task-icon-container'>
        <IoTrashOutline className='task-icon'/>
      </div>
    </div>    
  )
}

export default Task;