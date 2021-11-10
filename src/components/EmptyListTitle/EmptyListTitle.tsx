import React from 'react';
import { EmptyListTitleProps } from './EmptyListTitle.props';
import { Title } from './EmptyListTitle.style';

export const EmptyListTitle: React.FC<EmptyListTitleProps> = ({
  text,
}: EmptyListTitleProps): JSX.Element => {
  return <Title>{text}</Title>;
};
