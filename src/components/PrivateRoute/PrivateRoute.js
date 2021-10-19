import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./loader.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="container mx-auto p-12 flex items-center justify-center">
        <div class="loader"></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
