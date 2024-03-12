import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Senha_LogIn = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
        label="senha"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        style={{ width: 300, height:45, marginTop: 10, marginBottom: 20, backgroundColor: '#ddd' }}
    />
  );
};

export default Senha_LogIn;