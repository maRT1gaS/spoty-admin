import React from 'react';
import AdminRoutes from '../../router/AdminRoutes';
import { HomeLink } from '../../components';
import { AdminPageWrapper } from './AdminPage.style';

const Admin: React.FC = (): JSX.Element => (
  <AdminPageWrapper>
    <HomeLink />
    <div>
      <AdminRoutes />
    </div>
  </AdminPageWrapper>
);

export default Admin;
