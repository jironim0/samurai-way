import { useEffect, useState } from "react";
import { getTracks, type TrackListItemResourse } from "../shared/api/api";

export function useTracks(){
    const [tracks, setTracks] = useState<Array<TrackListItemResourse> | null>(null);
    
      useEffect(() => {
        getTracks().then((json) => setTracks(json.data));
      }, []);

     return {
        tracks,

     }
}