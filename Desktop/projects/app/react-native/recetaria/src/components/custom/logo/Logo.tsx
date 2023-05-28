import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';

const Logo = () => {
  return (
    <View>
      <Text style={styles.textLogo}>recetaria</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  textLogo: {
    fontSize: 27,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: Colors.secondary,
    fontFamily: 'CursiveSerif-Bold',
  },
});
