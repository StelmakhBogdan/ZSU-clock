import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

import StackScreen from './src/navigation';
import { darkTheme, lightTheme } from './src/assets/themes';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StackScreen/>
    </ThemeProvider>
  )
};

export default App;
