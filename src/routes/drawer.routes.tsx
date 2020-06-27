import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AuthContext} from '../services/Auth';
import CustomDrawer from '../pages/CustomDrawer';
import Nesting from './nesting.routes';
import Home from './home.routes';
import Tab from './tab.routes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const {signOut} = useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer signOut={signOut} {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Nesting" component={Nesting} />
      <Drawer.Screen name="Tab" component={Tab} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
