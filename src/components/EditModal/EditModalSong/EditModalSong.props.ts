import { Song } from '../../../interfaces/Song.interface';

export interface FetchData {
  name: string;
  song: FileList;
  tags: string;
  artist: string;
  album: string;
}

export interface InitialValueProps {
  name: string;
  song: string;
  tags: string;
}

export interface ErrorsFormProps {
  name?: string;
  song?: string;
  tags?: string;
}

export interface EditModalSongProps {
  type: string;
  song?: Song | null;
  idArtist: string;
  idAlbum: string;
}
