import React, { useState, useEffect } from 'react';

import { CLOCK } from '../../shared/constants/pathNames';
import { localStorage } from '../../shared/helpers/localStorage';

import { SStatusBar, SSafeAreaView, STextInput , SImageBackground , SButton, SText } from './style';

const  HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');

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
          source={require('../../assets/gif/radarGif.gif') }
          resizeMode="contain"
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
