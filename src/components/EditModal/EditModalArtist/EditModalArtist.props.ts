import { Artist } from '../../../interfaces/Artist.interface';

export interface FetchData {
  name: string;
  image: FileList;
}

export interface InitialValueProps {
  name: string;
  image: string;
}

export interface ErrorsFormProps {
  name?: string;
  image?: string;
}

export interface EditModalArtistProps {
  type: string;
  id?: string;
  artist?: Artist | null;
}
