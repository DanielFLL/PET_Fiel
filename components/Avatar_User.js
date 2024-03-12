import * as React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

const Avatar_User = () => (
  <View style={{ borderWidth: 2, borderRadius: 50, borderColor: '#64059F', overflow: 'hidden', justifyContent: 'center' }}>
    <Avatar.Image size={40} source={require('../assets/img/Avatar_User.png')} />
  </View>
);
export default Avatar_User