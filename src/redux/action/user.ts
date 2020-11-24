import IUser from "../../model/IUser";
import IStudent from "../../model/IStudent";
import ITeacher from "../../model/ITeacher";
import * as USER_ACTIONS from "../actionType/user";
import IAction from "../model/IAction";

export const changeLogin = (profession?: "TEACHER" | "STUDENT"): IAction => ({
  type: USER_ACTIONS.LOGIN_FINALLY,
  payload: profession,
});

export const changeUser = (user: IUser): IAction => ({
  type: USER_ACTIONS.CHANGE_USER,
  payload: user,
});

export const saveStudent = (student: IStudent): IAction => ({
  type: USER_ACTIONS.SAVE_STUDENT,
  payload: student,
});

export const saveTeacher = (teacher: ITeacher): IAction => ({
  type: USER_ACTIONS.SAVE_TEACHER,
  payload: teacher,
});

export const deleteStudent = (email: string): IAction => ({
  type: USER_ACTIONS.DELETE_STUDENT,
  payload: email,
});

// export const updateStudent = (clas: string): IAction => ({
//   type: USER_ACTIONS.UPDATE_STUDENT,
//   payload: clas,
// });
