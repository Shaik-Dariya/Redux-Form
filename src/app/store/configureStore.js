import combinedReducer, { history } from "../reducer/rootReducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

const middlewares = [thunk, routerMiddleware(history)];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
    combinedReducer,
    middlewareEnhancer
  );
export default store;