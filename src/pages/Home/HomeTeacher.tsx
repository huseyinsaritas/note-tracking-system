import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IUserState from "../../redux/model/IUserState";
import { deleteStudent } from "../../redux/action/user";
import IStudent from "../../model/IStudent";

const HomeTeacher = () => {
  const { user, students } = useSelector((state: IUserState) => ({
    user: state.user,
    students: state.students,
  }));
  const [studentList, setStudentList] = useState<IStudent[]>(students);
  const [orderKey, setOrderKey] = useState<string>("username");

  useEffect(() => {
    console.log(orderKey);
    studentList.sort((a, b) => {
      console.log(a[orderKey], b[orderKey]);
      if (a[orderKey] > b[orderKey]) return 1;
      if (a[orderKey] < b[orderKey]) return -1;
      return 0;
    });
    setStudentList(studentList);
  }, [orderKey]);

  const dispatch = useDispatch();

  return (
    <div>
      <select
        name="students"
        onChange={(event) => {
          setOrderKey(event.target.value);
        }}
      >
        <option value="username">username</option>
        <option value="email">email</option>
        <option value="class">class</option>
        <option value="ects">ects</option>
      </select>
      <table>
        <tbody>
          {studentList.map((student) => {
            return (
              <tr key={student.username}>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>
                  <input type="text" name="class" value={student.class} onChange={(event) => {}} />
                </td>
                <td>
                  <input type="text" name="ects" value={student.ects} onChange={(event) => {}} />
                </td>
                <td>
                  <button onClick={() => dispatch(deleteStudent(student.email))}>Sil</button>
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
