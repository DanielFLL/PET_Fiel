import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Email_LogIn = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="e-mail"
      value={text}
      onChangeText={text => setText(text)}
      style={{ width: 300, height:45, marginTop: 20, marginBottom: 10, backgroundColor: '#ddd' }}
    />
  );
};

export default Email_LogIn;