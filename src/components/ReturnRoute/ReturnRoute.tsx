import React from 'react';
import { Route } from 'react-router-dom';
import { ReturnRouteProps } from './ReturnRoute.props';

const ReturnRoute: React.FC<ReturnRouteProps> = ({
  urlBack,
}: ReturnRouteProps): JSX.Element => (
  <Route
    path='*'
    component={() => {
      const url = urlBack;
      window.location.href = url;
      return null;
    }}
  />
);

export default ReturnRoute;
