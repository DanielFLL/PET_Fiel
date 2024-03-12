import * as React from 'react';
import { Chip } from 'react-native-paper';

const EntrarGoogle = () => (
  <Chip 
    icon="google" 
    mode="outlined" 
    style={{ backgroundColor: 'transparent', borderRadius: 12, width: 270, textAlignVertical: 'center' }}
    onPress={() => console.log('Pressed')}>
      Entre com sua conta Google
  </Chip>
);

export default EntrarGoogle;