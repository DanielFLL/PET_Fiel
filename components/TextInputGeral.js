import * as React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputGeral = ({label}) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default TextInputGeral;