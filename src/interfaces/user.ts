export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profilePicture: string;
  likedSongs: number[];
  likedArtist: number[];
  ownPlaylist: number[];
}
