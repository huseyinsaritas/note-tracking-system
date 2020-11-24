import { Reducer } from "redux";
import IAction from "../model/IAction";
import IStudentState from "../model/IStudentState";
// import * as USER_ACTIONS from "../actionType/user";

const initialStudentState: IStudentState = {
  username: "hsynsrts",
  password: "1234",
  email: "huseyin@gmail.com",
  class: "1C",
  ects: 0,
};

const studentReducer: Reducer<IStudentState, IAction> = (state: IStudentState = initialStudentState, action: IAction): IStudentState => {
  return initialStudentState;
};

export default studentReducer;
