import React from 'react';
import { NavigationLink } from '../../components';
import { navItems } from '../../helpers/navItems';
import { Navigation } from './NavigationPage.style';

const NavigationPage: React.FC = (): JSX.Element => {
  return (
    <Navigation>
      {navItems.map((item) => (
        <NavigationLink key={item.path} path={item.path} title={item.title} />
      ))}
    </Navigation>
  );
};

export default NavigationPage;
