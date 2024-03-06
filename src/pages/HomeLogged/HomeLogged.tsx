import Footer from "../../components/Footer/Footer";
import Welcome from "../../components/Welcome/Welcome";
import UserMusic from "../../components/UserMusic/UserMusic";
import "./homelogged.css";
import { PlayingBar } from "../../components/PlayingBar/PlayingBar";
import { AlbumLine } from "../../components/AlbumLine/AlbumLine";

export const HomeLogged = () => {
  return (
    <>
      <Welcome />
      <UserMusic />
      <PlayingBar/>
      <Footer />
    </>
  );
};
