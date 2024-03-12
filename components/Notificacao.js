import React from 'react';
import { View } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import ModalMsg from './mensagens/ModalMsg';


const Notificacao = () => {
  const handlePress1 = () => {
    console.log('Botão 1 pressionado');
  };

  const handlePress2 = () => {
    console.log('Botão 2 pressionado');
  };

  return (
    <View style={{ flexDirection: 'row', gap: -30 }}>
      <IconButton
        icon="email"
        color={MD3Colors.primary10}
        size={30}
        onPress={handlePress1}
      />
      <IconButton
        icon="bell"
        color={MD3Colors.primary10}
        size={30}
        onPress={handlePress2}
      />
      {/* <ModalMsg /> */}
    </View>
  );
};

export default Notificacao;
