import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

type Prosp = {
  text: string;
  TextStyle?: TextStyle;
  isSeeMore?: boolean;
  onSeeMore?: () => void;
  seeMoreStyle?: TextStyle;
  contednerStyle?: ViewStyle;
};

const Subtext = ({text, TextStyle, isSeeMore, onSeeMore ,seeMoreStyle  , contednerStyle }: Prosp) => {
  return (
    <View style={[styles.container , contednerStyle ]}>
      <Text style={[styles.textStyles, TextStyle]}>{text}</Text>
      {isSeeMore && (
        <TouchableOpacity onPress={onSeeMore}>
          <Text style={[styles.semoreText , seeMoreStyle ]}>See more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Subtext;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },

  textStyles: {
    fontSize: 12,
    color: Colors.text.secondary,
    fontWeight: 'bold',
    marginVertical: 5,
  },

    semoreText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginVertical: 5,
    },
});
