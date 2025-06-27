import styled from "@emotion/native";

export const ItemTouchableWrapper = styled.TouchableOpacity({
  flexDirection: "row",
  alignItems: "center",
  padding: 10,
  borderWidth: 1,
  borderColor: "#ccc",
  marginBottom: 5,
});

export const ItemImage = styled.Image({
  width: 50,
  height: 50,
  marginRight: 10,
});
