import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export enum ScreenNames {
  HOME = "Home",
  DETAIL = "Detail",
}

type DetailScreenProp = {
  pokemonId: number;
  pokemonName: string;
};

export type MainNavigatorStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.DETAIL]: DetailScreenProp;
};

export type DetailScreenRouteProp = RouteProp<
  MainNavigatorStackParamList,
  ScreenNames.DETAIL
>;

export type NavigationType =
  NativeStackNavigationProp<MainNavigatorStackParamList>;
