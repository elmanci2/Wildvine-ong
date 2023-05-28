import {StyleSheet, Animated} from 'react-native';
import React from 'react';
import {MyBottomTabs} from '../bottomTabs/Mybottomtabs';

export const CutomDrawer = ({animatedStyle}) => {
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#0000004f',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    elevation: 40,
  },
});
