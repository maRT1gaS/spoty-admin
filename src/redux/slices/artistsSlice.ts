import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchData } from '../../components/EditModal/EditModalArtist/EditModalArtist.props';
import { Artist } from '../../interfaces/Artist.interface';

interface FetchPutData {
  id: string;
  values: FetchData;
}

interface FetchPutArtistReturn {
  artist: Artist;
  id: string;
}

export const fetchGetArtists = createAsyncThunk(
  'artists/fetchGetArtists',
  async (): Promise<Artist[]> => {
    const response = await axios.get<Artist[] | []>('/api/artists/');
    const { data: artists } = response;
    return artists;
  }
);

export const fetchDelArtist = createAsyncThunk(
  'artists/fetchDelArtist',
  async (idArtist: string): Promise<string> => {
    axios.delete(`/api/artists/${idArtist}`);
    return idArtist;
  }
);

export const fetchPutArtist = createAsyncThunk(
  'artists/fetchPutArtist',
  async ({ id, values }: FetchPutData): Promise<FetchPutArtistReturn> => {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('image', values.image[0]);
    const response = await axios.put<Artist>(`/api/artists/${id}`, formData);
    const { data: artist } = response;
    return { artist, id };
  }
);

export const fetchPostArtist = createAsyncThunk(
  'artists/fetchPostArtist',
  async (values: FetchData): Promise<Artist> => {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('image', values.image[0]);
    const response = await axios.post<Artist>(`/api/artists/`, formData);
    const { data: artist } = response;
    return artist;
  }
);

interface ArtistsState {
  isLoading: boolean;
  artists: Artist[] | [];
  error: boolean;
}

const initialState: ArtistsState = {
  isLoading: true,
  error: false,
  artists: [],
};

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetArtists.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchGetArtists.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.artists = action.payload;
    },
    [fetchGetArtists.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = true;
    },

    [fetchDelArtist.fulfilled.type]: (state, action) => {
      const artistIndex = state.artists.findIndex(
        (artist) => artist.id === action.payload
      );
      state.artists.splice(artistIndex, 1);
    },

    [fetchPutArtist.fulfilled.type]: (state, action) => {
      const artistIndex = state.artists.findIndex(
        (artist) => artist.id === action.payload.id
      );
      state.artists[artistIndex] = action.payload.artist;
    },

    [fetchPostArtist.fulfilled.type]: (state, action) => {
      const artistsList: Artist[] | [] = state.artists;
      const artist: Artist = action.payload;
      artistsList.splice(artistsList.length, 0, artist);
    },
  },
});

// export const {} = dataSlice.actions;

export default artistsSlice.reducer;
