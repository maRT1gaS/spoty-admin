import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  AddButton,
  SongsList,
  Loader,
  EditModalSong,
  ErrorNotification,
} from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchGetSongs } from '../../../redux/slices/songsSlice';
import { Song } from '../../../interfaces/Song.interface';

export const Songs: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { songsList, isLoading, error } = useAppSelector((state) => ({
    songsList: state.songs.songs,
    isLoading: state.songs.isLoading,
    error: state.songs.error,
  }));
  const { isOpen, typeModal, typeAction, song } = useAppSelector((state) => ({
    isOpen: state.editModal.isOpen,
    typeModal: state.editModal.typeModal,
    typeAction: state.editModal.typeAction,
    song: state.editModal.data,
  }));
  const { idAlbum, idArtist } =
    useParams<{ idAlbum: string; idArtist: string }>();

  useEffect(() => {
    dispatch(fetchGetSongs(idAlbum));
  }, [dispatch, idAlbum]);

  return (
    <>
      {isOpen && typeModal === 'modalSong' && (
        <EditModalSong
          type={typeAction}
          song={song as Song}
          idAlbum={idAlbum}
          idArtist={idArtist}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {error && <ErrorNotification title='Ошибка!' />}
          <AddButton typeModal='modalSong' />
          <SongsList songsList={songsList} />
        </>
      )}
    </>
  );
};
