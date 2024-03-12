import * as React from 'react';
import { Avatar } from 'react-native-paper';

const AvatarImg = () => (
  <Avatar.Image
    size={250}
    source={require('../assets/img/logo.png')}
    style={{ marginBottom: 20, backgroundColor: 'transparent' }} />
);
export default AvatarImg