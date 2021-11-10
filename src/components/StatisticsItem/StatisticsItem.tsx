import React from 'react';
import { StatisticsItemProps } from './StatisticsItem.props';
import { StatisticsItemWrap, Title, Span } from './StatisticsItem.style';

export const StatisticsItem: React.FC<StatisticsItemProps> = ({
  title,
  stats,
}: StatisticsItemProps): JSX.Element => {
  return (
    <StatisticsItemWrap>
      <Title>{title}</Title>
      <Span>{stats}</Span>
    </StatisticsItemWrap>
  );
};
