import React, { useState, useEffect } from 'react';

import Clock from '../../components/Clock';
import { getDateInfo } from '../../shared/helpers/getDateInfo';
import {localStorage} from '../../shared/helpers/localStorage';

import { SStatusBar, SSafeAreaView, SScrollView, SText } from './style';


const ClockScreen = () => {
  const [title, setTile] = useState('');

  useEffect(() => {
    localStorage().getItem('title').then((data) => {
      if (data) {
        setTile(JSON.parse(data));
      }
    });
  }, []);

  const { dateInfo } = getDateInfo();

  return (
    <>
      <SStatusBar />
      <SSafeAreaView>
        <SScrollView
          centerContent={true}
          contentInsetAdjustmentBehavior='automatic'
        >
          <SText isTitle>{title}</SText>
          <SText>{dateInfo}</SText>
          <Clock />
        </SScrollView>
      </SSafeAreaView>
    </>
  );
}

export default ClockScreen;
