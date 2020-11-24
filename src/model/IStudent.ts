import IUser from "./IUser";

interface IStudent extends IUser {
  class: string;
  ects: number;
}

export default IStudent;
