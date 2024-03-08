import { Track } from "../interfaces/track";
import { useState, createContext, useContext, ReactNode } from "react";

interface TrackContextType {
  trackPlaying: boolean;
  setTrackPlaying: Function;
  selectedTrack: Track[];
  setSelectedTrack: Function;
}

interface Props {
  children: ReactNode;
}

const TrackContext = createContext({} as TrackContextType);

export function TrackContextProvider(props: Props) {
  const [trackPlaying, setTrackPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track[]>([]);

  const value = {
    trackPlaying,
    setTrackPlaying,
    selectedTrack,
    setSelectedTrack,
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
