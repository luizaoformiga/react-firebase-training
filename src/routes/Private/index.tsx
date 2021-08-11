import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { isAuthenticated } from "@/services/auth";
import { MyProps } from './repository';

const PrivateRoute: React.FC<MyProps> = ({ component: Component, ...rest }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated() ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/", state: { from: props.location.pathname } }}
              />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default PrivateRoute;
