import * as React from 'react';
import { Modal, Portal, Avatar, Button, PaperProvider } from 'react-native-paper';
import PubliCard from './PubliCard';
import { View } from 'react-native';

const PubliModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const submit = () => {
    hideModal
    fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    })
        .then(response => response.json())
        .catch(error => {console.error(error)})
  }
  const containerStyle = {backgroundColor: 'white', padding: 20, height: 300, marginTop: -500};

  return (
    <PaperProvider>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View>
            <Button 
                mode='outlined'
                icon="close"
                style={{width: 40, borderRadius: 50}}
                labelStyle={{fontSize: 24, marginLeft: 8}}
                textColor={'red'}
                onPress={hideModal} 
            /> 
            <PubliCard onSubmit={submit} onPress={hideModal} />
          </View>
        </Modal>
      </Portal>

      <Button 
        mode='contained' 
        style={{marginHorizontal: 28, marginTop: 30, width: 300}} 
        labelStyle={{fontWeight: '800', fontSize: 18}} 
        buttonColor={'#7A00DA'}
        textColor={'#fff'} 
        onPress={showModal}
      >
        + Criar Feed
      </Button>

    </PaperProvider>
  );
};

export default PubliModal;