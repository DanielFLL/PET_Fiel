import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Text } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const Text_Fav = () => (
    <View style={styles.container}>
        <Text style={{fontWeight: '700', color: '#00D1FF', fontSize: 28}} variant="titleLarge">Textos Curtidos</Text>
        <Text style={{padding: 10, textAlign: 'justify', borderWidth: 2, borderColor: '#64059F', borderRadius: 8}} variant="bodyLarge">Os cachorros são companheiros leais, repletos de alegria e afeto. Suas expressões expressam amor puro. Amigos peludos, proporcionam carinho incondicional, trazendo luz aos dias de seus donos.</Text>
        <Text style={{padding: 10, textAlign: 'justify', borderWidth: 2, borderColor: '#64059F', borderRadius: 8}} variant="bodyLarge">Os cachorros são companheiros leais, repletos de alegria e afeto. Suas expressões expressam amor puro. Amigos peludos, proporcionam carinho incondicional, trazendo luz aos dias de seus donos.</Text>
    </View>
);

export default Text_Fav;

const styles = StyleSheet.create({
    container: {
      maxWidth: screenWidth,
      flex: 1,
      flexDirection: 'column',
      gap: 10,
      marginVertical: 20,
      backgroundColor: '#FEFDF0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });