const Buy_Ball = 'Buy_Ball'

let initialState = {
    numOfBalls : 20
}

const BallReducer = (state=initialState,action)=>{
      switch (action.type) {
        case Buy_Ball:
            return {...state,numOfBalls : state.numOfBalls-1};
      
        default:
            return state;
      }
}

export default BallReducer;