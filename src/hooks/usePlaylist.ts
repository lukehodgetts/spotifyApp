import { useState, useEffect } from "react";
import spotify from "../utils/spotifyClient";

export default () => {
  const playlistID = "2PkMtLJxAFiSZt69kd9o7i";
  const [playlistTracks, setPlaylistTracks] = useState<
    SpotifyApi.TrackObjectFull[]
  >([]);

  useEffect(() => {
    (async () => {
      const playlist = await spotify.getPlaylist(playlistID);

      setPlaylistTracks(
        playlist.tracks.items.map(
          (item) => item.track as SpotifyApi.TrackObjectFull
        )
      );
    })();
  }, []);

  return { playlistTracks, setPlaylistTracks };
};
