import * as React from 'react';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import FotosCard from './FotosCard';
import { View } from 'react-native';

const FotosModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  
  const submit = () => {
    hideModal
    
    new FormData()
    formData.append('photo', photoFile)

    fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .catch(error => {console.error(error)})
  
  }

  const containerStyle = {backgroundColor: 'white', padding: 20, height: 400, marginTop: -500};

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
            
            <FotosCard onSubmit={submit} onPress={hideModal} />
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
        + Fotos
      </Button>

    </PaperProvider>
  );
};

export default FotosModal;