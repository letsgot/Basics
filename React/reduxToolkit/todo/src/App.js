import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from './features/task/taskSlice'
import { useState } from 'react';
import TodoWork from './components/TodoWork';
import TaskDone from './components/TaskDone';

function App() {

  let [value,setValue] = useState("");
  const dispatch = useDispatch()
  let handleChange = (e)=>{
      setValue(e.target.value);
  }

  let handleClick = ()=>{
     if(value===""){
       
     }
     else{
      dispatch(addTask(value));
      setValue("");
     } 
}

  return (
    <>
      <div>
          <input value={value} type='text' onChange={handleChange}></input>
          <button onClick={handleClick} >+</button>
      </div>
      <TodoWork></TodoWork>
      <TaskDone></TaskDone>
   </>
  );
}

export default App;
