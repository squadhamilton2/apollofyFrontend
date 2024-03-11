// import "../UserMusic/userMusic.css";
import "./trackcard.css";

type Artist = {
  id: number;
  name: string;
};

type Props = {
  id: number;
  name: string;
  artist: Artist;
  url: string;
  thumbnail: string;
};

export default function TrackCard(props: Props) {
  return (
    <div className="sonList">
      <div className="sonlist__info">
        <div className="text">
          <img src={props.thumbnail} alt="" />
          <h5>{props.name}</h5>
          {/* <p>{props.artist.name}</p> */}
        </div>
      </div>
    </div>
  );
}
