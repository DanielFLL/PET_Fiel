import * as React from 'react';
import { View } from 'react-native';
import TextoGeral from './TextoGeral';
import AvatarText from './AvatarText';

const TamanhoFonte = () => {
  const [text, setText] = React.useState("24");

  return (
    <View style={{gap: 20}}>
        <TextoGeral color="#2f2f2f" weight="700" variant="headlineMedium" texto="Tamanho de Fonte" />
        <AvatarText />
    </View>
  );
};

export default TamanhoFonte;
