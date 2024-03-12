import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeadBar from '../components/HeadBar';
import Text_Nome_Big from '../components/mensagens/Text_Nome_Big';
import Text_data from '../components/mensagens/Text_data';
import Text_mns2 from '../components/mensagens/Text_mns2';
import Avatar_User from '../components/Avatar_User';
import Icon_See from '../components/mensagens/Icon_See';
import Img_mns from '../components/mensagens/Img_mns';
import Icon_Unsee from '../components/mensagens/Icon_Unsee';


export default function Mensage_exp() {

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <HeadBar />
                <ScrollView style={{ height: '65%', padding: 20 }} contentContainerStyle={{ alignItems: 'center' }}>
                  <Text_Nome_Big />
                  <Text_data />
                  <Text_mns2 />
                  <View style={{ marginLeft: -20, marginBottom: 40, flexDirection: 'row', gap: 230 }}>
                    <Avatar_User />
                    <Icon_See />
                  </View>
                  <Text_data />
                  <Img_mns />
                  <View style={{ marginLeft: -20, marginBottom: 40, flexDirection: 'row', gap: 230 }}>
                    <Icon_Unsee />
                    <Avatar_User />
                  </View>
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