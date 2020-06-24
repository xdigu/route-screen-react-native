import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AtuhProvider} from './src/services';

import {Routes} from './src/routes';

const App = () => {
  return (
    <AtuhProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AtuhProvider>
  );
};

export default App;
