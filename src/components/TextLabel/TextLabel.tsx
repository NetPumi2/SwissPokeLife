import { TextProps } from "react-native";

import {
  CellLabel,
  CommonLabel,
  HeaderLabel,
  RowLabel,
} from "./textLabel.style";

interface Props extends TextProps {
  type: "common" | "header" | "cell" | "row";
}

const TextLabel = ({ type = "common", ...rest }: Props) => {
  switch (type) {
    case "row":
      return <RowLabel {...rest} />;
    case "cell":
      return <CellLabel {...rest} />;
    case "header":
      return <HeaderLabel {...rest} />;
    case "common":
      return <CommonLabel {...rest} />;
    default:
      return <CommonLabel {...rest} />;
  }
};

export default TextLabel;
