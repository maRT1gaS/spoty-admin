import styled from 'styled-components';

const errorColor = '#FF0000';
const validColor = '#00FF00';

interface InputStyleProps {
  length: number;
}

export const InputS = styled.input<InputStyleProps>`
  width: 100%;
  padding: 0.5rem 0.7rem;

  transition: 0.4s linear;

  border: 0.1rem solid
    ${(props) => (props.length > 0 ? validColor : errorColor)};
  border-radius: 1rem;
  outline: none;
  background-color: rgb(0 0 0 / 20%);

  &:focus {
    box-shadow: 0 0 1.8rem 0.9rem
      ${(props) => (props.length > 0 ? validColor : errorColor)};
    box-shadow: 0 0 1.8rem 0.9rem
      ${(props) => (props.length > 0 ? validColor : errorColor)};
    box-shadow: 0 0 1.4rem 0.1rem
      ${(props) => (props.length > 0 ? validColor : errorColor)};
  }
`;
