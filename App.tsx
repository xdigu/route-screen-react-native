import 'react-native-gesture-handler';
import React from 'react';

import {AtuhProvider} from './src/services';

import Routes from './src/routes';

const App = () => {
  return (
    <AtuhProvider>
      <Routes />
    </AtuhProvider>
  );
};

export default App;
