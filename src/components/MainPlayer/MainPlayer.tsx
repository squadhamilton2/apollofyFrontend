import "./mainplayer.css";
import { useTrackContext } from "../../context/trackcontext";
import { useState } from "react";

type Props = {};

export function MainPlayer({}: Props) {
  const { trackPlaying, setTrackPlaying, selectedTrack, setSelectedTrack } =
    useTrackContext();

  function PlayBtnClicked() {
    setTrackPlaying(!trackPlaying);
  }
  return (
    <div className="player-page">
      <div className="track-container">
        <img
          className="track-img"
          src={selectedTrack.thumbnail}
          alt={selectedTrack.name}
        />
      </div>
      <div className="track-info">
        <h2 className="track-title">{/* {selectedTrack.name} */}name</h2>
        <p className="track-artist">{/* {selectedTrack.artist} */}artist</p>
      </div>
      <div className="player-container">
        <button onClick={PlayBtnClicked}>
          {trackPlaying ? (
            <img
              src="src/assets/images/pause-circle-svgrepo-com.svg"
              alt="pause"
            />
          ) : (
            <img
              src="src/assets/images/play-circle-svgrepo-com.svg"
              alt="play"
            />
          )}
        </button>
      </div>
    </div>
  );
}
