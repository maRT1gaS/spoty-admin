import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeLinkS = styled(Link)`
  display: flex;

  width: max-content;
  padding: 1rem;

  transition: 0.3s linear;

  border: 0.1rem solid white;

  font-size: 1.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
