import styled from 'styled-components';

export const InputFileWrapper = styled.div``;

export const InputFileS = styled.input`
  position: absolute;
  z-index: -1;

  overflow: hidden;

  opacity: 0%;
`;

export const InputFileLabel = styled.label`
  display: block;

  width: 100%;

  padding: 1rem;

  cursor: pointer;
  text-align: center;

  color: #555;
  border: 0.2rem solid #555;

  line-height: 0.4rem;
`;

export const InputFileSpan = styled.span`
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
`;
