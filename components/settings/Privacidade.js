import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import TextoGeral from './TextoGeral';

const Privacidade = () => {
  return (
    <View style={styles.container}>
        <Avatar.Icon color='#2f2f2f' style={{backgroundColor: 'transparent'}} size={90} icon="lock-outline" />
        <TextoGeral color="#2f2f2f" weight="700" variant="headlineMedium" texto="Privacidade" />
    </View>
  );
};

export default Privacidade;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FEFDF0',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -20,
      marginTop: -20,
      gap: 0
  },
});