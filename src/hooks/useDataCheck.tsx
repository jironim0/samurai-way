import { useEffect, useState } from "react";

export function useDataCheck(array: any[] | null) {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState<any | null>(null);

  useEffect(() => {

    if(!selectedTrackId) return;

    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
        selectedTrackId,
      {
        headers: {
          "api-key": "fc4e77d1-c417-416c-86af-1c99fcb8fa4e",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId]);

  type Status = "loading" | "empty" | "hasData";

  const status: Status =
    array === null ? "loading" : array.length === 0 ? "empty" : "hasData";

  const variables = {
    loading: <div>Loading...</div>,
    empty: <div>Tracks is empty</div>,
    hasData: array?.map((obj) => {
      return (
        <li
          key={obj.id}
          style={{
            border: obj.id === selectedTrackId ? "1px solid orange" : "none",
          }}
        >
          <div
            onClick={() => {
              setSelectedTrackId(obj.id);
            }}
          >
            {obj.attributes.title}
          </div>
          <audio src={obj.attributes.attachments[0].url} controls></audio>
        </li>
      );
    }),
  };

  return {
    selectedTrackId,
    selectedTrack,
    status,
    component: variables[status],
  };
}
