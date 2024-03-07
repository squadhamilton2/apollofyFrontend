import "./profileContent.css";
import pingu from "../../assets/images/IMG_8452_jpg.webp";

export default function Profile() {
  return (
    <main className="profile_container">
      <div className="profile_header">
        <img src={pingu} className="profileUserPic" alt="Profile picture" />
        <div className="profileUserName">
          <h3>Username</h3>
          <small>Edit</small>
        </div>
      </div>
      <div className="profile_details">
        <h3>Name</h3>
        <p>xxxx</p>
        <h3>e-mail</h3>
        <p>xxxx</p>
      </div>
    </main>
  );
}
