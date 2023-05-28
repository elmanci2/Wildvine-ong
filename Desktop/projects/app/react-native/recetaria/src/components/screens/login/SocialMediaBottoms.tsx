import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomStyles} from '../../../styles/Styles';
import {Colors} from '../../../constants/Colors';

const btnElemets = [
  {
    img: require('../../../assets/image/social/google.png'),
    text: 'Google',
  },
  {
    img: require('../../../assets/image/social/facebook.png'),
    text: 'Facebook',
  },
];

export default function SocialMediaBottoms() {
  return (
    <View style={styles.loginWith}>
      {btnElemets.map(item => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnSocialMidia}
            key={item.text}>
            <View style={styles.imgConted}>
              <Image source={item.img} style={CustomStyles.img} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  loginWith: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    gap: 50,
  },

  btnSocialMidia: {
    width: '18%',
    height: 50,
    borderColor: Colors.secondary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padiing: 10,
  },

  imgConted: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
