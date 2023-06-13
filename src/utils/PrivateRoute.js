import React from 'react';
import { Route, Redirect, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = getToken(); // Replace with your authentication logic
const navigate = useNavigate()

  return (
    
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          navigate('/')
        )
      }
    />
  );
};

export default PrivateRoute;