import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { CLOCK } from '../../shared/constants/pathNames';

const  HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigateToWatch = () => {
     navigation.navigate(CLOCK)
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f444fe' }}>
      <Text style={{color: '#000'}}>Home Screen</Text>
      <Button
        title="Ok"
        onPress={navigateToWatch}
      />
    </View>
  );
}

export default HomeScreen
