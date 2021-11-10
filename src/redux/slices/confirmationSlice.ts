import { createSlice } from '@reduxjs/toolkit';

interface ConfirmationState {
  isOpen: boolean;
  text: string;
  textButton: string;
  bgWarning: boolean;
  onClick: () => void;
}

const initialState: ConfirmationState = {
  isOpen: false,
  text: '',
  textButton: '',
  bgWarning: false,
  onClick: () => {},
};

export const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    openConfirmation: (state, action) => {
      state.isOpen = true;
      state.text = action.payload.text;
      state.textButton = action.payload.textButton;
      state.onClick = action.payload.onClick;
      state.bgWarning = action.payload.bgWarning || false;
    },
    closeConfirmation: (state) => {
      state.isOpen = false;
      state.text = '';
      state.textButton = '';
      state.onClick = () => {};
      state.bgWarning = false;
    },
  },
});

export const { openConfirmation, closeConfirmation } =
  confirmationSlice.actions;

export default confirmationSlice.reducer;
