export interface Statistics {
  users: number;
  songs: number;
  artists: number;
}

export interface TopCharts {
  listens: number;
  name: string;
  duration: number;
  id: string;
  artist: Artist;
  album: Album;
}

interface Artist {
  name: string;
  id: string;
}

interface Album {
  name: string;
  id: string;
}
