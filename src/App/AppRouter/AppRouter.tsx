import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import * as ROUTER_PATH_TITLE from "../constants/ROUTER_PATH_TITLE";
import RegisterPage from "../../pages/Register/Register";
import LoginPage from "../../pages/Login/Login";
import HomePage from "../../pages/Home/Home";
import NotFoundPage from "../../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTER_PATH_TITLE.REGISTER.PATH} exact component={RegisterPage} />
        <Route path={ROUTER_PATH_TITLE.LOGIN.PATH} exact component={LoginPage} />
        <PrivateRoute path={ROUTER_PATH_TITLE.HOME.PATH} exact component={HomePage} />
        <Route path={ROUTER_PATH_TITLE.NOT_FOUND.PATH} component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
