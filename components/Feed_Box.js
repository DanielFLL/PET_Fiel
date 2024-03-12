import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import Avatar_User from './Avatar_User';
import Bar_Feed from './Bar_Feed';

const LeftContent = props => <Avatar_User />

const Feed_Box = () => (
  <Card style={{ width: 340, marginTop: 20, marginLeft: 11, backgroundColor: '#FEFDF0' }}>

    <Card.Title title="Fulano de Tal" titleStyle={{ fontSize: 24 }} left={LeftContent} />

    <Card.Content
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 10
      }}>
      <Card.Cover
        source={{ uri: 'https://picsum.photos/700' }}
        style={{ width: 100, height: 100 }}
      />
      <Text variant="bodyLarge" style={{ width: 200 }}>
        Blá, blá, blá, blá, blá, blá, blá, blá, blá, blá, blá, blá, blá, blá, blá...
      </Text>
    </Card.Content>

    <Bar_Feed />

  </Card>
);

export default Feed_Box;