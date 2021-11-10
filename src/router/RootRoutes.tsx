import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationPage from '../pages/NavigationPage/NavigationPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage';

const RootRoutes: React.FC = (): JSX.Element => (
  <Switch>
    <Route path='/' component={NavigationPage} exact />
    <Route path='/artists' component={AdminPage} />
    <Route path='/statistics' component={StatisticsPage} exact />
  </Switch>
);

export default RootRoutes;
