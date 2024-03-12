import * as React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import BotaoTexto from './BotaoTexto';
import FontSizeAdjuster from './FontSizeAdjuster';

const AvatarText = () => {

  const [text, setText] = React.useState("24");

  const alterarTextoMenos = () => {
    setText((prevText) => prevText - 1);
  };
  const alterarTextoMais = () => {
    setText((prevText) => Number(prevText) + 1);
  };

  return (
    <View style={{gap: 20}}>
      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
        <BotaoTexto icon='format-font-size-decrease' onPress={alterarTextoMenos} />
        <Avatar.Text size={70} label={text} style={{borderRadius: 8, backgroundColor: 'transparent', borderWidth: 2}} color='#2f2f2f' />
        <BotaoTexto icon='format-font-size-increase' onPress={alterarTextoMais} />
      </View>
        <FontSizeAdjuster />
    </View>
  )
};

export default AvatarText