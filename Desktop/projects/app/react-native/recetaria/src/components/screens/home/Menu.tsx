import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
// imports iconst
import {Colors} from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';

const Menu = () => {
  const navigation = useNavigation<any>();
  const state = useDrawerStatus();
  const isClosed = state === 'closed';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.drawerIcon}>
        <Ionicons
          name={isClosed ? 'menu-outline' : 'close-outline'}
          size={30}
          color={Colors.secondary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.drawerIcon}>
        <Ionicons name="menu-outline" size={30} color={Colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },

  drawerIcon: {},
});
