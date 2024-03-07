import "./welcome.css";
import gato from "../../assets/images/alex-d-J93PXpBPCFI-unsplash_pa9ypj.webp";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (   
    <div className="userWelcome">
      <Link to="/profile"><img src={gato} alt="gato userName" /></Link>
      <h2>Hi Gato</h2>
    </div>   
  );
};

export default Welcome;
