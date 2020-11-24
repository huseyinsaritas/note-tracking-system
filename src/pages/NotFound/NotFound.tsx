import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { NOT_FOUND } from "../../App/constants/ROUTER_PATH_TITLE";

const NotFound = () => {
  const history = useHistory();

  document.title = NOT_FOUND.TITLE;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      history.push("/");
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [history]);

  return (
    <>
      <span>Not Found. Redirecting to home page...</span>
    </>
  );
};

export default NotFound;
