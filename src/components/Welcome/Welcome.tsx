import "./welcome.css";
import gato from "../../assets/images/alex-d-J93PXpBPCFI-unsplash_pa9ypj.webp";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/usercontext";

const Welcome = () => {

  const { user } = useUserContext()

  return (   
    <div className="userWelcome">
      <Link to="/profile"><img src={user.profilePicture} alt="gato userName" /></Link>
      <h2>Hi {user.username}</h2>
    </div>   
  );
};

export default Welcome;
