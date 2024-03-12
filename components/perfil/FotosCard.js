import * as React from 'react';
import { Button, Card } from 'react-native-paper';



const FotosCard = ({onPress, onSubmit}) => (
  <Card>
    <Card.Title title="+ Fotos"/>
    <Card.Content>
        {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} /> */}
        {/* Implementar a busca de foto no dispositivo */}
    </Card.Content>

    <Card.Actions>
      <Button onPress={() => onSubmit()}>Enviar</Button>
      <Button onPress={() => onPress()}>Cancel</Button>
    </Card.Actions>
  </Card>
);

export default FotosCard;