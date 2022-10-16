import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ClockScreen from '../screens/Clock';

const Stack = createNativeStackNavigator();

const RootNavigator = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Clock" component={ClockScreen} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default RootNavigator;
