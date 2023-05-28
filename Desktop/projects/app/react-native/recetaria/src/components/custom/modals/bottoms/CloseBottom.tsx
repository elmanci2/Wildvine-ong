import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../../constants/Colors';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

export const CloseBottom = ({onPress, style}: Props) => {
  return (
    <TouchableOpacity style={[styles.closeBotoom, style]} onPress={onPress}>
      <Ionicons name="close" size={30} color={Colors.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeBotoom: {
    backgroundColor: Colors.iconContainer,
    height: 40,
    width: 40,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});
