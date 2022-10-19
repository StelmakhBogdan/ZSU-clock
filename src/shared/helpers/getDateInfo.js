export const getDateInfo = () => {

  const date = new Date();
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hours = date.getHours();
  const  ampm = hours >= 12 ? 'II' : 'I';


  const dateInfo = `${day}.${month}.${year}  ${ampm}`

  return { dateInfo }
};
