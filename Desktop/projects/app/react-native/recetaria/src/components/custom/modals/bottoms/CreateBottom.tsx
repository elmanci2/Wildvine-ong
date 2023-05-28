import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constants/Colors';

interface Props {
  onPress: () => void;
  isActived: boolean;
}

const CreateBottom = ({onPress, isActived}: Props) => {
  const isActiveStyles = isActived ? styles.active : styles.inactive;
  const textStyles = isActived ? styles.textActive : styles.textInactive;
  const activeFuction = isActived ? onPress : () => null;

  return (
    <TouchableOpacity
      style={[styles.bootm, isActiveStyles]}
      onPress={activeFuction}>
      <Text style={[styles.text, textStyles]}>Crear</Text>
    </TouchableOpacity>
  );
};

export default CreateBottom;

const styles = StyleSheet.create({
  bootm: {
    padding: 10,
    borderRadius: 10,
    paddhingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
  },
  text: {
    color: Colors.text.secondary,
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    textAlign: 'center',
  },
  active: {
    backgroundColor: Colors.secondary,
  },
  inactive: {
    backgroundColor: Colors.iconContainer,
  },
  textActive: {
    color: Colors.white,
  },
  textInactive: {
    color: Colors.text.secondary,
  },
});
