import * as React from 'react';
import { Chip } from 'react-native-paper';

const EntrarFacebook = () => (
  <Chip 
    icon="facebook" 
    mode="outlined"
    style={{ marginVertical: 20, backgroundColor: 'transparent', borderRadius: 12 }}
    onPress={() => console.log('Pressed')}>
      Entre com sua conta Facebook
  </Chip>
);

export default EntrarFacebook;