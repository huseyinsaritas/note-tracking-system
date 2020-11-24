import IUserState from "./IUserState";
import IStudentState from "./IStudentState";
import ITeacherState from "./ITeacherState";

interface ICombinedState {
  user: IUserState;
  student: IStudentState;
  teacher: ITeacherState;
}

export default ICombinedState;
