import * as React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider, Appbar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Publicacoes from '../../pages/Publicacoes'
import Fotos from '../../pages/Fotos'

function PublicacoesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Publicacoes />
      </View>
    );
}

function FotosScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Fotos />
      </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

const NavPerfil = () => (
  
  <Provider>
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName='Publicacoes'
        backBehavior='order'
        labeled={true}
        activeColor='#64059F'
        barStyle={{ backgroundColor: '#e9e9e9', height: 65 }}
      >

        <Tab.Screen
          name="Publicacoes"
          component={PublicacoesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="reviews" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Fotos"
          component={FotosScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="image" color={color} size={26} />
            ),
          }}
        />
        
      </Tab.Navigator>

    </NavigationContainer>

    {/* <Appbar.Header>
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header> */}
  </Provider>  
  
);

export default NavPerfil;