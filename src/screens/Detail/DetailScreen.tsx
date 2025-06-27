import { View, Text, Button, TouchableOpacity } from "react-native";
import TextLabel from "../../components/TextLabel/TextLabel";
import { DetailScreenRouteProp } from "../../navigator/RootNavigator";
import { useRoute } from "@react-navigation/native";
import { DetailTable, DetailWrapper } from "./detailScreen.style";
import DetailRow from "../../components/DetailRow/DetailRow";

const DetailScreen = () => {
  const {
    params: { pokemonName, pokemonId },
  } = useRoute<DetailScreenRouteProp>();

  return (
    <DetailWrapper>
      <TextLabel type="header">{pokemonName}</TextLabel>
      <DetailTable>
        <DetailRow label="Name" value={pokemonName} />
        <DetailRow label="ID" value={pokemonId} />
      </DetailTable>
    </DetailWrapper>
  );
};

export default DetailScreen;
