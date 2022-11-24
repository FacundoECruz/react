import React, { useState } from 'react';
import FormTask from './FormTask';
import '../stylesheets/ListTask.css'

function ListTask() {

  const [tasks, setTask] = useState([]);

  return (
    <>
      <FormTask />
      <div className='task-list-container'>
        LISTA DE TAREAS 
      </div>
    </>
  )
}

export default ListTask;