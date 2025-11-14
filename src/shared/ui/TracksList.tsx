import { TrackItem } from "./TrackItem";
import { useTracks } from "../../hooks/useTracks";
import s from './tracks.module.css'

export function TracksList(props: any) {
  const {tracks} = useTracks()

  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => props.setSelectedTrackId(null)}>reset</button>
      <hr />
      <ul className={s.tracks}>
        {tracks?.map((obj) => {
          return <TrackItem track={obj} key={obj.id} selectedTrackId={props.selectedTrackId} setSelectedTrackId={props.setSelectedTrackId}/>;
        })}
      </ul>
    </div>
  );
}
