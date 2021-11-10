export interface Artist {
  imageUrl: string;
  name: string;
  id: string;
  albums: string[] | [];
  tags?: string[] | [];
}

export interface ArtistSong {
  id: string;
  imageUrl: string;
  name: string;
  tags?: string[] | [];
}
