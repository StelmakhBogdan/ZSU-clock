import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HeaderComponent = () => {
  return (
    <Header headerBackground={<Text style={{ color: '#000' }}>HEADER</Text>}/>
  )
}

export default HeaderComponent;
