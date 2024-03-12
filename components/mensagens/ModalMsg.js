import * as React from 'react';
import { Modal, Portal, Text, IconButton, PaperProvider } from 'react-native-paper';

const ModalMsg = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{height: 400}}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      
      <IconButton
        icon="email"
        color="#2f2f2f"
        size={30}
        onPress={showModal}
      />
    </PaperProvider>
  );
};

export default ModalMsg;