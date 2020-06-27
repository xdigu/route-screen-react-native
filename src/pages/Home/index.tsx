import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {AuthContext} from '../../services/Auth';
import Styles from '../../styles';

const Home = () => {
  const {userToken} = useContext(AuthContext);
  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Home</Text>
      <Text>Token: {userToken}</Text>
    </View>
  );
};

export default Home;
