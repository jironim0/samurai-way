import { TracksList } from "./shared/ui/TracksList";
import { TrackDetails } from "./shared/ui/TrackDetails";
import { useTrackId } from "./hooks/useTrackId";


function App() {
  const {selectedTrackId, setSelectedTrackId} = useTrackId()

  return (
    <div>
      <h1>Musicfun Player</h1>
      <div style={{
        display: "flex",
        gap: "15px"
      }}>
          <TracksList setSelectedTrackId={setSelectedTrackId} selectedTrackId={selectedTrackId}/>
          <TrackDetails selectedTrackId={selectedTrackId}/>
      </div>
    </div>
  );
}

export default App;