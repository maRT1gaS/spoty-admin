import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  ArtistsList,
  Loader,
  EditModalArtist,
  AddButton,
  ErrorNotification,
} from '../../../components';
import { fetchGetArtists } from '../../../redux/slices/artistsSlice';
import { Artist } from '../../../interfaces/Artist.interface';

export const Artists: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { artistsList, isLoading, error } = useAppSelector((state) => ({
    artistsList: state.artists.artists,
    isLoading: state.artists.isLoading,
    error: state.artists.error,
  }));
  const { isOpen, typeAction, typeModal, artist } = useAppSelector((state) => ({
    isOpen: state.editModal.isOpen,
    typeModal: state.editModal.typeModal,
    typeAction: state.editModal.typeAction,
    artist: state.editModal.data,
  }));

  useEffect((): void => {
    dispatch(fetchGetArtists());
  }, [dispatch]);

  return (
    <>
      {isOpen && typeModal === 'modalArtist' && (
        <EditModalArtist artist={artist as Artist} type={typeAction} />
      )}
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error && <ErrorNotification title='Ошибка!' />}
            <AddButton typeModal='modalArtist' />
            <ArtistsList artistsList={artistsList} />
          </>
        )}
      </>
    </>
  );
};
