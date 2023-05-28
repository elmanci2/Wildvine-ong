import {StyleSheet, TextInput, TextStyle, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  plaseholder: string;
  isPassword?: boolean;
  onChageText: (text: string) => void;
  onEndEditing?: () => void;
  value: string;
  onfocus?: () => void;
  imputStyle?: TextStyle;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  isTextArea?: boolean;
  numberOfLines?: number;
};

const CustomImputs = ({
  plaseholder,
  isPassword = false,
  value,
  keyboardType = 'default',
  isTextArea = false,
  numberOfLines = 1,
  onChageText,
  onEndEditing,
}: Props) => {
  /// focus on the imput efect

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const focusStyle = {
    borderColor: isFocus ? Colors.secondary : '#e0e0e0',
  };

  // show password
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.inputConted}>
      <TextInput
        keyboardType={keyboardType}
        placeholder={plaseholder}
        secureTextEntry={isPassword ? showPassword : false}
        value={value}
        onChangeText={(text: string) => onChageText(text)}
        onEndEditing={onEndEditing}
        style={[styles.imputStyle, focusStyle]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={isTextArea}
        numberOfLines={numberOfLines}
      />
      {isPassword && (
        <MaterialIcons
          onPress={() => setShowPassword(prev => !prev)}
          name={showPassword ? 'visibility' : 'visibility-off'}
          size={20}
          color={Colors.text.secondary}
          style={styles.iconStyle}
        />
      )}
    </View>
  );
};

export default CustomImputs;

const styles = StyleSheet.create({
  inputConted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imputStyle: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '90%',
  },
  iconStyle: {position: 'absolute', right: 30},
});
