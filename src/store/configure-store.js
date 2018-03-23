import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from "../reducers/reducers";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const configureStore = function (initialState = {}){
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
