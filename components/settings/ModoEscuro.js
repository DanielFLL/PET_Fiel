import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-paper';
import TextoGeral from './TextoGeral';

const ModoEscuro = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
  <View style={styles.container}>
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
    <TextoGeral color="#2f2f2f" weight="700" variant="headlineMedium" texto="Modo Escuro" />
  </View>
  );
};

export default ModoEscuro;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FEFDF0',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      gap: 10
  },
});