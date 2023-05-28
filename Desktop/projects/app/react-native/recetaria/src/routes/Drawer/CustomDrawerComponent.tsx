import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {UserInfo} from '../../components/custom/user/UserInfo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import NotificationIcon from '../../components/custom/notification/NotificationIcon';

const DrawerItemsList = [
  {
    label: 'Home',
    icon: 'home-outline',
    action: 'Home',
  },
  {
    label: 'Search',
    icon: 'search-outline',
    action: 'search',
  },
  {
    label: 'Profile',
    icon: 'person-outline',
    action: 'userScreen',
  },
  {
    label: 'Favorites',
    icon: 'heart-outline',
    action: 'favorites',
  },
  {
    label: 'Settings',
    icon: 'settings-outline',
    action: 'settings',
  },
  {
    label: 'About',
    icon: 'information-circle-outline',
    action: 'about',
  },
];

type iconProps = {
  color: string;
  size: number;
  item?: (typeof DrawerItemsList)[0];
};

const IconstItemDrawer = ({color, size, item}: iconProps) => {
  return (
    <Ionicons
      name={item?.icon ?? 'log-out-outline'}
      size={size}
      color={color}
    />
  );
};

const CustomDrawerItem = (props: DrawerContentComponentProps) => {
  // active item
  const activeItem = props.state.routes[props.state.index].name;

  return (
    <View style={styles.itemListContainer}>
      {DrawerItemsList.map((item, index) => (
        <DrawerItem
          activeTintColor={Colors.secondary}
          activeBackgroundColor={Colors.white}
          inactiveBackgroundColor={Colors.white}
          focused={activeItem === item.action}
          key={index}
          label={item.label}
          icon={({color, size}) => IconstItemDrawer({color, size, item})}
          onPress={() => props.navigation.navigate(item.action)}
        />
      ))}

      <DrawerItem
        label="Logout"
        icon={({color, size}) => IconstItemDrawer({color, size})}
        onPress={() => console.log('logout')}
      />
    </View>
  );
};

export const CustomDrawerComponent = (props: DrawerContentComponentProps) => {
  const stateDrawer = useDrawerStatus();
  const isOpen = stateDrawer === 'open';
  const stylesOpe = {width: isOpen ? '200%' : '100%'};
  return (
    <View style={styles.container}>
      <View style={[styles.header, stylesOpe]}>
        <UserInfo />
        {/* notification badget */}
        {isOpen && <NotificationIcon />}
      </View>

      <DrawerContentScrollView
        {...props}
        style={styles.DrawerItemContad}
        showsVerticalScrollIndicator={false}>
        <CustomDrawerItem {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingLeft: 10,
    paddingVertical: 10,
  },

  header: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // drawer styles
  DrawerItemContad: {
    flex: 1,
    height: '100%',
    paddingTop: 50,
  },

  itemListContainer: {
    gap: 15,
  },
});
