const Buy_Bat = 'Buy_Bat';
let initialState = {
    numOfBats : 20
}
const Batreducer = (state=initialState,action)=>{
    switch (action.type) {
        case Buy_Bat:
            return {...state,numOfBats : state.numOfBats-1};
            
    
        default:
          return state;
    }
}

export default Batreducer;