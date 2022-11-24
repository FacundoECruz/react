import React, { useState } from 'react';
import FormTask from './FormTask';
import Task from './Task';
import '../stylesheets/ListTask.css'

function ListTask() {

  const [tasks, setTask] = useState([]);

  return (
    <>
      <FormTask />
      <div className='task-list-container'>
        {
          tasks.map((task) => 
            <Task 
              text={task.text}
              completed={task.completed} />
          )
        }
      </div>
    </>
  )
}

export default ListTask;