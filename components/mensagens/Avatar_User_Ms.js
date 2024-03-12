import * as React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

const AvatarImg = () => (
  <View style={{ borderWidth: 3, borderRadius: 50, borderColor: '#64059F', overflow: 'hidden' }}>
    <Avatar.Image
      size={80}
      source={require('../../assets/img/avatar_user_ms.png')}
      style={{ backgroundColor: 'transparent' }} />
  </View>
);

export default AvatarImg
