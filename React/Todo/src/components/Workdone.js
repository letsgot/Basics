import React from 'react'
import './Workdone.css'
function Workdone(props) {
  // let tasks = props.tasks;

  let handleDone = (task)=>{
     props.handleCallbackWd(task);
  }

  return (
    <div className='pending'>
      <div>Workdone</div>
      <div>
        { props.tasks.map(task => 
          <div>{ task } <button onClick={()=>handleDone(task)}>Done</button></div>
        )}
      </div>
    </div>
  )
}

export default Workdone