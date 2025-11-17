export type TrackDetailsResourse = {
  id: string;
  type: string;
  attributes: {
    title: string;
  };
};

type GetTrackDetailsOutput = {
    data: TrackDetailsResourse
}

const prepareHeaders = () => {
  const  apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey) return undefined
  return {
    "api-key": apiKey
  }
}

export const getTrackById = (selectedTrackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
      selectedTrackId,
    {
      headers: prepareHeaders()
    }
  ).then((res) => res.json());

  return promise;
};

type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string
    attachments: Array<TrackAttachment>
}

export type TrackListItemResourse = {
  id: string
  attributes: TrackListItemAttributes
}

type GetTrackListItemOutput = {
    data: Array<TrackListItemResourse>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListItemOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
    headers: prepareHeaders()
  }).then((res) => res.json());
  return promise
};
