import TextLabel from "../../components/TextLabel/TextLabel";
import { DetailScreenRouteProp } from "../../navigator/rootNavigator.types";
import { useRoute } from "@react-navigation/native";
import { DetailTable, DetailWrapper } from "./detailScreen.style";
import DetailRow from "../../components/DetailRow/DetailRow";
import { graphql, useLazyLoadQuery } from "react-relay";
import { DetailScreenQuery } from "./__generated__/DetailScreenQuery.graphql";

const DetailScreen = () => {
  const {
    params: { pokemonName },
  } = useRoute<DetailScreenRouteProp>();

  const data = useLazyLoadQuery<DetailScreenQuery>(
    graphql`
      query DetailScreenQuery($name: String!) {
        pokemon(name: $name) {
          name
          height
          is_default
          weight
        }
      }
    `,
    { name: pokemonName }
  );

  const pokemon = data?.pokemon;

  return (
    <DetailWrapper>
      <TextLabel type="header">{pokemonName}</TextLabel>
      <DetailTable>
        <DetailRow label="Name" value={pokemon?.name || ""} />
        <DetailRow label="Height" value={pokemon?.height || ""} />
        <DetailRow
          label="Is Default"
          value={pokemon?.is_default ? "Yes" : "No"}
        />
        <DetailRow label="Weight" value={pokemon?.weight || ""} />
      </DetailTable>
    </DetailWrapper>
  );
};

export default DetailScreen;
