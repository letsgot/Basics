import React from 'react'
import './PendingWorks.css'

function PendingWorks(props) {
  // let tasks = props.tasks;
  // console.log(props.handleCallback);
  let handleWorkDone = (task)=>{
    // console.log(task);
    {props.handleCallback(task)};
  }

  return (
    <div className='pending'>
     <div>PendingWorks</div>
     <div>
       { props.tasks.map(task => 
         <p>{ task } <span><button onClick={()=>handleWorkDone(task)}>Done</button></span></p>
       )}
     </div>
    </div>
  )
}

export default PendingWorks