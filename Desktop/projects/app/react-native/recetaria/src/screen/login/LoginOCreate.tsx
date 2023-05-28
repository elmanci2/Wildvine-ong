import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

type Props = {
  onPress: () => void;
  Subtitle: string;
};

export default function LoginOCreate({onPress, Subtitle}: Props) {
  return (
    <View style={styles.orLogin}>
      <Text style={styles.orLoginText}>¿Ya tienes una cuenta?</Text>
      <Pressable onPress={onPress}>
        <Text style={[styles.orLoginText, {color: Colors.secondary}]}>
          {Subtitle}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  orLogin: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
    color: Colors.text.secondary,
  },
  orLoginText: {
    color: '#8d8d8d',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
