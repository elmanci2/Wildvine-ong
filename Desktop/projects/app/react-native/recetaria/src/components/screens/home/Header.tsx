import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SearchImput from '../../custom/SearchImput';
import {Colors} from '../../../constants/Colors';

const Header = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.headerText}>
        Explora nuevas recetas ¿Qué te apetece cocinar hoy?
      </Text>
      <SearchImput autoFocus={false} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 20,
  },

  headerText: {
    fontSize: 23,
    color: Colors.text.primary,
    fontFamily: 'Poppins-Bold',
  },
});
