import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import MainScreen from "../screens/Main/MainScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import { RouteProp } from "@react-navigation/native";

export enum ScreenNames {
  HOME = "Home",
  DETAIL = "Detail",
}

type DetailScreenProp = {
  pokemonId: number;
  pokemonName: string;
};

type MainNavigatorStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.DETAIL]: DetailScreenProp;
};

export type DetailScreenRouteProp = RouteProp<
  MainNavigatorStackParamList,
  ScreenNames.DETAIL
>;

export type NavigationType =
  NativeStackNavigationProp<MainNavigatorStackParamList>;

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
