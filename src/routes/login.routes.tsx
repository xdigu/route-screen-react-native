import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import {Colors} from '../constants/colors';

const Stack = createStackNavigator();

const Login = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: Colors.header},
      headerTintColor: Colors.white,
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default Login;
