import { CustomRow } from "../atoms/CustomRow";
import { OutsideNeuEffect } from "../atoms/OutsideNeuEffect";

export default function CardTitle() {
  return (
    <OutsideNeuEffect children={<CustomRow />} />
  );
}