import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import mainReducer from './reducers/main';


let rootReducer = combineReducers ({
	mainPage: mainReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;