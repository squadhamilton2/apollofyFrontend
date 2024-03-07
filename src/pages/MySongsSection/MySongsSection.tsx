import "./mySongsSection.css";
import Footer from "../../components/Footer/Footer";
import { PlayingBar } from "../../components/PlayingBar/PlayingBar";
import { SearchMySongsSection } from "../../components/SearchMySongsSection/SearchMySongsSection";
import { AlbumLine } from "../../components/AlbumLine/AlbumLine";

export const MySongsSection = () => {
  return (
    <div>
      <SearchMySongsSection />
      <AlbumLine />
      <PlayingBar />
      <Footer />
    </div>
  );
};
