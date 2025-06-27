import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => (
  <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
