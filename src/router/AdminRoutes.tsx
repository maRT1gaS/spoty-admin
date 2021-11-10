import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Artists, Albums, Songs } from '../screens/AdminScreens/index';

const AdminRoutes: React.FC = (): JSX.Element => (
  <Switch>
    <Route path='/artists' component={Artists} exact />
    <Route path='/artists/artist:idArtist/albums' component={Albums} exact />
    <Route
      path='/artists/artist:idArtist/albums/album:idAlbum/songs'
      component={Songs}
      exact
    />
  </Switch>
);

export default AdminRoutes;
