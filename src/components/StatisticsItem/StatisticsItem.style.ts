import styled from 'styled-components';

export const StatisticsItemWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: max-content;
  padding: 1rem;

  border: 0.1rem solid white;
  gap: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
`;

export const Span = styled.span`
  text-decoration: underline;

  font-size: 1.5rem;
`;
