import { combineReducers } from "redux";
import ICombinedState from "../model/ICombinedState";
import IAction from "../model/IAction";

import user from "./user";
import student from "./student";
import teacher from "./teacher";

const rootReducer = combineReducers<ICombinedState, IAction>({ user, student, teacher });

export default rootReducer;
