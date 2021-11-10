import styled from 'styled-components';

export const EditModalWrapperBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgb(0 0 0 / 60%);
`;

export const EditModalWrapperWindow = styled.div`
  padding: 1.5rem;

  border-radius: 1rem;
  background-color: #FFF;
`;
