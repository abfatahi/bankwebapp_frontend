import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const Index = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...rest} {...props} />
        ) : (
          <Navigate to='/register' />
        );
      }}
    />
  );
};

export default Index;
