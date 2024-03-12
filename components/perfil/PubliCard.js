import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import TextInputGeral from '../TextInputGeral';


const PubliCard = ({onPress, onSubmit}) => (
  <Card>
    <Card.Title title="Publicações"/>
    <Card.Content>
      <TextInputGeral label="O que está pensando?" />
    </Card.Content>

    <Card.Actions>
      <Button onPress={() => onSubmit()}>Ok</Button>
      <Button onPress={() => onPress()}>Cancel</Button>
    </Card.Actions>
  </Card>
);

export default PubliCard;