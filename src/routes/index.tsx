import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from '../services';
import CustomDrawer from '../pages/CustomDrawer';
import Login from './login.routes';
import Nesting from './nesting.routes';
import Home from './home.routes';
import Tab from './tab.routes';

const Drawer = createDrawerNavigator();

const NewStack = createStackNavigator();

const App = () => {
  const {toggleLogged} = useContext(AuthContext);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => (
          <CustomDrawer toggleLogin={toggleLogged} {...props} />
        )}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Nesting" component={Nesting} />
        <Drawer.Screen name="Tab" component={Tab} />
      </Drawer.Navigator>
    </>
  );
};

const AppLogin = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Login />
  </>
);

export const Routes = () => {
  const {authState} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <NewStack.Navigator screenOptions={{headerShown: false}}>
        {authState ? (
          <NewStack.Screen
            name="Login"
            component={AppLogin}
            options={{
              animationTypeForReplace: authState ? 'pop' : 'push',
            }}
          />
        ) : (
          <NewStack.Screen name="Home" component={App} />
        )}
      </NewStack.Navigator>
    </NavigationContainer>
  );
};
