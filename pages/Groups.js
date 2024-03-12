import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeadBar from '../components/HeadBar';
import Group_box from '../components/grupos/Group_Box';


export default function Groups() {

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <HeadBar />
                <ScrollView style={{ height: '65%' }}>
                  <Group_box />
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