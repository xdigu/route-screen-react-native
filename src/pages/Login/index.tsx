import React from 'react';
import {View, Button, Text} from 'react-native';

import {AuthContext} from '../../services';
import Styles from '../../styles';

const Login = () => {
  const {toggleLogged} = React.useContext(AuthContext);

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Login</Text>
      <Button title="Login" onPress={toggleLogged} />
    </View>
  );
};

export default Login;
