import { useRef } from 'react'


export const PlayingBar = () => {
  
  const audioPlayer = useRef<HTMLAudioElement>(null)
  const barPlayer = useRef<HTMLInputElement>(null)
  const playPauseIcon = useRef<HTMLImageElement>(null)
  
  const setBarLogic = () => {
    barPlayer.current?.setAttribute('max', Math.round(audioPlayer.current?.duration).toString() )  

    setInterval(() => {
      const widthP = Math.round((audioPlayer.current?.currentTime/audioPlayer.current?.duration)*100)
      barPlayer.current.style.width = `${widthP}%`
    }, 1000)
  }
  
  
  
  const playPause = () => {
    if (audioPlayer.current?.paused === true ) {
      audioPlayer.current?.play()
      playPauseIcon.current.src = 'src/assets/images/playingBar/pause.svg'
    }
    else {
      audioPlayer.current?.pause()
      playPauseIcon.current.src = 'src/assets/images/playingBar/play.svg'
    }
 
  }

  return (
    <div onLoad={ setBarLogic } className="playingBar_container">
      <img className="playingBar_img" src="src/assets/images/HomeNotLogged/musicAnswer.webp" alt="" />
      <audio 
        className="playingBar_player"
        src="src/assets/music.mp3" 
        ref={ audioPlayer }
       
      ></audio>
      <div className='playingBar_subContainer'>
        <div className='playingBar_subContainer2'>
          <div className='playingBar_textContainer'>
            <p className='playingBar_text'>Nombre canción</p>
            <p className='playingBar_text'>Artista</p>
          </div>
          <button className="playingBar_playBtn" onClick={ playPause }>            
            <img ref={ playPauseIcon } src="src/assets/images/playingBar/play.svg" alt="" />
          </button>
        </div>

      <input ref={ barPlayer } type="range" step="1" min="0" max="0" className='playingBar_bar'/>
      </div>
      
    </div>
  )
}
