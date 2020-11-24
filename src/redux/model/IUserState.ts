import IStudent from "../../model/IStudent";
import ITeacher from "../../model/ITeacher";
import IUser from "../../model/IUser";

interface IUserState {
  user?: IUser;
  students: IStudent[];
  teachers: ITeacher[];
  isLoggedIn?: "TEACHER" | "STUDENT";
}

export const initialUserState: IUserState = {
  user: undefined,
  students: [],
  teachers: [],
  isLoggedIn: undefined,
};

export default IUserState;
