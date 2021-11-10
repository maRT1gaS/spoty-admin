import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchData } from '../../components/EditModal/EditModalSong/EditModalSong.props';
import { Album, Song } from '../../interfaces/Song.interface';

interface FetchPutData {
  id: string;
  values: FetchData;
}

interface FetchPutSongReturn {
  song: Song;
  id: string;
}

export const fetchGetSongs = createAsyncThunk(
  'songs/fetchGetSongs',
  async (idAlbum: string) => {
    const response = await axios.get<Album>(`/api/albums/${idAlbum}`);
    const { data } = response;
    const { songs } = data;
    const songsPromises = songs.map((song) =>
      axios.get<Song>(`/api/songs/${song.id}`)
    );

    const songsPromise = await Promise.allSettled(songsPromises);

    const songsData = songsPromise.map((result) => {
      if (result.status === 'fulfilled' && result.value) {
        return result.value.data;
      }
      return [];
    });
    return songsData;
  }
);

export const fetchDelSong = createAsyncThunk(
  'songs/fetchDelSong',
  async (idSong: string): Promise<string> => {
    axios.delete(`/api/songs/${idSong}`);
    return idSong;
  }
);

export const fetchPutSong = createAsyncThunk(
  'songs/fetchPutSong',
  async ({ id, values }: FetchPutData): Promise<FetchPutSongReturn> => {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('song', values.song[0]);
    formData.append('tags', values.tags);
    formData.append('artist', values.artist);
    formData.append('album', values.album);
    const response = await axios.put<Song>(`/api/songs/${id}`, formData);
    const { data: song } = response;
    return { song, id };
  }
);

export const fetchPostSong = createAsyncThunk(
  'songs/fetchPostSong',
  async (values: FetchData): Promise<Song> => {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('song', values.song[0]);
    formData.append('tags', values.tags);
    formData.append('artist', values.artist);
    formData.append('album', values.album);
    const response = await axios.post<Song>(`/api/songs/`, formData);
    const { data: song } = response;
    return song;
  }
);

interface SongsState {
  isLoading: boolean;
  songs: [] | Song[];
  error: boolean;
}

const initialState: SongsState = {
  isLoading: false,
  error: false,
  songs: [],
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetSongs.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchGetSongs.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    [fetchGetSongs.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = true;
    },

    [fetchDelSong.fulfilled.type]: (state, action) => {
      const songIndex = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      state.songs.splice(songIndex, 1);
    },

    [fetchPutSong.fulfilled.type]: (state, action) => {
      const songIndex = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      state.songs[songIndex] = action.payload.song;
    },

    [fetchPostSong.fulfilled.type]: (state, action) => {
      const songsList: Song[] | [] = state.songs;
      const song: Song = action.payload;
      songsList.splice(songsList.length, 0, song);
    },
  },
});

// export const {} = dataSlice.actions;

export default songsSlice.reducer;
