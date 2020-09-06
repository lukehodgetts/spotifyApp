import React from "react";
import { Container, Body, Link, Popularity, Plus } from "./index.styles";

interface Props {
  imageURL: string;
  onArtistClick: (input: SpotifyApi.ArtistObjectSimplified) => void;
  name: string;
  artists: SpotifyApi.ArtistObjectSimplified[];
  popularity: number;
  selected?: boolean;
  onSelect?: () => void;
  onPlay?: () => void;
}

const Result: React.FC<Props> = ({
  imageURL,
  name,
  artists,
  popularity,
  onArtistClick,
  selected,
  onSelect,
  onPlay,
}) => {
  return (
    <Container>
      <img
        src={imageURL}
        alt="ur dad"
        width="100"
        height="100"
        onClick={onPlay}
      />
      <Body>
        <h2>{name}</h2>
        {artists.map((artist, i) => (
          <>
            <Link onClick={() => onArtistClick(artist)}>{artist.name}</Link>
            {i !== artists.length - 1 && ", "}
          </>
        ))}
      </Body>
      <Popularity popularity={popularity}> {popularity}%</Popularity>
      <Plus>
        <input type="radio" checked={selected} onChange={onSelect} />
      </Plus>
    </Container>
  );
};

export default Result;
