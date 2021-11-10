import { openEditModal } from '../redux/slices/editModalSlice';
import type { AppDispatch } from '../redux/store';
import { Song } from '../interfaces/Song.interface';
import { Album } from '../interfaces/Album.interface';
import { Artist } from '../interfaces/Artist.interface';
import { openConfirmation } from '../redux/slices/confirmationSlice';

export const openEditWindow = (
  e: React.SyntheticEvent,
  dispatch: AppDispatch,
  data: Song | Album | Artist,
  typeModal: 'modalSong' | 'modalArtist' | 'modalAlbum'
): void => {
  e.preventDefault();
  dispatch(
    openEditModal({
      typeModal,
      typeAction: 'edit',
      data,
    })
  );
  e.stopPropagation();
};

type Fn = (id: string) => void;

export const deleteItem = (
  e: React.SyntheticEvent,
  dispatch: AppDispatch,
  fn: Fn,
  id: string,
  name: string
): void => {
  e.preventDefault();
  dispatch(
    openConfirmation({
      onClick: () => {
        fn(id);
      },
      text: `Вы уверены что хотите удалить '${name}?`,
      textButton: 'Удалить',
      bgWarning: true,
    })
  );
  e.stopPropagation();
};
