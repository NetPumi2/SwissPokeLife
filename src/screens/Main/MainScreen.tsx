import TextLabel from "../../components/TextLabel/TextLabel";
import ListItem from "../../components/ListItem/ListItem";
import { AppContainer } from "./mainScreen.style";
import { useNavigation } from "@react-navigation/native";
import {
  NavigationType,
  ScreenNames,
} from "../../navigator/rootNavigator.types";
import { FlatList } from "react-native";
interface Pokemon {
  id: number;
  name: string;
  artwork: string;
}

const MockedData: Pokemon[] = [
  {
    id: 2,
    name: "ivysaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 3,
    name: "ivysaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 4,
    name: "ivysaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 5,
    name: "ivysaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
];

const MainScreen = () => {
  const { navigate } = useNavigation<NavigationType>();
  return (
    <AppContainer>
      <TextLabel type="header">Swiss Poke Life!</TextLabel>
      <FlatList
        data={MockedData}
        renderItem={({ item }) => (
          <ListItem
            label={item.name}
            uri={item.artwork}
            onPress={() => {
              navigate(ScreenNames.DETAIL, {
                pokemonId: item.id,
                pokemonName: item.name,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={{ flex: 1 }} // move to app.style.tsx
      />
    </AppContainer>
  );
};

export default MainScreen;

// {
//   pokemons(limit: 10) {
//     results {
//       id
//       name
//       artwork
//     }
//   }
// }
