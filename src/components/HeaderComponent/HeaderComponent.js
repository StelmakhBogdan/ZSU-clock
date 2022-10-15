import React from 'react';
import {
  Text,
  Header,
} from 'react-native';

const HeaderComponent = () => {
  return (
    <Header headerBackground={<Text style={{ color: '#000' }}>HEADER</Text>}/>
  )
}

export default HeaderComponent;
