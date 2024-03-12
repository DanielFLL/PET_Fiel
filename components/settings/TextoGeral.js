import * as React from 'react';
import { Text } from 'react-native-paper';

const TextoGeral = ({variant, texto, weight, color}) => (
  <>
    <Text style={{fontWeight: weight, color: color}} variant={variant}>{texto}</Text>
 </>
);

export default TextoGeral;