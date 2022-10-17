import React from 'react';

import Clock from '../../components/Clock';
import {getDateInfo} from '../../shared/helpers/getDateInfo';

import { SStatusBar, SSafeAreaView, SScrollView, SText } from './style';

const ClockScreen = () => {

  const title = "MY LONG TITLE asasasasasasasasassasasasasasasasasasas"
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
