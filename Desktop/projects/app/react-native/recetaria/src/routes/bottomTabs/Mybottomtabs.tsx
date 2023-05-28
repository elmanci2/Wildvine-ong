import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CutomBottomTabs} from './CutomBottomTabs';
import React from 'react';
import StorScreen from '../../screen/StorScreen';
import FavoriteScreen from '../../screen/FavoriteScreen';
import SetingScreen from '../../screen/SetingScreen';

///  create bottom tab navigator
const bottomTabs = createBottomTabNavigator();

/// bottom tab navigato comfiguration
const bottomTabsConfig = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    backgroundColor: 'transparent',
  },
};

const CustomTabBar = (props: BottomTabBarProps) => {
  return <CutomBottomTabs {...props} />;
};

export const MyBottomTabs = () => {
  return (
    <bottomTabs.Navigator
      tabBar={CustomTabBar}
      screenOptions={{
        ...bottomTabsConfig,
      }}>
      <bottomTabs.Screen name="Storge" component={StorScreen} />
      <bottomTabs.Screen name="Star" component={FavoriteScreen} />
      <bottomTabs.Screen name="Settings" component={SetingScreen} />
    </bottomTabs.Navigator>
  );
};
