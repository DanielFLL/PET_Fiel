import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Avatar_Group from '../grupos/Avatar_Group';


const Groups_Fav = () => (
    <View style={styles.container}>
        <Text style={{fontWeight: '700', color: '#00D1FF', fontSize: 28}} variant="titleLarge">Grupos Curtidos</Text>
        <Card style={{backgroundColor: '#FEFDF0'}}>
            <Card.Content style={{alignItems: 'center', gap: 10, borderWidth: 2, borderColor: '#64059F', borderRadius: 8}}>
            <Text style={{fontWeight: '700', color: '#64059F'}} variant="titleLarge">Página Amigo PET</Text>
            <Avatar_Group />
            </Card.Content>
            <Card.Content style={{alignItems: 'center', gap: 10, marginTop: 20, borderWidth: 2, borderColor: '#64059F', borderRadius: 8}}>
            <Text style={{fontWeight: '700', color: '#64059F'}} variant="titleLarge">Página VET Amigo</Text>
            <Avatar_Group />
            </Card.Content>
        </Card>
    </View>
);

export default Groups_Fav;

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