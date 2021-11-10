import styled from 'styled-components';

export const SongItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1.5rem;

  border-radius: 1rem;
`;

export const SongItemContent = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 95%;
`;

export const SongItemPlace = styled.div`
  flex: 0 1 3%;

  text-decoration: underline;

  color: green;

  font-size: 2rem;
`;

export const SongItemInfo = styled.div`
  flex: 0 1 90%;
`;

export const SongItemName = styled.h3`
  color: rgba(255, 255, 255, 0.9);

  font-size: 1.7rem;
`;

export const SongItemSecondInfo = styled.div`
  margin-top: 0.5rem;
`;

export const SongItemListener = styled.div`
  flex-basis: 3%;

  font-size: 2rem;
`;

export const SongItemTime = styled.span`
  color: rgba(255, 255, 255, 0.9);

  font-size: 1.7rem;
`;
