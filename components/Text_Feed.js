import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Text_Feed = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="..."
      value={text}
      onChangeText={text => setText(text)}
      style={{ width: 160, height: 40, borderRadius: 8 }}
    />
  );
};

export default Text_Feed;