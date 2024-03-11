export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profilePicture: string;
  likedSongs: number[];
  likedArtist: number[];
  ownPlaylist: number[];
}
