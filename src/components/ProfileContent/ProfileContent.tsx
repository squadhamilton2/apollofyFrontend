import "./profileContent.css";
import pingu from "../../assets/images/IMG_8452_jpg.webp";
import { Link } from "react-router-dom";
import { useAuthDispatch } from "../../context/authcontext";
import { useUserContext } from "../../context/usercontext";

export default function Profile() {

  const userContext = useUserContext()

  const dispatch = useAuthDispatch()
  return (
    <main className="profile_container">
      <div className="profile_header">
        <img src={userContext.user.profilePicture} className="profileUserPic" alt="Profile picture" />
        <div className="profileUserName">
          <h3>{userContext.user.username}</h3>
         <Link to="/editprofile" className="link"><small>Edit</small></Link>
        </div>
      </div>
      <div className="profile_details">
        <h3>Name</h3>
        <p>{userContext.user.first_name + ' ' + userContext.user.last_name}</p>
        <h3>e-mail</h3>
        <p>{userContext.user.email}</p>
      </div>

      <button className="profileContent_logoutBtn" onClick={() => { dispatch({ type: 'LOGOUT' }) }}>Log out</button>
    </main>
  );
}
