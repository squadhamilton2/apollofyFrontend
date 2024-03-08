type Artist = {
  id: number;
  name: string;
  artist: Artist;
  url: string;
  thumbnail: string;
  genre: Genre;
}

interface Artist {
  id: number;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}
