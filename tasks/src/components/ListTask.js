import React, { useState } from 'react';
import FormTask from './FormTask';
import Task from './Task';
import '../stylesheets/ListTask.css'

function ListTask() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTask(updatedTasks);
    }
  }

  return (
    <>
      <FormTask onSubmit={addTask} />
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