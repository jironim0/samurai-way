import { useEffect, useState } from "react";
import { getTrackById, type TrackDetailsResourse } from "../api/api";
import s from './track-detail.module.css'

export function TrackDetails(props: any) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourse | null>(null);
  const singleTrackId = props.selectedTrackId

  useEffect(() => {
    if (!singleTrackId) {
      setSelectedTrack(null)
      return
    };

    getTrackById(singleTrackId).then((json) => setSelectedTrack(json.data));
  }, [singleTrackId]);

  return (
    <div className={s.tracks}>
      <h3 className={s.track}>Details</h3>
      {!selectedTrack && !singleTrackId && "Track is not selected"}
      {!selectedTrack && singleTrackId && "Loading..."}
      {selectedTrack &&
        singleTrackId &&
        selectedTrack.id !== singleTrackId &&
        "Loading..."}
      {selectedTrack && <div>{selectedTrack.attributes.title}</div>}
    </div>
  );
}