import IUser from "./IUser";
import Title from "./Title";

interface ITeacher extends IUser {
  title: Title;
}

export default ITeacher;
