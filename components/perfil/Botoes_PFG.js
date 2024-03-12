import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const BotaoPublicacao = () => { 
    const [modoBotao, setModoBotao] = React.useState('outlined');

    const alternarModoBotao = () => {
        setModoBotao((modoAtual) => (modoAtual === 'outlined' ? 'contained-tonal' : 'outlined'));
      };

    
    return (
        <Button 
            labelStyle={{fontWeight: '800'}} 
            textColor='#2f2f2f' 
            mode={modoBotao} 
            onPress={alternarModoBotao}
        >
            Publicações
        </Button>
    );
}

const BotaoFotos = () => { 
    const [modoBotao, setModoBotao] = React.useState('outlined');

    const alternarModoBotao = () => {
        setModoBotao((modoAtual) => (modoAtual === 'outlined' ? 'contained-tonal' : 'outlined'));
      };

    
    return (
        <Button 
            labelStyle={{fontWeight: '800'}} 
            textColor='#2f2f2f' 
            mode={modoBotao} 
            onPress={alternarModoBotao}
        >
            Fotos
        </Button>
    );
}

const BotaoGrupos = () => { 
    const [modoBotao, setModoBotao] = React.useState('outlined');

    const alternarModoBotao = () => {
        setModoBotao((modoAtual) => (modoAtual === 'outlined' ? 'contained-tonal' : 'outlined'));
      };

    
    return (
        <Button 
            labelStyle={{fontWeight: '800'}} 
            textColor='#2f2f2f' 
            mode={modoBotao} 
            onPress={alternarModoBotao}
        >
            Grupos
        </Button>
    );
}


const Botoes_PFG = () => (
    <View style={styles.container}>
        <BotaoPublicacao />
        <BotaoFotos />
        <BotaoGrupos />
    </View>
);

export default Botoes_PFG;

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