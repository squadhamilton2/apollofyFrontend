import "./profileContent.css";
import pingu from "../../assets/images/IMG_8452_jpg.webp";
import { Link } from "react-router-dom";
import { useAuthDispatch } from "../../context/authcontext";

export default function Profile() {

  const dispatch = useAuthDispatch()
  return (
    <main className="profile_container">
      <div className="profile_header">
        <img src={pingu} className="profileUserPic" alt="Profile picture" />
        <div className="profileUserName">
          <h3>Username</h3>
         <Link to="/editprofile" className="link"><small>Edit</small></Link>
        </div>
      </div>
      <div className="profile_details">
        <h3>Name</h3>
        <p>xxxx</p>
        <h3>e-mail</h3>
        <p>xxxx</p>
      </div>

      <button className="profileContent_logoutBtn" onClick={() => { dispatch({ type: 'LOGOUT' }) }}>Log out</button>
    </main>
  );
}
