
import { useRef, useState, useEffect } from 'react';
import { useTrackContext } from "../../context/trackcontext";
import { Link } from 'react-router-dom';

export const PlayingBar = () => {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const barPlayer = useRef<HTMLInputElement>(null);
  const playPauseIcon = useRef<HTMLImageElement>(null);

  const { selectedTrack, currentTrack } = useTrackContext();
  

 
  const setBarLogic = () => {
    barPlayer.current?.setAttribute(
      "max",
      Math.round(audioPlayer.current?.duration).toString()
    );
    
    
    const intervalId = setInterval(() => {
        const widthP = Math.round(
          (audioPlayer.current?.currentTime / audioPlayer.current?.duration) * 100
        );
        if( !barPlayer.current ) clearInterval( intervalId )
        barPlayer.current.style.width = `${widthP}%`;
      }, 1000);

    };

  const playPause = () => {
    if (audioPlayer.current?.paused === true) {
      audioPlayer.current?.play();
      playPauseIcon.current.src = "src/assets/images/playingBar/pause.svg";
    } else {
      audioPlayer.current?.pause();
      playPauseIcon.current.src = "src/assets/images/playingBar/play.svg";
    }
  };
  const condition = false
  return (
      
    <div onLoad={setBarLogic} className="playingBar_container">
        <img
          className="playingBar_img"
          src= {selectedTrack[currentTrack-1].thumbnail}
          alt=""
        />
        <audio
          autoPlay
          className="playingBar_player"
          src={selectedTrack[currentTrack-1].url}
          ref={audioPlayer}
        ></audio>                
        <div className="playingBar_subContainer">
          <div className="playingBar_subContainer2">
            <div className="playingBar_textContainer">
              <p className="playingBar_text">{selectedTrack[currentTrack-1].name}</p>
              <p className="playingBar_text">{selectedTrack[currentTrack-1].artist.name}</p>
            </div>
            <button className="playingBar_playBtn" onClick={playPause}>
              <img
                ref={playPauseIcon}
                src="src/assets/images/playingBar/pause.svg"
                alt=""
              />
            </button>
          </div>
          
          <input
            ref={barPlayer}
            type="range"
            step="1"
            min="0"
            max="0"
            className="playingBar_bar"
          />
        </div>
    </div>
     
  );
};

