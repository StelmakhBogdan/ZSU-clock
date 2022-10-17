import React from "react";
import { Line } from "react-native-svg";
import { polarToCartesian } from "../../shared/helpers/geometry";

// TODO implementation TS
// type THandProps = {
//   center: number;
//   radius: number;
//   angle: number;
//   strokeWidth: string;
//   stroke: string;
// };

const Hand = (props) => {
  const { center, radius, angle, stroke, strokeWidth } = props;
  const { x, y } = polarToCartesian(center, center, radius, angle);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      stroke={stroke}
    />
  );
};

export default Hand;
