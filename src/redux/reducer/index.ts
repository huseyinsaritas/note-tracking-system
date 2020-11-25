import { Reducer } from "redux";
import IAction from "../model/IAction";
import IUserState, { initialUserState } from "../model/IUserState";
import * as USER_ACTIONS from "../actionType/user";

const userReducer: Reducer<IUserState, IAction> = (state: IUserState = initialUserState, action: IAction): IUserState => {
  switch (action.type) {
    case USER_ACTIONS.LOGIN_FINALLY:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case USER_ACTIONS.LOGOUT_FINALLY:
      return initialUserState;

    case USER_ACTIONS.CHANGE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case USER_ACTIONS.SAVE_TEACHER:
      const teachers = state.teachers;
      teachers.push(action.payload);
      return {
        ...state,
        teachers,
      };

    case USER_ACTIONS.SAVE_STUDENT:
      const students = state.students;
      students.push(action.payload);
      return {
        ...state,
        students,
      };

    case USER_ACTIONS.DELETE_STUDENT:
      let indexStudent = state.students.findIndex((student) => student.email === action.payload);
      let studentList = state.students;
      if (indexStudent > -1) {
        studentList.splice(indexStudent, 1);
      }
      return {
        ...state,
        students: studentList,
      };

    case USER_ACTIONS.UPDATE_STUDENT:
      const studentIndex = state.students.findIndex((student) => student.email === action.payload.email);
      let studentListt = state.students;
      if (studentIndex > -1) {
        studentListt[studentIndex].class = action.payload.class;
        studentListt[studentIndex].ects = action.payload.ects;
      }
      return {
        ...state,
        students: studentListt,
      };
  }
  return initialUserState;
};

export default userReducer;
