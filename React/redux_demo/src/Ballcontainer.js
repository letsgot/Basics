import React from 'react'
import { connect } from 'react-redux';
import {buyBall} from './redux/Ball/BallAction'
function Ballcontainer(props) {
console.log(props);
  return (
    <div>
        <h2>Total Ball Left : {props.numOfBalls}</h2>
        <button onClick={props.buyBall}>Buy Ball</button>
    </div>
  )
}


// first method for reading from global state/store
const mapStateToProps = state=>{
    return {
        numOfBalls : state.ball.numOfBalls
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyBall : ()=>dispatch(buyBall())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Ballcontainer)
