import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchData } from '../../components/EditModal/EditModalAlbum/EditModalAlbum.props';
import { Album, ArtistAlbum } from '../../interfaces/Album.interface';

interface FetchPutData {
  id: string;
  values: FetchData;
  idArtist: string;
}

interface FetchPostData {
  values: FetchData;
  idArtist: string;
}

interface FetchPutAlbumReturn {
  album: ArtistAlbum;
  id: string;
}

export const fetchGetAlbums = createAsyncThunk(
  'albums/fetchGetAlbums',
  async (idArtist: string): Promise<Album[] | []> => {
    const responseAlbums: Album[] | [] = await (
      await axios.get<Album[] | []>(`/api/albums/getalbums/${idArtist}`)
    ).data;
    return responseAlbums;
  }
);

export const fetchDelAlbum = createAsyncThunk(
  'albums/fetchDelAlbum',
  async (idAlbum: string): Promise<string> => {
    axios.delete(`/api/albums/${idAlbum}`);
    return idAlbum;
  }
);

export const fetchPutAlbum = createAsyncThunk(
  'albums/fetchPutAlbum',
  async ({
    id,
    values,
    idArtist,
  }: FetchPutData): Promise<FetchPutAlbumReturn> => {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('image', values.image[0]);
    formData.append('year', values.year);
    formData.append('artist', idArtist);
    const response = await axios.put<Album>(`/api/albums/${id}`, formData);
    const { data: album } = response;
    return { album, id };
  }
);

export const fetchPostAlbum = createAsyncThunk(
  'albums/fetchPostAlbum',
  async ({ values, idArtist }: FetchPostData): Promise<Album> => {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('image', values.image[0]);
    formData.append('year', values.year);
    formData.append('artist', idArtist);
    const response = await axios.post<Album>(`/api/albums/`, formData);
    const { data: album } = response;
    return album;
  }
);

interface AlbumsState {
  isLoading: boolean;
  albums: Album[] | [];
  error: boolean;
}

const initialState: AlbumsState = {
  isLoading: false,
  error: false,
  albums: [],
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetAlbums.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchGetAlbums.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.albums = action.payload;
    },
    [fetchGetAlbums.rejected.type]: (state) => {
      state.isLoading = false;
      state.error = true;
    },

    [fetchDelAlbum.fulfilled.type]: (state, action) => {
      const albumIndex = state.albums.findIndex(
        (album) => album.id === action.payload.id
      );
      state.albums.splice(albumIndex, 1);
    },

    [fetchPutAlbum.fulfilled.type]: (state, action) => {
      const albumIndex = state.albums.findIndex(
        (album) => album.id === action.payload.id
      );
      state.albums[albumIndex] = action.payload.album;
    },

    [fetchPostAlbum.fulfilled.type]: (state, action) => {
      const albumsList: Album[] | [] = state.albums;
      const album: Album = action.payload;
      albumsList.splice(albumsList.length, 0, album);
    },
  },
});

// export const {} = dataSlice.actions;

export default albumsSlice.reducer;
