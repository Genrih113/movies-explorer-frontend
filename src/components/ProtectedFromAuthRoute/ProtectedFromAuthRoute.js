import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedFromAuthRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        !props.isLogged
        ? <Component {...props} />
        : <Redirect to="/movies" />
      }
    </Route>
  );
};

export default ProtectedFromAuthRoute;