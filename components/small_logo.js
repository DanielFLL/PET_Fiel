import * as React from 'react';
import { Avatar } from 'react-native-paper';

const Logo_small = () => (
  <Avatar.Image
    size={100}
    source={require('../assets/img/logo_small.png')}
    style={{ backgroundColor: 'transparent' }} />
);
export default Logo_small