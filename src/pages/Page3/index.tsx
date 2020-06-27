import React from 'react';
import {View, Text, Button} from 'react-native';
import Styles from '../../styles';

const Page3 = ({navigation}) => {
  const handlerOpenMenu = () => navigation.toggleDrawer();

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Screen 3</Text>
      <Button title="Open menu" onPress={handlerOpenMenu} />
    </View>
  );
};

export default Page3;
