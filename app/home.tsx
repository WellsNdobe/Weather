import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { s } from "../styles/homeStyles";
export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.txt}>Basic Info</Text>
      </View>

      <View style={s.search_bar}>
        <Text style={s.txt}>Search bar</Text>
      </View>
      <View style={s.advanced_info}>
        <Text style={s.txt}>Advanced Weather info</Text>
      </View>
    </>
  );
}
