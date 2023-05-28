import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/Colors';

const HeaderArrow = () => {
  const state = useDrawerStatus();
  const isOpen = state === 'open';

  const navigate = useNavigation<any>();

  const toggleDrawer = () => {
    navigate.openDrawer();
    return;
  };

  const goBack = () => {
    if (!isOpen) {
      navigate.goBack();
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons
          name={isOpen ? 'close' : 'arrow-back'}
          size={28}
          color={isOpen ? Colors.secondary : Colors.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleDrawer}>
        <Ionicons name="menu-outline" size={28} color={Colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderArrow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
});
