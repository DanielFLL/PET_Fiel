import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper';

import Home from '../../pages/Home'
import Favoritos from '../../pages/Favoritos'
import Groups from '../../pages/Groups'
import Settings from '../../pages/Settings'
import Profile from '../../pages/Profile'

// Componentes de Telas
const HomeScreen = () => <Home />;
const FavoritosScreen = () => <Favoritos />;
const GroupsScreen = () => <Groups />;
const SettingsScreen = () => <Settings />;
const ProfileScreen = () => <Profile />;

// Navegador de Abas (Bottom Tab Navigator) do React Navigation
const TabNavigator = createBottomTabNavigator();

// Componente principal
const Nav_Bottom = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'favoritos', title: 'Favoritos', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'groups', title: 'Groups', focusedIcon: 'account-group' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    favoritos: FavoritosScreen,
    groups: GroupsScreen,
    settings: SettingsScreen,
    profile: ProfileScreen,
  });

  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBar={(props) => (
          <BottomNavigation
            {...props}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        )}
      >
        <TabNavigator.Screen name="home" component={HomeScreen} />
        <TabNavigator.Screen name="favoritos" component={FavoritosScreen} />
        <TabNavigator.Screen name="groups" component={GroupsScreen} />
        <TabNavigator.Screen name="settings" component={SettingsScreen} />
        <TabNavigator.Screen name="profile" component={ProfileScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Nav_Bottom;