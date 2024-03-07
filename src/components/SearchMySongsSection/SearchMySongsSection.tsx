import "./searchMySongsSection.css";
import gato from "../../assets/images/alex-d-J93PXpBPCFI-unsplash_pa9ypj.webp";
import { FaSearch } from "react-icons/fa";

export const SearchMySongsSection = () => {
  return (
    <div className="searchMySongsSection">
      <img src={gato} alt="gato userName" />
      <h2>Hi Gato</h2>
      <FaSearch className="home_icon" />
    </div>
  );
};
