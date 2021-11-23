import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import mainReducer from './reducers/main';
import newsReducer from './reducers/news';


let rootReducer = combineReducers ({
	mainPage: mainReducer,
	newsPage: newsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;