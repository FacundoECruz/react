import React, { useState } from 'react';
import FormTask from './FormTask';
import Task from './Task';
import '../stylesheets/ListTask.css'

function ListTask() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    console.log(task)
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTask(updatedTasks);
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTask(updatedTasks);
  }

  const crossOutTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTask(updatedTasks);
  }

  return (
    <>
      <FormTask onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              crossOutTask={crossOutTask}
              deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  )
}

export default ListTask;