import React from 'react';
import {View, Text, Button} from 'react-native';
import style from '../../styles';

const Page3 = ({navigation}) => {
  const handlerOpenMenu = () => navigation.toggleDrawer();

  return (
    <View style={style.container}>
      <Text>Screen 3</Text>
      <Button title="Open menu" onPress={handlerOpenMenu} />
    </View>
  );
};

export default Page3;
