import { useState, useEffect } from "react";
import spotify from "../utils/spotifyClient";

export default (search: string) => {
  const [results, setResults] = useState<SpotifyApi.TrackObjectFull[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tracks = await spotify.searchTracks(search);

      setResults(tracks.tracks.items);
    };

    if (search) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [search]);

  return results;
};
