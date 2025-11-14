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

export const getTrackById = (selectedTrackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
      selectedTrackId,
    {
      headers: {
        "api-key": "fc4e77d1-c417-416c-86af-1c99fcb8fa4e",
      },
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
    headers: {
      "api-key": "fc4e77d1-c417-416c-86af-1c99fcb8fa4e",
    },
  }).then((res) => res.json());
  return promise
};
