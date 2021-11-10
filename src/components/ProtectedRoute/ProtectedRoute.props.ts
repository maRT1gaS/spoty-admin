import { RouteComponentProps } from 'react-router-dom';

export interface ProtectedRouteProps {
  isAdmin: boolean;
  isAuth: boolean;
  Component: React.ComponentType<RouteComponentProps> | React.ComponentType;
  path: string;
}
