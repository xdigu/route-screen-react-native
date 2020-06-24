import React from 'react';
import {View, Button, Text} from 'react-native';

import {AuthContext} from '../../services';
import style from './style';

const Login = () => {
  const {toggleLogged} = React.useContext(AuthContext);

  return (
    <View style={style.container}>
      <Text style={style.screenName}>Login</Text>
      <Button title="Login" onPress={toggleLogged} />
    </View>
  );
};

export default Login;
