import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./home";
import { ImageBackground } from "react-native";
import backgroundImg from "../assets/images/background.jpg";
import { s } from "../styles/indexStyles";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { useEffect, useState } from "react";
import { weatherAPI } from "./weather";

type Coordinates = {
  lat: number | string;
  lng: number | string;
};

export default function Index() {
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>();
  const [weather, setWeather] = useState();

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coordinates: Coordinates) {
    const weatherResponse = await weatherAPI.fetchWeatherByCoords(coordinates);
    setWeather(weatherResponse);
  }

  async function getUserLocation() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location: LocationObject = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: "48.85",
        lng: "2.35",
      });
    }
  }
  console.log(weather);

  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background}
      source={backgroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
