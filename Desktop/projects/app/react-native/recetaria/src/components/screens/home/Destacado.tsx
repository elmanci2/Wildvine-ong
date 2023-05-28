import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecipeType} from '../../../types/Types';
import Subtext from '../../custom/Subtext';
import {Colors} from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {DEFAULT_IMAGE} from '../../../constants/util';

type Props = {
  data: RecipeType;
  SubtextText: string;
};

export const DestacadoRecipe = ({data, SubtextText}: Props) => {
  return (
    <View style={styles.conted}>
      <Subtext
        text={SubtextText}
        isSeeMore
        TextStyle={styles.SubtextText}
        seeMoreStyle={styles.seeMoreStyle}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data?.image ?? DEFAULT_IMAGE}}
            style={styles.image}
          />
        </View>

        <View style={styles?.metaInfoContainer}>
          <Text numberOfLines={2} style={styles?.title}>
            {data?.title}
          </Text>

          <Text numberOfLines={2.5} style={styles?.previw}>
            {data?.preview}
          </Text>

          <View style={styles.metaInfoExtra}>
            <View style={styles.TimeContainer}>
              <Ionicons
                name="clockcircleo"
                size={15}
                color={Colors.text.secondary}
              />
              <Text numberOfLines={1} style={styles.time}>
                {data?.time}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conted: {
    width: '100%',
    borderRadius: 10,
  },
  SubtextText: {
    fontSize: 16,
  },
  seeMoreStyle: {
    fontSize: 14,
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageContainer: {
    width: '45%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  metaInfoContainer: {
    width: '55%',
    padding: 5,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginVertical: 5,
  },

  previw: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.icon,
    marginVertical: 5,
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
