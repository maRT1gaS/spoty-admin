import styled from 'styled-components';

export const ListWrapperS = styled.div`
  position: relative;

  overflow-y: auto;

  height: calc(100vh - 15rem);

  &::-webkit-scrollbar {
    width: 1rem;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
`;
