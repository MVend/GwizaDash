import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthToken from './authToken';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ props }) =>
      AuthToken.isLoggedIn() ? <Component {...props} /> : <Navigate to="/login" replace={true} />
    }
  />
);
export default PrivateRoute;
