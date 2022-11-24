import React from 'react';
import FormTask from './FormTask';
import '../stylesheets/ListTask.css'

function TaskList() {
  return (
    <>
      <FormTask />
      <div className='task-list-container'>
        LISTA DE TAREAS 
      </div>
    </>
  )
}

export default TaskList;