import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Groups from './pages/Groups'
// import Settings from './pages/Settings'
import Profile from './pages/Profile'


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home />
    </View>
  );
}

function FavoritosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Favoritos />
    </View>
  );
}

function GroupsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Groups />
    </View>
  );
}

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Settings />
//     </View>
//   );
// }

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <Provider>
        <NavigationContainer>

          <Tab.Navigator
            initialRouteName='Home'
            backBehavior='order'
            labeled={false}
            activeColor='#64059F'
            barStyle={{ backgroundColor: '#e9e9e9', height: 65 }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Fav"
              component={FavoritosScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Groups"
              component={GroupsScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account-group" color={color} size={26} />
                ),
              }}
            />
            {/* <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
              }}
            /> */}
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>

        </NavigationContainer>
    </Provider>
  );
}
