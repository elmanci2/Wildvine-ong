import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  onPress: () => void;

  //  otionals props
  contedContainerStyle?: ViewStyle;
  contedTextStyle?: TextStyle;
  disabled?: boolean;
  onDisabled?: () => void;
};

export default function Btn({
  text,
  onPress,
  onDisabled,
  contedContainerStyle,
  contedTextStyle,
  disabled = false,
}: Props) {
  const disabledStyle = {opacity: disabled ? 0.5 : 1};
  return (
    <TouchableOpacity
      style={[styles.btn, contedContainerStyle, disabledStyle]}
      onPress={() => (disabled ? onDisabled && onDisabled() : onPress())}>
      <Text style={[styles.btnText, contedTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },

  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
