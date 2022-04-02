import { useEffect, useState } from "react";
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState<any>();

  const getLocation = async () => {

    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;
      const { coords } = await Location.getLastKnownPositionAsync() || {};
      const { latitude, longitude } = coords || {};
      setLocation({ latitude, longitude });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLocation();
  }, []); // exec only once

  return location;
}

export default useLocation;