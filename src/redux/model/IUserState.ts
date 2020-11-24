import IUser from "../../model/IUser";

interface IUserState extends IUser {
  isLoggedIn: boolean;
}

export default IUserState;
export const initialUserState: IUserState = {
  username: "hsynsrts",
  password: "1234",
  email: "huseyin@gmail.com",
  isLoggedIn: false,
};
