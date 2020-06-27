import 'react-native-gesture-handler';
import React from 'react';

import AtuhProvider from './src/services/Auth';

import Routes from './src/routes';

const App = () => {
  return (
    <AtuhProvider>
      <Routes />
    </AtuhProvider>
  );
};

export default App;
