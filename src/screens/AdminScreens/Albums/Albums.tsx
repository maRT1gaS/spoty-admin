import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  AddButton,
  AlbumsList,
  Loader,
  EditModalAlbum,
  ErrorNotification,
} from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchGetAlbums } from '../../../redux/slices/albumsSlice';
import { Album } from '../../../interfaces/Album.interface';

export const Albums: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { albumsList, isLoading, error } = useAppSelector((state) => ({
    albumsList: state.albums.albums,
    isLoading: state.albums.isLoading,
    error: state.albums.error,
  }));
  const { isOpen, typeModal, typeAction, album } = useAppSelector((state) => ({
    isOpen: state.editModal.isOpen,
    typeModal: state.editModal.typeModal,
    typeAction: state.editModal.typeAction,
    album: state.editModal.data,
  }));
  const { idArtist } = useParams<{ idArtist: string }>();

  useEffect(() => {
    dispatch(fetchGetAlbums(idArtist));
  }, [dispatch, idArtist]);

  return (
    <>
      {isOpen && typeModal === 'modalAlbum' && (
        <EditModalAlbum
          type={typeAction}
          album={album as Album}
          idArtist={idArtist}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {error && <ErrorNotification title='Ошибка!' />}
          <AddButton typeModal='modalAlbum' />
          <AlbumsList albumsList={albumsList} />
        </>
      )}
    </>
  );
};
