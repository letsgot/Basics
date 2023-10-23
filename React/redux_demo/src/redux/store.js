// import { legacy_createStore as createStore } from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import BallReducer from "./Ball/BallReducer";
// import Batreducer from './Bat/BatReducer';
// // const store = createStore(BallReducer,composeWithDevTools());
// const store = createStore(Batreducer,composeWithDevTools());

// export default store;

import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;
