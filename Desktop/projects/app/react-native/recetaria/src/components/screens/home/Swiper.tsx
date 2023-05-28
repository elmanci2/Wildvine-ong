import {View, Animated} from 'react-native';
import React from 'react';
import {MyDimensions} from '../../../constants/Dimensions';

const {width, height} = MyDimensions;

const ANCHO_CONTENEDOR = width * 0.8;
const Epacing = {
  spacing: 25,
  gap: 2,
};

const Swiper = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          marginTop: 10,
          gap: Epacing.gap,
        }}
        snapToInterval={ANCHO_CONTENEDOR - Epacing.spacing}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={[1, 2, 3]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          const position = Animated.subtract(index * ANCHO_CONTENEDOR, scrollX);
          const isDisappearing = -ANCHO_CONTENEDOR;
          const isAppearing = ANCHO_CONTENEDOR;

          const scaleValue = position.interpolate({
            inputRange: [isDisappearing, 0, isAppearing],
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          const opasityValue = position.interpolate({
            inputRange: [isDisappearing, 0, isAppearing],
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={{
                width: ANCHO_CONTENEDOR,
                height: height / 5,
                borderRadius: 10,
                backgroundColor: 'red',
                alignItems: 'center',
                opacity: opasityValue,
                transform: [{scale: scaleValue}],
              }}></Animated.View>
          );
        }}
      />
    </View>
  );
};

export default Swiper;
