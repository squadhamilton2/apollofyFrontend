import "./profileHeader.css";
import pingu from "../../assets/images/IMG_8452_jpg.webp";

export default function ProfileHeader() {
  return (
    <div>
      <img src={pingu} className="profileUserPic" alt="Profile picture" />
      <h2 className="profileUserName">Username</h2>
      <h4>Edit</h4>
    </div>
  );
}
