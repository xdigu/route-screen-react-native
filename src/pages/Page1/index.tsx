import React from 'react';
import {View, Text, Button} from 'react-native';

import Styles from '../../styles';

const Page1 = ({navigation}) => {
  const goNextPage = () => navigation.navigate('Screen2');

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Screen 1</Text>
      <Button title="Go to next page" onPress={goNextPage} />
    </View>
  );
};

export default Page1;
