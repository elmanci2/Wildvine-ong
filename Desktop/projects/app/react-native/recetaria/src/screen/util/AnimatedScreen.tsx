import {Animated} from 'react-native';
import React, {memo} from 'react';
import {CustomStyles} from '../../styles/Styles';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useAnimatedDrawer} from '../../hook/useAnimatedDrawer';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const AnimatedScreen = memo(({children}: Props) => {
  const state = useDrawerStatus();
  const animatedStyle = useAnimatedDrawer(state);

  return (
    <Animated.View style={[CustomStyles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
});

export default AnimatedScreen;
