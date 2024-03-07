import { FaHome, FaSearch, FaCompactDisc } from "react-icons/fa";
import "./footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer_container">
      <Link to={"/"}><FaHome className="home_icon"/></Link>
      <Link to={"/search"}><FaSearch className="home_icon"/></Link>
      <Link to={"/songsSection"}><FaCompactDisc className="home_icon"/></Link>
    </div>
  )
}