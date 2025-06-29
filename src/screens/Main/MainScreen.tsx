import TextLabel from "../../components/TextLabel/TextLabel";
import ListItem from "../../components/ListItem/ListItem";
import { AppContainer } from "./mainScreen.style";
import { useNavigation } from "@react-navigation/native";
import {
  NavigationType,
  ScreenNames,
} from "../../navigator/rootNavigator.types";
import { FlatList } from "react-native";

import { useLazyLoadQuery, graphql } from "react-relay";
import { MainScreenQuery } from "./__generated__/MainScreenQuery.graphql";

const GET_ALL_POKEMON_QUERY = graphql`
  query MainScreenQuery {
    pokemons(limit: 20) {
      results {
        name
        artwork
      }
    }
  }
`;

const MainScreen = () => {
  const { navigate } = useNavigation<NavigationType>();

  const pokemonRawData = useLazyLoadQuery<MainScreenQuery>(
    GET_ALL_POKEMON_QUERY,
    {}
  );

  const pokemons = pokemonRawData?.pokemons?.results || [];

  return (
    <AppContainer>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => {
          return (
            <ListItem
              label={item?.name || ""}
              uri={item?.artwork || ""}
              onPress={() => {
                navigate(ScreenNames.DETAIL, {
                  pokemonName: item?.name || "",
                });
              }}
            />
          );
        }}
        keyExtractor={(item, index) => item?.name || index.toString()}
        style={{ flex: 1 }}
        ListEmptyComponent={
          <TextLabel type="header">No Pokemons found!</TextLabel>
        }
        ListHeaderComponent={
          <TextLabel type="header">Swiss Poke Life!</TextLabel>
        }
      />
    </AppContainer>
  );
};

export default MainScreen;
