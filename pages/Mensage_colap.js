import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeadBar from '../components/HeadBar';
import Mensages_Colap from '../components/mensagens/Mensages_Colap';


export default function Mensage_colap() {

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <HeadBar />
                <ScrollView style={{ height: '65%' }}>
                  <Mensages_Colap />
                  <Mensages_Colap />
                  <Mensages_Colap />
                  <Mensages_Colap />
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