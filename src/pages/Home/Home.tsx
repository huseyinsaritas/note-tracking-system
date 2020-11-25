import React from "react";
import { useSelector } from "react-redux";
import IUserState from "../../redux/model/IUserState";
import HomeStudent from "./HomeStudent";
import HomeTeacher from "./HomeTeacher";

const Home = () => {
  const { isLoggedIn } = useSelector((state: IUserState) => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  }));

  if (isLoggedIn === "STUDENT") {
    return <HomeStudent />;
  } else if (isLoggedIn === "TEACHER") {
    return <HomeTeacher />;
  }
};

export default Home;
