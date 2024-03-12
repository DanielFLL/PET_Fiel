import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomDivider = ({ colors, width, style }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', style }}>
    <LinearGradient
      style={{
        flex: 1,
        height: 1,
        width: width || '80%',
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors || ['#000', '#fff']} // Cores do gradiente (preto e branco por padrão)
    />
  </View>
);

export default CustomDivider;
