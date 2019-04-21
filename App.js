import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import CameraPage from './src/pages/Camera';
import Camera2Page from './src/pages/Camera2';
import Registration from './src/pages/Registration';
import Speakers from './src/pages/Speakers';
import Speaker from './src/pages/Speaker';

const DrawerNavigator = createDrawerNavigator(
  {
    Speakers: {
      screen: Speakers,
    },
    Camera: {
      screen: CameraPage,
    },
    Camera2: {
      screen: Camera2Page,
    },
    Registration: {
      screen: Registration,
    },
  },
  {
    contentOptions: {
      labelStyle: {
        color: '#000',
      },
    }
  }
);

const SpeakerNavigator = createStackNavigator({
  Speakers: {
    screen: DrawerNavigator,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Speaker: {
    screen: Speaker,
    navigationOptions: () => ({
      header: null,
    }),
  }
});

export default createAppContainer(SpeakerNavigator);
