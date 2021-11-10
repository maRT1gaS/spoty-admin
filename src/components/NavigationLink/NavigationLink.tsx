import React from 'react';
import { NavigationLinkProps } from './NavigationLink.props';
import { CustomLink } from './NavigationLink.style';

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  path,
  title,
}: NavigationLinkProps): JSX.Element => {
  return <CustomLink to={path}>{title}</CustomLink>;
};
