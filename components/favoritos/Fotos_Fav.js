import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const Fotos_Fav = () => (
    <View style={styles.container}>
        <Text style={{fontWeight: '700', color: '#00D1FF', fontSize: 28}} variant="titleLarge">Fotos Curtidas</Text>
        <Card style={{maxWidth: screenWidth}}>
            <Card.Cover style={{width: 150}} source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </Card>
        <Card style={{maxWidth: screenWidth}}>
            <Card.Cover style={{width: 150}} source={{ uri: 'https://images.unsplash.com/photo-1558929996-da64ba858215?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </Card>
        <Card style={{maxWidth: screenWidth}}>
            <Card.Cover style={{width: 150}} source={{ uri: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </Card>
        <Card style={{maxWidth: screenWidth}}>
            <Card.Cover style={{width: 150}} source={{ uri: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </Card>
    </View>
);

export default Fotos_Fav;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 10,
      gap: 10,
      backgroundColor: '#FEFDF0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });