import * as React from 'react';
import { Button } from 'react-native-paper';

const BotaoTexto = ({icon, onPress}) => {

  return (
    <Button 
      icon={icon} 
      style={{width: 50, height: 65, justifyContent: 'center'}}
      labelStyle={{fontSize: 50, color: '#2f2f2f', marginLeft: 8}} 
      mode="outlined"
      onPress={() => onPress()}
    >
    </Button>
  )
};

export default BotaoTexto;