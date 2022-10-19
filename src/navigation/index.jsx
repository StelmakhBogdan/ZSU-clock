import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ClockScreen from '../screens/Clock';
import {useColorScheme} from 'react-native';
import {lightTheme, darkTheme} from '../assets/themes';

const Stack = createNativeStackNavigator();

const RootNavigator = () =>{
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: { backgroundColor: isDarkMode ? darkTheme.bgColor: lightTheme.bgColor }
          }}
        />
        <Stack.Screen
          name="Clock"
          component={ClockScreen}

          options={{
            title: '',
            headerStyle: { backgroundColor: isDarkMode ? darkTheme.bgColor: lightTheme.bgColor }
          }}
        />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default RootNavigator;
