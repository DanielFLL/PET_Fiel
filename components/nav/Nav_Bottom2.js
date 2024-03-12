import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
  
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Groups from './pages/Groups'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
  
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-home"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Fav: {
      screen: Favoritos,
      navigationOptions: {
        tabBarLabel: "Curtidas",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-heart-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarLabel: "Grupos",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-people-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Setting",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-settings-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Perfil",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#006600" },
  }
);
  
const Navigator = createAppContainer(TabNavigator);
  
export default function App() {
  return (
    <Navigator />
  );
}