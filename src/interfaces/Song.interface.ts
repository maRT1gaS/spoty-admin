import { ArtistAlbum } from './Album.interface';
import { ArtistSong } from './Artist.interface';

export interface Song {
  album: ArtistAlbum;
  artist: ArtistSong;
  duration: number;
  favorite: boolean;
  id: string;
  listens: number;
  name: string;
  tags: string[];
  url: string;
}

export interface Album {
  artist: Artist;
  id: string;
  imageUrl: string;
  name: string;
  year: string;
  songs: SongAlbum[];
}

interface SongAlbum {
  url: string;
  name: string;
  id: string;
  duration: number;
  album: AlbumSong;
  artist: Artist;
}

interface AlbumSong {
  imageUrl: string;
  name: string;
  id: string;
}

interface Artist {
  imageUrl: string;
  name: string;
  id: string;
}
