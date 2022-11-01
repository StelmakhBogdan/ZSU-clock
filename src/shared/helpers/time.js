//TODO implementation TS
export const to12hClock = (hour) => {
  return hour >= 12 ? hour - 12 : hour;
};

// type TimeObject = {
//   hours: number;
//   minutes: number;
//   seconds: number;
// };

export const getTime = () => {
  const date = new Date()
  const hours = ((date.getHours() % 12) + date.getMinutes() / 60) * 30;
  const minutes = (date.getMinutes()) * 6;
  const seconds = (date.getSeconds()) * 6;
  return { hours, minutes, seconds };
};
