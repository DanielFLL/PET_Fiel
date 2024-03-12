import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeadBar from '../components/HeadBar';
import Feed_Box from '../components/Feed_Box';


export default function Home() {

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <HeadBar />
                <ScrollView style={{ height: '65%' }}>
                    <Feed_Box />
                    <Feed_Box />
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
