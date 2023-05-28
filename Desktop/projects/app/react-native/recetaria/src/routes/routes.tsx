import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screen/SearchScreen';

import UserScreen from '../screen/user/UserScreen';
import PreviwScreen from '../screen/PreviwScreen';
import CategoriScreen from '../screen/CategoriScreen';
import Welcome from '../screen/login/Welcome';
import LoginScreen from '../screen/login/LoginScreen';
import RegisterScreen from '../screen/login/RegisterScreen';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {CustomDrawerComponent} from './Drawer/CustomDrawerComponent';
import {Colors} from '../constants/Colors';
import SetingScreen from '../screen/SetingScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import AboutScree from '../screen/About/AboutScree';

import HomeScreen from '../screen/HomeScreen';
import AnimatedScreen from '../screen/util/AnimatedScreen';
import NotificationsScreen from '../screen/NotificationsScreen';

//  create stack navigator

const stack = createStackNavigator();

const stackConfig = {
  headerShown: false,
  initialRouteName: 'Welcome',
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

const MyStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        ...stackConfig,
      }}>
      <drawer.Screen name="tabs" component={MyDrawer} />
      <stack.Screen name="search" component={SearchScreen} />
      <stack.Screen name="user" component={UserScreen} />
      <stack.Screen name="previw" component={PreviwScreen} />
      <stack.Screen name="categori" component={CategoriScreen} />

      {/* login screeans  */}
      <stack.Screen name="Welcome" component={Welcome} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="Register" component={RegisterScreen} />
    </stack.Navigator>
  );
};

/// create drawer navigator

const drawer = createDrawerNavigator();

const drawerConfig = {
  headerShown: false,
  initialRouteName: 'Home',
  drawerStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    paddinRight: 20,
    width: '50%',
  },

  sceneContainerStyle: {
    backgroundColor: Colors.white,
  },
  overlayColor: 'transparent',
};

const DrawerCutomiseImport = (props: DrawerContentComponentProps) => {
  return <CustomDrawerComponent {...props} />;
};

const MyDrawer = () => {
  return (
    <drawer.Navigator
      screenOptions={{drawerType: 'slide', ...drawerConfig}}
      drawerContent={DrawerCutomiseImport}>
      <drawer.Screen name="Home" component={HomeScreen} />

      <drawer.Screen name="animated">{() => <AnimatedScreen />}</drawer.Screen>
      <drawer.Screen name="settings" component={SetingScreen} />
      <drawer.Screen name="search" component={SearchScreen} />
      <drawer.Screen name="userScreen" component={UserScreen} />
      <drawer.Screen name="favorites" component={FavoriteScreen} />
      <drawer.Screen name="notification" component={NotificationsScreen} />
      <drawer.Screen name="about" component={AboutScree} />
    </drawer.Navigator>
  );
};
export const MyStacksContainers = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
