import React from 'react';
import {View, Text, Button} from 'react-native';

import Styles from '../../styles';

const Page2 = ({navigation}) => {
  const goNextPage = () => navigation.navigate('Screen3');

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Screen 2</Text>
      <Button title="Go to next page" onPress={goNextPage} />
    </View>
  );
};

export default Page2;
