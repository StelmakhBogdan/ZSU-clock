import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import StackScreen from './src/navigation';
import { darkTheme, lightTheme } from './src/assets/themes';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StackScreen/>
    </ThemeProvider>
  )
};

export default App;
