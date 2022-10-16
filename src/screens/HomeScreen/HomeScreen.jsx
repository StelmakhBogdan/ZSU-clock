import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const  HomeScreen = () => {
  console.log('IM HERE');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f444fe' }}>
      <Text style={{color: '#000'}}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen
