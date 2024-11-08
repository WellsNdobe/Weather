import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./home";
import { ImageBackground } from "react-native";
import backgroundImg from "../assets/images/background.jpg";
import { s } from "../styles/indexStyles";

export default function index() {
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
