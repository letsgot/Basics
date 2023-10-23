import React from 'react'
import { connect } from 'react-redux';
// import {buyBall} from './redux/Ball/BallAction'
import {buyBat} from './redux/Bat/BatAction'
function BatContainer(props) {
    console.log(props);
  return (
    <div>
        <h2>Total Bat Left : {props.numOfBats}</h2>
        <button onClick={props.buyBat}>Buy Ball</button>
    </div>
  )
}

// first method for reading from global state/store
const mapStateToProps = state=>{
    return {
        numOfBats : state.bat.numOfBats
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyBat : ()=>dispatch(buyBat())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BatContainer)