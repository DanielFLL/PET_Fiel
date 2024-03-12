import * as React from 'react';
import { Avatar } from 'react-native-paper';

const AvatarImg2 = () => (
    <Avatar.Image
        size={100}
        source={require('../assets/img/avatar2.png')}
        style={{ 
            backgroundColor: 'transparent', 
            borderColor: 'purple', 
            borderWidth: 5, 
            borderRadius: 50, 
            marginTop: -180,
            alignItems: 'center',
            justifyContent: 'center' 
        }}
    />
);
export default AvatarImg2