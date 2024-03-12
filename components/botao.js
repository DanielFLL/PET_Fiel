import * as React from 'react';
import { Button } from 'react-native-paper';

const Botao = () => (
  <Button
    style={{ backgroundColor: '#00D1FF', borderRadius: 50 }}
    labelStyle={{ fontSize: 20, fontWeight: '700', letterSpacing: 2 }}
    contentStyle={{ paddingVertical: 3, paddingHorizontal: 20 }}
    mode="contained"
    onPress={() => console.log('Pressed')}>
    ENTRAR
  </Button>
);

export default Botao;