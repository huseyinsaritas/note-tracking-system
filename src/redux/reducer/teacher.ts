import { Reducer } from "redux";
import IAction from "../model/IAction";
import ITeacherState from "../model/ITeacherState";
// import * as USER_ACTIONS from "../actionType/user";
import Title from "../../model/Title";

const initialTeacherState: ITeacherState = {
  username: "hsynsrts",
  password: "1234",
  email: "huseyin@gmail.com",
  title: Title.Prof,
};

const teacherReducer: Reducer<ITeacherState, IAction> = (state: ITeacherState = initialTeacherState, action: IAction): ITeacherState => {
  return initialTeacherState;
};

export default teacherReducer;
