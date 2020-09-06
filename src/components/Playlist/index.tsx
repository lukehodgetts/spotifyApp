import React from "react";
import Result from "../Result";

interface Props {
  songs: SpotifyApi.TrackObjectFull[];
  onPlay: (id: string) => void;
}

const Playlist: React.FC<Props> = ({ songs, onPlay }) => {
  return (
    <>
      {songs.map((song) => (
        <Result
          imageURL={song.album.images[0].url}
          key={song.id}
          name={song.name}
          artists={song.artists}
          popularity={song.popularity}
          onArtistClick={() => {}}
          selected
          onPlay={()=> onPlay(song.uri)}
        />
      ))}
    </>
  );
};

export default Playlist;
