import styled, { keyframes } from 'styled-components';

const errorAnim = keyframes`
  from {
    transform: translateY(8rem);
  }

  to {
    transform: translateY(0);
  }
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;

  width: 100%;

  padding: 1rem 2rem;

  animation: ${errorAnim} 2s linear;

  background-color: #900;
`;

export const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ErrorSvg = styled.div`
  width: 4rem;
  height: 4rem;
  fill: white;
`;

export const ErrorTitle = styled.p`
  font-size: 2rem;
`;
