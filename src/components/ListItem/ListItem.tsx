import TextLabel from "../TextLabel/TextLabel";

import { ItemTouchableWrapper, ItemImage } from "./listItem.style";

interface Props {
  label?: string;
  uri?: string;
  onPress?: () => void;
}

const ListItem = ({ label, uri, onPress }: Props) => (
  <ItemTouchableWrapper onPress={onPress} style={{}}>
    <ItemImage source={{ uri: uri }} />
    <TextLabel type="cell">{label}</TextLabel>
  </ItemTouchableWrapper>
);

export default ListItem;
