import React, { useState } from 'react';
import { Dimensions } from "react-native";
import Svg from "react-native-svg";

import ClockMarkings from "../../components/ClockMarkings";
import { useInterval } from "../../shared/hooks/useInterval";
import { getTime } from "../../shared/helpers/time";

import { Seconds, Minutes, Hours } from './style';


const { width } = Dimensions.get("window");
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const hourStickCount = 12;
const minuteStickCount = 12 * 6;

const Clock = () => {
  const [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (

    <Svg height={width} width={width}>
      <ClockMarkings
        minutes={minuteStickCount}
        hours={hourStickCount}
        radius={radius}
        center={center}
      />
      <Seconds
        angle={time.seconds}
        center={center}
        radius={radius}
        stroke='red'
        strokeWidth='1'
      />
      <Minutes
        angle={time.minutes}
        center={center}
        radius={radius}
        stroke='white'
        strokeWidth='5'
      />
      <Hours
        angle={time.hours}
        center={center}
        radius={radius}
        stroke='white'
        strokeWidth='7'
      />
    </Svg>
  )
};

export default Clock;
