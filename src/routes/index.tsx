import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from '../services';
import Drawer from './drawer.routes';
import Login from './login.routes';

const Stack = createStackNavigator();

const Routes = () => {
  const {isLoggedOut} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedOut ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              animationTypeForReplace: isLoggedOut ? 'pop' : 'push',
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
