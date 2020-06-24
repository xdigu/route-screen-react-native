import React from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';

import style from './style';

const OpenMenu = ({toggle}) => (
  <TouchableWithoutFeedback style={style.menuContainer} onPress={toggle}>
    <Text style={style.menuText}>Menu</Text>
  </TouchableWithoutFeedback>
);

export default OpenMenu;
