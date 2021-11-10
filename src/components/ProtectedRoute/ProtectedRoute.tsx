import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRouteProps } from './ProtectedRoute.props';
import ReturnRoute from '../ReturnRoute/ReturnRoute';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAdmin,
  Component,
  isAuth,
  path,
}: ProtectedRouteProps): JSX.Element => {
  if (isAuth) {
    if (isAdmin) {
      return <Route path={path} component={Component} />;
    }
    return <ReturnRoute urlBack='http://localhost:9000/' />;
  }
  return <ReturnRoute urlBack='http://localhost:9000/login' />;
};
