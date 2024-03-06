import "./welcome.css";
import gato from "../../assets/images/alex-d-J93PXpBPCFI-unsplash_pa9ypj.webp";

const Welcome = () => {
  return (
    <>
      <div className="userWelcome">
        <img src={gato} alt="gato userName" />
        <h2>Hi Gato</h2>
      </div>
    </>
  );
};

export default Welcome;
