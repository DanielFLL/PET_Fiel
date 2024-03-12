import React from 'react';
import { StyleSheet, View } from 'react-native';
import Avatar_User_Ms from './Avatar_User_Ms';
import Text_mns from './Text_mns';
import Text_Nome from './Text_Nome';

const Mensages_Colap = () => {
  return (
    <View style={styles.container}>
      <Avatar_User_Ms/>
      <View style={{gap: 10, width: 200}}>
        <Text_Nome />
        <Text_mns />
      </View>
    </View>
  );
}

export default Mensages_Colap;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'no-wrap',
      marginVertical: 10,
      gap: 10,
      backgroundColor: '#FEFDF0',
      alignItems: 'center',
      justifyContent: 'center',
      width: 350
    },
  });