import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeadBar from '../components/HeadBar';
import Profile_head from '../components/perfil/Profile_head';
import StatusAccordion from '../components/perfil/StatusAccordion';
import PubliModal from '../components/perfil/PubliModal';
import PubliAcord from '../components/perfil/PubliAcord';
import FotosAcord from '../components/perfil/FotosAcord';
import ImgPick from '../components/perfil/ImgPick';


export default function Profile() {

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <HeadBar />
                <ScrollView style={{ height: '65%' }}>
                  <Profile_head />
                  <StatusAccordion />
                  <PubliModal />
                  <ImgPick />
                  <PubliAcord />
                  <FotosAcord />
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