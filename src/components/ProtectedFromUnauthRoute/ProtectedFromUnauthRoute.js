import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedFromUnauthRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        props.isLogged
        ? <Component {...props} />
        : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedFromUnauthRoute;