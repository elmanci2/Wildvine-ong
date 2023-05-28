import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/Colors';

export const GooBack = () => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  const GoBack = () => navigation.goBack();
  const iconsColor = Colors.icon;
  const inconSize = 30;

  return (
    <TouchableOpacity style={styles.container} onPress={GoBack}>
      <Entypo name="chevron-left" size={inconSize} color={iconsColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.iconContainer,
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 6,
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
