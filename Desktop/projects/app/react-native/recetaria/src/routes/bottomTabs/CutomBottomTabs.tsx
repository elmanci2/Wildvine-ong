import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
//import  iconst svg
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

//import animations
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

//  get dimensions window
const {width} = Dimensions.get('window');

const incotSize: number = 20;

export const CutomBottomTabs = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  //  animation for icon background
  const IconBackgoundAnimated = useSharedValue(0);

  const IconBackgoundAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(IconBackgoundAnimated.value)}],
    };
  });

  ///  hidden tab bar animation
  const hiddenTabBarAnimated = useSharedValue(1);

  const hiddenTabBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withTiming(hiddenTabBarAnimated.value)}],
    };
  });

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          {flexDirection: 'row', alignItems: 'center'},
          hiddenTabBarAnimatedStyle,
        ]}>
        <Animated.View
          style={[styles.IconBackgoundAnimated, IconBackgoundAnimatedStyle]}
        />

        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name ?? '';

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate<any>({name: route.name, merge: true});
            }

            if (route.name === 'Settings') {
              IconBackgoundAnimated.value =
                width * (index / state.routes.length) - 9;
            } else {
              IconBackgoundAnimated.value =
                width * (index / state.routes.length);
            }
          };

          let icon = null;

          const iconColor = isFocused ? 'white' : '#C1C1C1';

          switch (route.name) {
            case 'Home':
              icon = (
                <AntDesign name="home" size={incotSize} color={iconColor} />
              );
              break;

            case 'Star':
              icon = <Feather name="star" size={incotSize} color={iconColor} />;
              break;
            case 'Settings':
              icon = (
                <Feather name="settings" size={incotSize} color={iconColor} />
              );
              break;
            case 'Storge':
              icon = (
                <Feather
                  name="shopping-bag"
                  size={incotSize}
                  color={iconColor}
                />
              );
              break;
            default:
              break;
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.icontContainer}>
              <View style={styles.iconItemConted}>
                {icon}
                {isFocused && (
                  <Text style={[styles.labelTab, {color: iconColor}]}>
                    {label as any}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};
