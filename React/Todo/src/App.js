import PendingWorks from './components/PendingWorks';
import Workdone from './components/Workdone';
import './App.css';
import { useState } from 'react';



function App() {
  let [task, setTask] = useState("");
  let [arr, setArr] = useState([]);
  let [wdArr, setWdArr] = useState([]);

  let handleTask = (e) => {
    let ntask = e.target.value;
    // console.log("ntask "+ntask);
    setTask(ntask);
    // console.log("task "+task);
  }

  let handleAddTask = (e) => {
    let narr = [...arr, task];
    setArr(narr);
    console.log("task " + task);
    // task = "";
    setTask("");
  }

  let callBack = (task) => {
    // console.log(task + "-");
    let nwdArr = [...wdArr, task];
    setWdArr(nwdArr);
    let narr = arr.filter(t => {
      if (t === task) {
        return false;
      }
      else {
        return true;
      }
    })
    setArr(narr);
  }

  let callBackWd = (task) => {
    let nwdArr = wdArr.filter(t => {
      if (task === t) {
        return false;
      }
      else {
        return true;
      }
    })
    setWdArr(nwdArr);
  }

  let handleReset = () => {
    setArr([]);
    setWdArr([]);
  }

  


  return (
    <>
      <div className='header'>
        <h2>ToDo List</h2>
        <input type={Text} value={task} onChange={handleTask}></input>
        <button type='' onClick={handleAddTask}>Add Work</button>
      </div>
      <div className='body'>
        <PendingWorks className='pending' tasks={arr} handleCallback={callBack} />
        <Workdone className='workdone' tasks={wdArr} handleCallbackWd={callBackWd} />
      </div>
      <div className='footer'>
        <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}

export default App;
