import "./userMusic.css";
import gato from "../../assets/images/alex-d-J93PXpBPCFI-unsplash_pa9ypj.webp";

const UserMusic = () => {
  return (
    <div className="userMusic">
      <hr />
      <h3 className="user-mysongs">My songs</h3>
      <div className="sonList">
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
      </div>

      <h3 className="user-mysongs ">New albuns</h3>
      <div className="sonList albums">
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
      </div>

      <h3 className="user-mysongs ">Tendencies</h3>
      <div className="sonList tendencies">
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
        <div className="sonlist__info">
          <img src={gato} alt="" />
          <p>Album</p>
        </div>
      </div>
    </div>
  );
};

export default UserMusic;
