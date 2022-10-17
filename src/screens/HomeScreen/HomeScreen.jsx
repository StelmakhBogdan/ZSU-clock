import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  useColorScheme,
  Button,
} from 'react-native';

import { CLOCK } from '../../shared/constants/pathNames';

const  HomeScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const navigateToWatch = () => {
     navigation.navigate(CLOCK)
  }

  console.log(text);

  return (
    <SafeAreaView>
      <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          maxLength={30}
      />
      <Button
        title="Ok"
        onPress={navigateToWatch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    color: '#000',
    alignItems: 'stretch',
  },
});

export default HomeScreen
