import { useState, useEffect } from "react";
import spotify from "../utils/spotifyClient";

export default () => {
  const [selectedDevice, setSelectedDeviceState] = useState<
    SpotifyApi.UserDevice
  >();
  const [devices, setDevices] = useState<SpotifyApi.UserDevice[]>([]);

  useEffect(() => {
    (async () => {
      const devicesResponse = await spotify.getMyDevices();
      const currentPlaybackState = await spotify.getMyCurrentPlaybackState();

      setDevices(devicesResponse.devices);

      setSelectedDeviceState(
        currentPlaybackState.device || devicesResponse.devices[0]
      );
    })();
  }, []);

  const setSelectedDevice = (id: string) => {
    const foundDevice = devices.find((device) => device.id === id);
    setSelectedDeviceState(foundDevice);
  };

  return { devices, selectedDevice, setSelectedDevice };
};
