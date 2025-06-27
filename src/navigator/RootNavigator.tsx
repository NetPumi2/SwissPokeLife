import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/Main/MainScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import {
  ScreenNames,
  MainNavigatorStackParamList,
} from "./rootNavigator.types";

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={ScreenNames.HOME}
  >
    <Stack.Screen name={ScreenNames.HOME} component={MainScreen} />
    <Stack.Screen name={ScreenNames.DETAIL} component={DetailScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
