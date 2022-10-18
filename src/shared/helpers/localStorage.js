import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorage = () => {
  const setItem = async (key, value) =>  await AsyncStorage.setItem(`${key}`, JSON.stringify(value));
  const getItem = async (key) => await AsyncStorage.getItem(`${key}`);
  const removeItem = async (key) => await AsyncStorage.removeItem(`${key}`);

  return  {
    setItem,
    getItem,
    removeItem
  }
};
