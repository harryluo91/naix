import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import { isAuthed } from '../../utils/authUtils';

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuthenticated = isAuthed();
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}

export default PrivateRoute;
