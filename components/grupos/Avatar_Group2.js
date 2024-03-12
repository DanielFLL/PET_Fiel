import * as React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

const Avatar_Group = () => (
  <View style={{ borderWidth: 3, borderRadius: 100, borderColor: '#00D1FF', overflow: 'hidden' }}>
    <Avatar.Image size={100} source={{ uri: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
  </View>
);
export default Avatar_Group