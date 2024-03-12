import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Logo_small from './small_logo';
import Busca from './searchbar_box';
import Notificacao from './Notificacao';
import { View } from 'react-native';
import TextoGeral from './settings/TextoGeral';

const HeadBar = () => {
 
  return (
    <Appbar.Header style={{ backgroundColor: 'transparent' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30, marginBottom: -5 }}>
        <Logo_small />
        <TextoGeral color="#7A00DA" weight="700" variant="headlineLarge" texto="PET Fiel" />
      </View>
      {/* <Busca />
      <Notificacao /> */}
    </Appbar.Header>
  );
};

export default HeadBar;
