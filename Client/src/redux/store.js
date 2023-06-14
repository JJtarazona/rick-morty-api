import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

// todo --  Del ejempplo de Jorge este me da un error
// todo -->> import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// todo--> const store = createStore(
// todo--  rootReducer,
// todo-- composeEnhancer(applyMiddleware(thunkMiddleware, composeEnhancer))
// );

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
