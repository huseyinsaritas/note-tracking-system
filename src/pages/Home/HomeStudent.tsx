import React from "react";
import { useSelector } from "react-redux";
import IUserState from "../../redux/model/IUserState";

const HomeStudent = () => {
  const { user, students } = useSelector((state: IUserState) => ({
    students: state.students,
    user: state.user,
  }));

  return (
    <>
      <div>Welcome {user.username}</div>
      <ol>
        {students
          .sort((a, b) => {
            if (a.ects > b.ects) return -1;
            if (a.ects < b.ects) return 1;
            return 0;
          })
          .map((student) => {
            return (
              <li>
                {student.username} - {student.ects}
              </li>
            );
          })}
      </ol>
    </>
  );
};

export default HomeStudent;
