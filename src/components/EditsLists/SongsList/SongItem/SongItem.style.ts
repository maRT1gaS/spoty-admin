import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrap = styled.div`
  display: flex;

  margin: 1rem 0;
  padding: 0.5rem 2rem;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  flex: 0 1 40%;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemInfoName = styled.h2`
  font-size: 2rem;
`;

export const ItemSpanWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 20%;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemSpan = styled.span`
  font-size: 1.3rem;
`;

export const ItemBtnCon = styled.div`
  gap: 1rem;

  display: flex;
  flex: 0 1 40%;
  justify-content: flex-end;
`;

export const ItemBtnSvg = styled.button`
  width: 4rem;
  height: 4rem;

  cursor: pointer;

  svg:hover {
    fill: #28BF30;
  }
`;
