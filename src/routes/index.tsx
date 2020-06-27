import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from '../services/Auth';
import Drawer from './drawer.routes';
import Login from './login.routes';
import Splash from '../pages/Splash';

const Stack = createStackNavigator();

const Routes = () => {
  const {isLoading, isSignout} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : isSignout ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen name="App" component={Drawer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
