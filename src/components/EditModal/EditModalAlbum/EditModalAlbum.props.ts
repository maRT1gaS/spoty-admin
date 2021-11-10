import { Album } from '../../../interfaces/Album.interface';

export interface FetchData {
  name: string;
  image: FileList;
  year: string;
}

export interface InitialValueProps {
  name: string;
  image: string;
  year: string;
}

export interface ErrorsFormProps {
  name?: string;
  image?: string;
  year?: string;
}

export interface EditModalAlbumProps {
  type: string;
  id?: string;
  album?: Album | null;
  idArtist: string;
}
