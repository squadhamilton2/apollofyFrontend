import "./userMusic.css";
import gato from "../../assets/images/alex-d-J93PXpBPCFI-unsplash_pa9ypj.webp";
import { useEffect } from "react";
import { useTrackContext } from "../../context/trackcontext";
import TrackCard from "../TrackCard/TrackCard";
import { Track } from "../../interfaces/track";

type Props = {};

const UserMusic = () => {
  const listOfMusic = useTrackContext();

  const getMusic = async () => {
    try {
      const request = await fetch("src/data/db.json");
      const JSONrequest = await request.json();
      return JSONrequest;
    } catch (error) {
      console.log("request error:", error);
      throw error; // Re-lanzar el error para manejarlo en el componente principal
    }
  };

  useEffect(() => {
    const getMusicResponse = async () => {
      try {
        const musicResponse = await getMusic();
        console.log("Music Response:", musicResponse);
        listOfMusic.setSelectedTrack(musicResponse.tracks);
      } catch (error) {
        console.log("Error setting selected track:", error);
      }
    };
    getMusicResponse();
  }, []);
  return (
    <div className="userMusic">
      {Array.isArray(listOfMusic.selectedTrack) ? (
        listOfMusic.selectedTrack.map((track: Track, index: number) => (
          <TrackCard
            key={index}
            id={track.id}
            name={track.name}
            artist={track.artist}
            url={track.url}
            thumbnail={track.thumbnail}
          />
        ))
      ) : (
        <p>No tracks available</p>
      )}{" "}
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
      <h3 className="user-mysongs ">New albums</h3>
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
