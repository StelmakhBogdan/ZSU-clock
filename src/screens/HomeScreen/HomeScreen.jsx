import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { CLOCK } from '../../shared/constants/pathNames';
import { localStorage } from '../../shared/helpers/localStorage';

import { SStatusBar, SSafeAreaView, STextInput , SImageBackground , SButton, SText } from './style';

const  HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    localStorage().getItem('title').then((data) => {
      if (data) {
        setText(JSON.parse(data));
      }
    });
  }, []);

  const navigateToWatch = () => {
    localStorage().setItem('title', text).then(() => {
      navigation.navigate(CLOCK)
    })
  }


  return (
    <>
      <SStatusBar />
      <SSafeAreaView>
        <STextInput
            onChangeText={setText}
            value={text}
            maxLength={30}
        />

        <SImageBackground
          source={{uri: 'https://i.pinimg.com/originals/25/c5/09/25c5094cc43fa9e1bec0b83b296831c3.gif'}}
          resizeMode="cover"
        >
          <SButton onPress={navigateToWatch} >
            <SText>OK</SText>
          </SButton>
        </SImageBackground>
      </SSafeAreaView>
    </>
  );
}

export default HomeScreen
