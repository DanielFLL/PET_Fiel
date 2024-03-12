import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';
import HeadBar from '../components/HeadBar';
import Fotos_Fav from '../components/favoritos/Fotos_Fav';
import Text_Fav from '../components/favoritos/Text_Fav';
import Groups_Fav from '../components/favoritos/Groups_Fav';


export default function Favoritos() {

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <HeadBar />
        <ScrollView style={{ height: '65%' }}>
          <Fotos_Fav />
          <Divider style={{height: 3, backgroundColor: '#64059F', marginTop: 10}} />
          <Text_Fav />
          <Divider style={{height: 3, backgroundColor: '#64059F', marginBottom: 10}} />
          <Groups_Fav />
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