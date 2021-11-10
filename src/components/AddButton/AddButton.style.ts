import styled from 'styled-components';

export const AddButtonS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;

  cursor: pointer;
  transition: all 0.3s linear;

  border-radius: 5rem;

  background-color: rgba(255, 255, 255, 20%);

  &:hover {
    background-color: rgba(255, 255, 255, 60%);
  }

  svg {
    width: 4rem;
    height: 4rem;
  }
`;
