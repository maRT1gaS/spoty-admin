import styled from 'styled-components';

interface ButtonStyleProps {
  readonly bgWarning?: boolean;
}

const defaultColorRgb = '127, 255, 0';
const warningColorRgb = '238, 75, 43';

export const ConfirmationScreen = styled.div`
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
`;

export const ConfirmationWrap = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem;

  text-align: center;

  border-radius: 1rem;

  background-color: #808080;
  gap: 2rem;
`;

export const ConfirmationText = styled.h2`
  font-size: 1.4rem;
`;

export const ConfirmationBtnCon = styled.div`
  display: flex;
  gap: 2rem;

  justify-content: space-evenly;
`;

export const ConfirmationBtn = styled.button<ButtonStyleProps>`
  padding: 1.2rem;

  cursor: pointer;

  color: #EBA4A4;
  border-radius: 50%;
  background-color: rgba(${(props) => (props.bgWarning ? warningColorRgb : defaultColorRgb)}, 0.7);

  font-size: 1.4rem;

  font-weight: 700;

  &:hover {
    background-color: rgba(${(props) => (props.bgWarning ? warningColorRgb : defaultColorRgb)}, 1);
  }
`;
