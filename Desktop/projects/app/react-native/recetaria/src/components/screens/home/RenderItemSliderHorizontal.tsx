import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Animated,
} from 'react-native';
import React, {memo} from 'react';
import {RecipeType} from '../../../types/Types';
import {Colors} from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DEFAULT_IMAGE} from '../../../constants/util';
import FastImage from 'react-native-fast-image';

type Props = {
  item: RecipeType;
  index: number;
  isHorizontal?: boolean;
  contedContainerStyle?: ViewStyle;
  imageContainerStyles?: ViewStyle;
  imageStyles?: {};
};

export const RenderItemSliderHorizontal = memo(
  ({
    item,
    isHorizontal = true,
    contedContainerStyle,
    imageContainerStyles,
    imageStyles = {},
  }: Props) => {
    const verticalStyle = StyleSheet.create({
      cardContainer: {
        flexDirection: 'row',
        gap: 10,
      },
    });

    const time =
      item?.metaheader?.find(i => i?.element?.includes('min'))?.element ??
      (item?.time !== '' ? item.time : '20 min');

    const navigation = useNavigation<any>();
    const haddleNaviagtion = () => {
      navigation.navigate('previw', {id: item.id});
    };

    return (
      <Animated.View>
        <TouchableOpacity
          onPress={haddleNaviagtion}
          style={[
            styles.cardContainer,
            !isHorizontal && verticalStyle.cardContainer,
            contedContainerStyle,
          ]}>
          <View style={[styles.imageContainer, imageContainerStyles]}>
            <FastImage
              source={{
                uri: item?.image ?? DEFAULT_IMAGE,
                priority: FastImage.priority.normal,
              }}
              style={[styles.image, imageStyles]}
            />
          </View>

          <View style={styles.metaInfoContainer}>
            <Text numberOfLines={2} style={styles.title}>
              {item?.title}
            </Text>

            <View style={styles.metaInfoExtra}>
              <View style={styles.TimeContainer}>
                <Ionicons
                  name="clockcircleo"
                  size={15}
                  color={Colors.text.secondary}
                />
                <Text numberOfLines={1} style={styles.time}>
                  {time}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: 'rgba(7, 7, 7, 0.100)',
    shadowOpacity: 0.1,
    shadowRadius: 100,
    width: 170,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 15,
  },

  imageContainer: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  metaInfoContainer: {
    justifyContent: 'center',
  },

  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginVertical: 5,
  },

  preview: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginVertical: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 2,
    shadowColor: 'rgba(7, 7, 7, 0.100)',
    shadowOpacity: 0.1,
    shadowRadius: 100,
    elevation: 15,
  },

  metaInfoExtra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  time: {
    fontSize: 12,
  },
  TimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
