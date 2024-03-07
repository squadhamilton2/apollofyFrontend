import Footer from "../../components/Footer/Footer";
import Welcome from "../../components/Welcome/Welcome";
import UserMusic from "../../components/UserMusic/UserMusic";
import "./homelogged.css";
import { PlayingBar } from "../../components/PlayingBar/PlayingBar";
import { useFetchDBJSON } from "../../hooks/useFetch";

export const HomeLogged = () => {
  useFetchDBJSON()
  return (
    <>
      <Welcome />
      <UserMusic />
      <PlayingBar/>
      <Footer />
    </>
  );
};
