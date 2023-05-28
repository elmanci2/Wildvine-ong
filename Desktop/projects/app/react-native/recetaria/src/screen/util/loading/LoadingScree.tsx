import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {CustomStyles} from '../../../styles/Styles';
import {Colors} from '../../../constants/Colors';
import {MotiView, MotiAnimationProp} from 'moti';

const motiAnimation: MotiAnimationProp<any> = {
  from: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    type: 'timing',
    duration: 500,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
};

const LoadingScree = () => {
  return (
    <View style={[CustomStyles.container, CustomStyles.center]}>
      <MotiView {...motiAnimation} style={CustomStyles.center}>
        <Lottie
          source={require('../../../assets/lottie/foodLoader.json')}
          autoPlay
          loop
          style={styles.Lottie}
        />
        <Text style={styles.text}>cargando ...</Text>
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  Lottie: {
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text.secondary,
  },
});

export default LoadingScree;
