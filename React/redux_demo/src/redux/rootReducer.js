
import { combineReducers } from "redux";
import BallReducer from "./Ball/BallReducer";
import BatReducer from "./Bat/BatReducer";
// import userReducer from "./users/userReducer.js";
const rootReducer = combineReducers({
    ball:BallReducer,
    bat:BatReducer
    // user:userReducer
})
export default rootReducer;