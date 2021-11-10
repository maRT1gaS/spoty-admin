import React from 'react';
import { useLocation } from 'react-router-dom';
import { AlbumItemProps } from './AlbumItem.props';
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
} from './AlbumItem.style';
import EditIcon from '../../../assets/svg/edit.svg';
import RemoveIcon from '../../../assets/svg/remove.svg';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { fetchDelAlbum } from '../../../redux/slices/albumsSlice';
import { closeConfirmation } from '../../../redux/slices/confirmationSlice';
import { openEditWindow, deleteItem } from '../../../helpers/editFunc';

export const AlbumItem: React.FC<AlbumItemProps> = ({
  album,
}: AlbumItemProps): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const delAlbum = (idAlbum: string): void => {
    dispatch(fetchDelAlbum(idAlbum));
    dispatch(closeConfirmation());
  };

  return (
    <ArtistItemWrap>
      <StyleLink to={`${location.pathname}/album${album.id}/songs`}>
        <ArtistItemContent>
          <ArtistItemImg src={`/api/${album.imageUrl}`} alt={album.name} />
          <ArtistItemInfo>
            <ArtistItemInfoName>{album.name}</ArtistItemInfoName>
          </ArtistItemInfo>
        </ArtistItemContent>
        <ArtistItemAlbums>
          <ArtistItemAlbumsSpan>Год:</ArtistItemAlbumsSpan>
          <ArtistItemAlbumsSpan>{album.year}</ArtistItemAlbumsSpan>
        </ArtistItemAlbums>
        <ArtistItemAlbums>
          <ArtistItemAlbumsSpan>Песен:</ArtistItemAlbumsSpan>
          <ArtistItemAlbumsSpan>{album.songs.length}</ArtistItemAlbumsSpan>
        </ArtistItemAlbums>
        <ArtistItemBtnCon>
          <ArtistItemBtnSvg
            onClick={(event) =>
              openEditWindow(event, dispatch, album, 'modalAlbum')
            }
          >
            <EditIcon />
          </ArtistItemBtnSvg>
          <ArtistItemBtnSvg
            onClick={(event) =>
              deleteItem(event, dispatch, delAlbum, album.id, album.name)
            }
          >
            <RemoveIcon />
          </ArtistItemBtnSvg>
        </ArtistItemBtnCon>
      </StyleLink>
    </ArtistItemWrap>
  );
};
