import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import login from "../reducers/login";
import register from "../reducers/register";

const rootReducer = (combineReducers)({
  login: login,
  register: register,
})


// const initialState = {};
let initialState = {
  user: {},
  loading: false,
  error: {}
};
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

console.log(store.getState())

export default store;

