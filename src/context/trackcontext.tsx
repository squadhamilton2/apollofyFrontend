import { Track } from "../interfaces/track";
import { useState, createContext, useContext, ReactNode } from "react";

interface TrackContextType {
  trackPlaying: boolean;
  setTrackPlaying: Function;
  selectedTrack: Track[];
  setSelectedTrack: Function;
  currentTrack: number;
  setCurrentTrack: Function;
}

interface Props {
  children: ReactNode;
}

const TrackContext = createContext({} as TrackContextType);

export function TrackContextProvider(props: Props) {
  const [trackPlaying, setTrackPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track[]>([{
    "id": 1,
    "name": "Lo que hoy quieras",
    "artist": {
      "id": 1,
      "name": "Koino Yokan"
    },
    "url": "https://res.cloudinary.com/dvswalsl6/video/upload/v1709625897/Koino%20Yokan%20-%20Lo%20que%20hoy%20quieras.mp3",
    "thumbnail": "https://res.cloudinary.com/dvswalsl6/image/upload/v1709626314/Koino%20Yokan%20-%20Lo%20que%20hoy%20quieras%20-%20Album.jpg",
    "genre": {
      "id": 3,
      "name": "pop"
    }
  }]);
  const [ currentTrack, setCurrentTrack ] = useState<number>(1)

  const value = {
    trackPlaying,
    setTrackPlaying,
    selectedTrack,
    setSelectedTrack,
    currentTrack,
    setCurrentTrack
  };

  return (
    <TrackContext.Provider value={value}>
      {props.children}
    </TrackContext.Provider>
  );
}

export function useTrackContext() {
  const context = useContext(TrackContext);

  if (!context) {
    throw new Error("Error!");
  }
  return context;
}
