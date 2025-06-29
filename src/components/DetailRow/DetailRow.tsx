import TextLabel from "../../components/TextLabel/TextLabel";
import { DetailRawWrapper } from "./detailRow.style";

interface Props {
  label?: string;
  value?: string | number;
}

const DetailRow = ({ label, value }: Props) => (
  <DetailRawWrapper>
    <TextLabel type="row">{label}</TextLabel>
    <TextLabel type="row">{value}</TextLabel>
  </DetailRawWrapper>
);

export default DetailRow;
