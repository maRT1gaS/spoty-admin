import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArtistItemWrap = styled.div`
  padding: 0.5rem 2rem;
`;

export const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.3s linear;

  &:hover {
    background-color: rgba(255, 255, 255, 20%);
  }
`;

export const ArtistItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  flex: 0 1 40%;
`;

export const ArtistItemImg = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`;

export const ArtistItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArtistItemInfoName = styled.h2`
  font-size: 2rem;
`;

export const ArtistItemAlbums = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 20%;
  flex-direction: column;
  gap: 1rem;
`;

export const ArtistItemAlbumsSpan = styled.span`
  font-size: 1.3rem;
`;

export const ArtistItemBtnCon = styled.div`
  gap: 1rem;

  display: flex;
  flex: 0 1 40%;
  justify-content: flex-end;
`;

export const ArtistItemBtnSvg = styled.button`
  width: 4rem;
  height: 4rem;

  cursor: pointer;

  svg:hover {
    fill: #28BF30;
  }
`;
