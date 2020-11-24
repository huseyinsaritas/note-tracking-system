import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import rootReducer from "./reducer";
import IUserState from "./model/IUserState";
import IAction from "./model/IAction";

const createAppStore = () => {
  let storeEnhancer = applyMiddleware(thunk as ThunkMiddleware<IUserState, IAction>);

  const store = createStore(rootReducer, storeEnhancer);
  return store;
};

export default createAppStore;
