//TODO implementation TS
export const to12hClock = (hour) => {
  return hour > 12 ? hour - 12 : hour;
};

// type TimeObject = {
//   hours: number;
//   minutes: number;
//   seconds: number;
// };

export const getTime = () => {
  const date = new Date();
  const hours = (to12hClock(date.getHours()) / 12) * 360;
  const minutes = (date.getMinutes() / 60) * 360;
  const seconds = (date.getSeconds() / 60) * 360;
  return { hours, minutes, seconds };
};
