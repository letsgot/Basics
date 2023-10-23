import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask,deleteTaskAtTaskDone } from '../features/task/taskSlice'


function TaskDone() {
  
  const dispatch = useDispatch();
  const taskDone = useSelector((state) =>{
    // console.log(state);
     return state.task.taskDone
  });

  const handleClick = (task)=>{
      dispatch(deleteTaskAtTaskDone(task));
  }

  
  
  return (
    <>
      <ul>
      {
        taskDone.map((task,i) => (
          <div key={i}>
            <li>{task}</li>
            <div onClick={()=>handleClick(task)}>Delete</div>
          </div>
        ))
      }
      </ul>
    </>
  )
}

export default TaskDone