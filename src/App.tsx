import React, { useEffect } from "react";
import AppRouter from "./App/AppRouter/AppRouter";
import "./App.css";
import { students, teachers } from "./data/mockData";
import { useDispatch } from "react-redux";
import { saveStudent, saveTeacher } from "./redux/action/user";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    students.forEach((student) => {
      dispatch(saveStudent(student));
    });

    teachers.forEach((teacher) => {
      dispatch(saveTeacher(teacher));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
