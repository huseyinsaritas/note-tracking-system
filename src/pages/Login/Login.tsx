import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeLogin, changeUser } from "../../redux/action/user";
import IUserState from "../../redux/model/IUserState";
import IUser from "../../model/IUser";

const Login = () => {
  const [tempUserState, setTempUserState] = useState<IUser>({ password: "", email: "" });
  const { isLoggedIn, user, students, teachers } = useSelector((state: IUserState) => ({
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    students: state.students,
    teachers: state.teachers,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.replace("/");
    }
  }, [history, isLoggedIn]);

  const inputOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTempUserState = { ...tempUserState };
    if (event.target.name === "password") {
      newTempUserState.password = event.target.value;
    }
    if (event.target.name === "email") {
      newTempUserState.email = event.target.value;
    }
    setTempUserState(newTempUserState);
  };

  console.log(user);

  const onLogin = () => {
    let findUser = students.find((student) => student.email === tempUserState.email && student.password === tempUserState.password);
    if (findUser) {
      dispatch(changeLogin("STUDENT"));
      dispatch(changeUser(findUser));
    } else {
      findUser = teachers.find((teacher) => teacher.email === tempUserState.email && teacher.password === tempUserState.password);
      if (findUser) {
        dispatch(changeLogin("TEACHER"));
        dispatch(changeUser(findUser));
      } else {
        alert("Email ve şifrenizi kontrol ediniz");
      }
    }
  };

  return (
    <div>
      <div>Login</div>
      <input type="email" name="email" value={tempUserState?.email || ""} onChange={inputOnchange} />
      <input type="password" name="password" value={tempUserState?.password || ""} onChange={inputOnchange} />
      <div>
        <button onClick={onLogin}>Login</button>
        <button
          onClick={() => {
            history.replace("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
