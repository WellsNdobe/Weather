import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./home";
import { ImageBackground } from "react-native";
import backgroundImg from "../assets/images/background.jpg";
import { s } from "../styles/indexStyles";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export default function index() {
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    getUserLocation();
  }, []);

  async function getUserLocation() {
    const status = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
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
  console.log(coordinates);
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
