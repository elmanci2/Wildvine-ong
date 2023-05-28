import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {CustomStyles} from '../../../styles/Styles';
import {Colors} from '../../../constants/Colors';
import {GooBack} from '../../../components/custom/GooBack';

type props = {
  term: string;
};

export const NotFaoudSearchScreen = ({term}: props) => {
  return (
    <View style={[CustomStyles.container, styles.bady]}>
      <GooBack />
      <Lottie
        source={require('../../../assets/lottie/search-not-faoud.json')}
        style={styles.lottie}
        loop
        autoPlay
      />
      <Text style={CustomStyles.title}>No encontrado</Text>
      <Text style={CustomStyles.subtitle}>
        No hemos encordó ningún elemento que se llame:
        <Text style={{color: Colors.secondary}}> {term}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: -50,
  },
  bady: {
    justifyContent: 'center',
    alingItems: 'center',
  },
  term: {
    color: Colors.secondary,
    fontWeight: '500',
  },
});
