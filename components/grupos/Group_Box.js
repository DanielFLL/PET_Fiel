import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Avatar_Group2 from './Avatar_Group2';


const Group_box = () => (
  <Card>
    <View style={styles.container}>
        <Card.Content style={{alignItems: 'center', padding: 10, gap: 10, borderColor: '#64059F', borderWidth: 2, borderRadius: 12, width: 160}}>
            <Text style={{color: '#64059F', fontWeight: '700', fontSize: 16}} variant="titleLarge">Seu Amigo Vet</Text>
            <Avatar_Group2 />
            <Text style={{fontSize: 14}} variant="bodyMedium">Somos um grupo de veterinários...</Text>
        </Card.Content>

        <Card.Content style={{alignItems: 'center', padding: 10, gap: 10, borderColor: '#64059F', borderWidth: 2, borderRadius: 12, width: 160}}>
            <Text style={{color: '#64059F', fontWeight: '700', fontSize: 16}} variant="titleLarge">Sua Loja Pet</Text>
            <Avatar_Group2 />
            <Text style={{fontSize: 14}} variant="bodyMedium">Somos um grupo de veterinários...</Text>
        </Card.Content>

        <Card.Content style={{alignItems: 'center', padding: 10, gap: 10, borderColor: '#64059F', borderWidth: 2, borderRadius: 12, width: 160}}>
            <Text style={{color: '#64059F', fontWeight: '700', fontSize: 16}} variant="titleLarge">Amigos PET p/ Criar</Text>
            <Avatar_Group2 />
            <Text style={{fontSize: 14}} variant="bodyMedium">Somos um grupo de veterinários...</Text>
        </Card.Content>

        <Card.Content style={{alignItems: 'center', padding: 10, gap: 10, borderColor: '#64059F', borderWidth: 2, borderRadius: 12, width: 160}}>
            <Text style={{color: '#64059F', fontWeight: '700', fontSize: 16}} variant="titleLarge">Vizinhos PET</Text>
            <Avatar_Group2 />
            <Text style={{fontSize: 14}} variant="bodyMedium">Somos um grupo de veterinários...</Text>
        </Card.Content>

        <Card.Content style={{alignItems: 'center', padding: 10, gap: 10, borderColor: '#64059F', borderWidth: 2, borderRadius: 12, width: 160}}>
            <Text style={{color: '#64059F', fontWeight: '700', fontSize: 16}} variant="titleLarge">Hotel PET</Text>
            <Avatar_Group2 />
            <Text style={{fontSize: 14}} variant="bodyMedium">Somos um grupo de veterinários...</Text>
        </Card.Content>

        <Card.Content style={{alignItems: 'center', padding: 10, gap: 10, borderColor: '#64059F', borderWidth: 2, borderRadius: 12, width: 160}}>
            <Text style={{color: '#64059F', fontWeight: '700', fontSize: 16}} variant="titleLarge">Seu Amigo Vet</Text>
            <Avatar_Group2 />
            <Text style={{fontSize: 14}} variant="bodyMedium">Somos um grupo de veterinários...</Text>
        </Card.Content>
    </View>
  </Card>
);

export default Group_box;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 10,
      gap: 10,
      backgroundColor: '#FEFDF0',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });