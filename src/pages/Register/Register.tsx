import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeUser, saveStudent, saveTeacher } from "../../redux/action/user";
import Title from "../../model/Title";
import IUser from "../../model/IUser";

const Register = () => {
  const [tempUserState, setTempUserState] = useState<IUser>({ username: "", password: "", email: "" });
  const [studentClass, setStudentClass] = useState<string>("");
  const [teacherTitle, setTeacherTitle] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const inputOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTempUserState = { ...tempUserState };
    if (event.target.name === "username") {
      newTempUserState.username = event.target.value;
    }
    if (event.target.name === "password") {
      newTempUserState.password = event.target.value;
    }
    if (event.target.name === "email") {
      newTempUserState.email = event.target.value;
    }
    setTempUserState(newTempUserState);
  };

  const titleOptions = Object.entries(Title).map(([key, value]) => ({ label: key, value }));
  // console.log(titleOptions);

  let content;
  if (profession === "") {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              setProfession("student");
            }}
          >
            Öğrenci
          </button>
          <button
            onClick={() => {
              setProfession("teacher");
            }}
          >
            Öğretmen
          </button>
        </div>
      </div>
    );
  } else if (profession === "teacher") {
    content = (
      <div>
        <label htmlFor="titles">Choose a title:</label>
        <select name="titles" id="titles">
          {titleOptions.map((title) => {
            return (
              <option
                key={title.value}
                value={title.label}
                onChange={(event) => {
                  setTeacherTitle(event.target.value);
                }}
              >
                {title.value}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else if (profession === "student") {
    content = (
      <>
        <input type="text" name="class" placeholder="Class" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStudentClass(event.target.value)} />
        <input type="number" name="ectc" placeholder="Ectc" disabled value="0" />
      </>
    );
  }
  return (
    <div>
      <div>Register</div>
      <input type="text" name="username" placeholder="username" onChange={inputOnchange} />
      <input type="password" name="password" placeholder="password" onChange={inputOnchange} />
      <input type="email" name="email" placeholder="email" onChange={inputOnchange} />
      {content}
      <button
        onClick={() => {
          dispatch(changeUser(tempUserState));
          // console.log("tempUserState", tempUserState);
          if (profession === "student") {
            dispatch(saveStudent({ ...tempUserState, ects: 0, class: studentClass }));
          } else if (profession === "teacher") {
            dispatch(saveTeacher({ ...tempUserState, title: teacherTitle }));
          }
          history.replace("/login");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
