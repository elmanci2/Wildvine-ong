import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../constants/Colors';
import {FlatList} from 'react-native-gesture-handler';

interface props {
  data:
    | [
        {
          category: string;
          emoji: string;
        },
      ]
    | [];
  loading?: boolean;
  action: (item: string) => void;
  style?: ViewStyle;
}

const Categoris = ({data, action, style}: props) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, [data, animation]);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({item}: any) => {
    const scale = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    });

    const opacity = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <Animated.View
        style={[
          styles.itemContent,
          {
            transform: [{scale}],
            opacity,
          },
        ]}>
        <TouchableOpacity onPress={() => action(item?.category ?? item)}>
          {item?.emoji && (
            <Text style={styles.text}>{item?.emoji ?? item}</Text>
          )}
          <Text style={styles.text}>{item?.category ?? item}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        contentContainerStyle={[styles.container, style]}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Categoris;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 2,
    marginVertical: 15,
  },
  itemContent: {
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.iconContainer,
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: Colors.text.secondary,
  },
});
