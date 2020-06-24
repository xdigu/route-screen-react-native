import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OpenMenu from '../components/OpenMenu';
import HomeScreen from '../pages/Home';
import {Colors} from '../constants/colors';

const HomeStack = createStackNavigator();

const Home = ({navigation}) => {
  const toggleDrawerMenu = () => navigation.toggleDrawer();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.header},
        headerTintColor: Colors.white,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <OpenMenu toggle={toggleDrawerMenu} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default Home;
