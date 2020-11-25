import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IUserState from "../../redux/model/IUserState";
import { deleteStudent, updateStudent } from "../../redux/action/user";
import IStudent from "../../model/IStudent";

const HomeTeacher = () => {
  const { user, students } = useSelector((state: IUserState) => ({
    user: state.user,
    students: state.students,
  }));
  const [studentList, setStudentList] = useState<IStudent[]>(students);
  const [orderKey, setOrderKey] = useState<string>("username");
  const [openInput, setOpenInput] = useState<string>("");
  const [studentInfo, setStudentInfo] = useState<{ class: string; ects: number }>();

  useEffect(() => {
    studentList.sort((a, b) => {
      if (a[orderKey] > b[orderKey]) return 1;
      if (a[orderKey] < b[orderKey]) return -1;
      return 0;
    });
    setStudentList(studentList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderKey]);

  const dispatch = useDispatch();

  const inputOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStudentInfo = { ...studentInfo };
    if (event.target.name === "class") {
      newStudentInfo.class = event.target.value;
    }
    if (event.target.name === "ects") {
      newStudentInfo.ects = event.target.value;
    }
    setStudentInfo(newStudentInfo);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>Welcome {user.username}</div>
        <select
          name="students"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setOrderKey(event.target.value);
          }}
        >
          <option value="username">username</option>
          <option value="email">email</option>
          <option value="class">class</option>
          <option value="ects">ects</option>
        </select>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Class</th>
            <th>Ects</th>
          </tr>
          {studentList.map((student) => {
            return (
              <tr key={student.username}>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>{openInput === student.email ? <input type="text" name="class" value={studentInfo.class} onChange={inputOnchange} /> : <span>{student.class}</span>}</td>
                <td>{openInput === student.email ? <input type="text" name="ects" value={studentInfo.ects} onChange={inputOnchange} /> : <span>{student.ects}</span>}</td>
                <td>
                  <button onClick={() => dispatch(deleteStudent(student.email))}>Sil</button>
                  {openInput === student.email ? (
                    <button
                      onClick={() => {
                        dispatch(updateStudent(student.email, studentInfo.class, studentInfo.ects));
                        setOpenInput("");
                      }}
                    >
                      Kaydet
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setOpenInput(student.email);
                        setStudentInfo({ class: student.class, ects: student.ects });
                      }}
                    >
                      Düzenle
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTeacher;
