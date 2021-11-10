import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAdmin: boolean;
  isAuth: boolean;
}

const initialState: UserState = {
  isAdmin: false,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdmin: (state) => {
      state.isAdmin = !state.isAdmin;
    },
    setAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { setAdmin, setAuth } = userSlice.actions;

export default userSlice.reducer;
