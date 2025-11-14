import s from './tracks.module.css'

export function TrackItem(props: any) {

  const isSelected = props.track.id === props.selectedTrackId;

  return (
    <li
    className={s.track}
      key={props.track.id}
      style={{
        borderColor: isSelected ? "orange" : "#747bff",
      }}
    >
      <div onClick={() => props.setSelectedTrackId(props.track.id)}>{props.track.attributes.title}</div>
      <audio src={props.track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
