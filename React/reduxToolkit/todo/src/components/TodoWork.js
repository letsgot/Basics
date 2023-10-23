import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask,deleteTaskAtTaskDone } from '../features/task/taskSlice'


function TodoWork() {
  
  const dispatch = useDispatch();
  const todoTask = useSelector((state) =>{
    // console.log(state);
     return state.task.todoWork
  });

  const handleClick = (task)=>{
      dispatch(deleteTask(task));
  }

  // console.log(todoTask);
  
  return (
    <>
      <ul>
      {
        todoTask.map((task,i) => (
          <div key={i}>
            <li>{task}</li>
            <div onClick={()=>handleClick(task)}>Done</div>
          </div>
        ))
      }
      </ul>
    </>
  )
}

export default TodoWork