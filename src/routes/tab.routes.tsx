import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import {Colors} from '../constants/colors';
import OpenMenu from '../components/OpenMenu';

const TabBottom = createBottomTabNavigator();
const TabStack = createStackNavigator();

const TabNavigator = () => (
  <TabBottom.Navigator>
    <TabBottom.Screen name="Tab1" component={Tab1} options={{title: 'Tab 1'}} />
    <TabBottom.Screen name="Tab2" component={Tab2} options={{title: 'Tab 2'}} />
  </TabBottom.Navigator>
);

const Tab = ({navigation}) => {
  const handleToggle = () => navigation.toggleDrawer();
  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.header},
        headerTintColor: Colors.white,
      }}>
      <TabStack.Screen
        name="TabStack"
        component={TabNavigator}
        options={{headerLeft: () => <OpenMenu toggle={handleToggle} />}}
      />
    </TabStack.Navigator>
  );
};

export default Tab;
