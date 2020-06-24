import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import OpenMenu from '../components/OpenMenu';
import {Colors} from '../constants/colors';

const Stack = createStackNavigator();

const NestingNavigation = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: Colors.header},
      headerTintColor: Colors.white,
    }}>
    <Stack.Screen
      name="Screen1"
      component={Page1}
      options={{
        title: 'Screen 1',
        headerLeft: () => <OpenMenu toggle={navigation.toggleDrawer} />,
      }}
    />
    <Stack.Screen
      name="Screen2"
      component={Page2}
      options={{title: 'Screen 2'}}
    />
    <Stack.Screen
      name="Screen3"
      component={Page3}
      options={{title: 'Screen 3'}}
    />
  </Stack.Navigator>
);

export default NestingNavigation;
