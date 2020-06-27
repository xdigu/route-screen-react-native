import React from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';

import {Colors} from '../../constants/colors';
import style from './style';

const CustomDrawer = ({state, navigation, signOut}) => {
  const {routes, index: draweIndex} = state;

  return (
    <SafeAreaView>
      <View style={style.drawerContainer}>
        <Text style={style.menuTitle}>Menu</Text>
        {routes.map(({name, key}, index: number) => (
          <View
            key={key}
            style={[
              style.itemCointainer,
              {
                backgroundColor:
                  index === draweIndex ? Colors.spotlightMenu : Colors.white,
              },
            ]}>
            <Button title={name} onPress={() => navigation.navigate(name)} />
          </View>
        ))}
        <Button title="Logout" onPress={signOut} color={Colors.red} />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
