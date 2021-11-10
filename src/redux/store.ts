import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/userSlice';
import artistsSliceReducer from './slices/artistsSlice';
import confirmationSliceReducer from './slices/confirmationSlice';
import editModalSliceReducer from './slices/editModalSlice';
import albumsSliceReducer from './slices/albumsSlice';
import songsSliceReducer from './slices/songsSlice';
import statisticsSliceReducer from './slices/statisticsSlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    artists: artistsSliceReducer,
    confirmation: confirmationSliceReducer,
    editModal: editModalSliceReducer,
    albums: albumsSliceReducer,
    songs: songsSliceReducer,
    statistics: statisticsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['confirmation.onClick', 'payload.onClick'],
        ignoredActionPaths: ['payload.onClick'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
