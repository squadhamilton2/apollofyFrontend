type Artist = {
  id: number;
  name: string;
};

type Genre = {
  id: number,
  name: string
}
export interface Track {
  // map(): import("react").ReactNode;
  id: number;
  name: string;
  artist: Artist;
  url: string;
  thumbnail: string;
  genre: Genre;
}
