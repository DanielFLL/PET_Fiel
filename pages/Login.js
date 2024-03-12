import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AvatarImg from './components/avatar_img';
import Email_LogIn from './components/email_login';
import Senha_LogIn from './components/senha_login';
import Botao from './components/botao';
import Linha from './components/linha';
import EntrarGoogle from './components/ChipGoogle';
import EntrarFacebook from './components/ChipFacebook';


export default function App() {

    return (
        <View style={styles.container}>
            <AvatarImg />
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#7A00DA' }}>A Rede Social do Seu PET</Text>
            <Email_LogIn />
            <Senha_LogIn />
            <Botao />
            <Linha />
            <EntrarGoogle />
            <EntrarFacebook />
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#5E6265', textDecorationLine: 'underline' }}>Ainda não registrado?</Text>
            <StatusBar style="auto" />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFDF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});