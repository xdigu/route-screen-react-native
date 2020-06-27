import React, {useState} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

import {AuthContext} from '../../services/Auth';
import Styles from '../../styles';

const Login = () => {
  const {signIn} = React.useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const doLogin = () => signIn(email, pass);

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Login</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={doLogin} />
    </View>
  );
};

export default Login;
