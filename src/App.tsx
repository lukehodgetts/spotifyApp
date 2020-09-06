import React, { useState } from "react";
import Result from "./components/Result";
import Search from "./components/Search";
import Playlist from "./components/Playlist";
import {
  ContainerLeft,
  ContainerRight,
  ContainerWrapper,
  Wrapper,
  Dropdown,
} from "./App.styles";
import spotify from "./utils/spotifyClient";
import useTrackSearch from "./hooks/useTrackSearch";
import useDevices from "./hooks/useDevices";
import usePlaylist from "./hooks/usePlaylist";
import spotifyConfig from "./constants/spotifyConfig";

function App() {
  const [search, setSearch] = useState("");
  const results = useTrackSearch(search);
  const { devices, selectedDevice, setSelectedDevice } = useDevices();
  const { playlistTracks, setPlaylistTracks } = usePlaylist();

  const selectTrack = async (track: SpotifyApi.TrackObjectFull) => {
    try {
      await spotify.addTracksToPlaylist(spotifyConfig.playlistID, [track.uri]);
      setPlaylistTracks([...playlistTracks, track]);
    } catch (e) {}
  };

  const playSong = async (deviceId: string, uri: string) => {
    await spotify.play({ device_id: deviceId, uris: [uri] });
  };

  const onDeviceChange = async (deviceId: string) => {
    setSelectedDevice(deviceId);
    await spotify.transferMyPlayback([deviceId]);
  };

  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="Search"
        value={search}
        onChange={(input) => setSearch(input)}
      />
      <Dropdown
        value={{
          value: selectedDevice?.id,
          label: selectedDevice?.name,
        }}
        onChange={(selectedOption: any) => onDeviceChange(selectedOption.value)}
        options={devices.map((device) => ({
          value: device.id,
          label: device.name,
        }))}
      />
      <ContainerWrapper>
        <ContainerLeft>
          {results.map((result) => (
            <Result
              imageURL={result.album.images[0].url}
              key={result.id}
              name={result.name}
              artists={result.artists}
              popularity={result.popularity}
              onArtistClick={(artist) => setSearch(artist.name)}
              selected={
                !!playlistTracks.find(
                  (playlistTrack) => playlistTrack.id === result.id
                )
              }
              onSelect={() => selectTrack(result)}
              onPlay={() => playSong(selectedDevice?.id || "", result.uri)}
            />
          ))}
        </ContainerLeft>
        <ContainerRight>
          <Playlist
            songs={playlistTracks}
            onPlay={(uri) => playSong(selectedDevice?.id || "", uri)}
          />
        </ContainerRight>
      </ContainerWrapper>
    </Wrapper>
  );
}

export default App;
