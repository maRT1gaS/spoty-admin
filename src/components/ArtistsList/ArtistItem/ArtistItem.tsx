import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArtistItemProps } from './ArtistItem.props';
import {
  ArtistItemWrap,
  ArtistItemContent,
  ArtistItemImg,
  ArtistItemInfo,
  ArtistItemInfoName,
  ArtistItemAlbums,
  ArtistItemBtnCon,
  ArtistItemAlbumsSpan,
  ArtistItemBtnSvg,
  StyleLink,
} from './ArtistItem.style';
import { Tags } from '../../Tags/Tags';
import EditIcon from '../../../assets/svg/edit.svg';
import RemoveIcon from '../../../assets/svg/remove.svg';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { fetchDelArtist } from '../../../redux/slices/artistsSlice';
import { closeConfirmation } from '../../../redux/slices/confirmationSlice';
import { openEditWindow, deleteItem } from '../../../helpers/editFunc';

export const ArtistItem: React.FC<ArtistItemProps> = ({
  artist,
}: ArtistItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const delArtist = (idArtist: string): void => {
    dispatch(fetchDelArtist(idArtist));
    dispatch(closeConfirmation());
  };

  return (
    <ArtistItemWrap>
      <StyleLink to={`${location.pathname}/artist${artist.id}/albums`}>
        <ArtistItemContent>
          <ArtistItemImg src={`/api/${artist.imageUrl}`} alt={artist.name} />
          <ArtistItemInfo>
            <ArtistItemInfoName>{artist.name}</ArtistItemInfoName>
            {artist.tags !== undefined && <Tags tags={artist.tags} />}
          </ArtistItemInfo>
        </ArtistItemContent>
        <ArtistItemAlbums>
          <ArtistItemAlbumsSpan>Кол-во альбомов:</ArtistItemAlbumsSpan>
          <ArtistItemAlbumsSpan>{artist.albums.length}</ArtistItemAlbumsSpan>
        </ArtistItemAlbums>
        <ArtistItemBtnCon>
          <ArtistItemBtnSvg
            onClick={(event) =>
              openEditWindow(event, dispatch, artist, 'modalArtist')
            }
          >
            <EditIcon />
          </ArtistItemBtnSvg>
          <ArtistItemBtnSvg
            onClick={(event) =>
              deleteItem(event, dispatch, delArtist, artist.id, artist.name)
            }
          >
            <RemoveIcon />
          </ArtistItemBtnSvg>
        </ArtistItemBtnCon>
      </StyleLink>
    </ArtistItemWrap>
  );
};
