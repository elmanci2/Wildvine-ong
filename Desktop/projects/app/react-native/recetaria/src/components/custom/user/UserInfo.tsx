import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RAMDOM_USER} from '../../../constants/util';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GETUSER_QUERY} from '../../../gql/Query';
import {Colors} from '../../../constants/Colors';

export const UserInfo = () => {
  // get user info
  const {data} = useQuery(GETUSER_QUERY);

  const navigation = useNavigation<any>();

  const handleNavigation = () => {
    navigation.navigate('userScreen');
    return;
  };

  return (
    <View style={styles.user}>
      <TouchableOpacity onPress={handleNavigation} style={styles.userImage}>
        <Image
          style={styles.userImg}
          source={{
            uri: RAMDOM_USER,
          }}
        />
      </TouchableOpacity>
      <View style={styles.userTextContainer}>
        <Text style={[styles.userText, {color: Colors.secondary}]}>👋 Hi,</Text>
        <Text numberOfLines={1} style={styles.userText}>
          {data?.getUser?.name ?? ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },

  userImg: {
    width: '100%',
    height: '100%',
  },

  userTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  userText: {
    fontFamily: 'Poppins-Bold',
    lineHeight: 20,
    textTransform: 'capitalize',
    width: 110,
  },
});
