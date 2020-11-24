import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import IUserState from "../../../redux/model/IUserState";
import { LOGIN } from "../../constants/ROUTER_PATH_TITLE";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state: IUserState) => state.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN.PATH,
              state: { from: routeProps.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
