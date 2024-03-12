import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeadBar from '../components/HeadBar';
import ModoEscuro from '../components/settings/ModoEscuro';
import TamanhoFonte from '../components/settings/TamanhoFonte';
import Notificacoes from '../components/settings/Notificacoes';
import Privacidade from '../components/settings/Privacidade';


export default function Settings() {

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <HeadBar />
                <ScrollView contentContainerStyle={{alignItems: 'center', gap: 50}} style={{ height: '65%' }}>
                    <ModoEscuro />
                    <TamanhoFonte />
                    <Notificacoes />
                    <Privacidade />
                </ScrollView>
            </SafeAreaProvider>
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
