import { createSlice } from '@reduxjs/toolkit';
import { Artist } from '../../interfaces/Artist.interface';
import { Album } from '../../interfaces/Album.interface';
import { Song } from '../../interfaces/Song.interface';

interface EditModalState {
  isOpen: boolean;
  typeModal: string;
  typeAction: '' | 'edit' | 'add';
  data?: Artist | Album | Song | null;
}

const initialState: EditModalState = {
  isOpen: false,
  typeModal: '',
  typeAction: '',
  data: null,
};

export const editModalSlice = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isOpen = true;
      state.typeAction = action.payload.typeAction;
      state.typeModal = action.payload.typeModal;
      state.data = action.payload.data || null;
    },
    closeEditModal: (state) => {
      state.isOpen = false;
      state.typeAction = '';
      state.typeModal = '';
      state.data = null;
    },
  },
});

export const { openEditModal, closeEditModal } = editModalSlice.actions;

export default editModalSlice.reducer;
