import React from 'react';
import { ListWrapperProps } from './ListWrapper.props';
import { ListWrapperS } from './ListWrapper.style';

export const ListWrapper: React.FC<ListWrapperProps> = ({
  children,
}: ListWrapperProps): JSX.Element => {
  return <ListWrapperS>{children}</ListWrapperS>;
};
