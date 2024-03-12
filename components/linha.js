import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';

const Linha = ({ width, style }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
    <Divider
      style={{
        flex: 1,
        height: 3,
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 20,
        width: width || '60%',
        background: 'linear-gradient(90deg, #00D1FF 0%, #B5FF92 50%, #7A00DA 100%)',
      }}
    />
  </View>
);

export default Linha;