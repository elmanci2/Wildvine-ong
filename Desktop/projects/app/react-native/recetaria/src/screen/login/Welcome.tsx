import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import {CustomStyles} from '../../styles/Styles';
import Logo from '../../components/custom/logo/Logo';
import SocialMediaBottoms from '../../components/screens/login/SocialMediaBottoms';
import Btn from '../../components/custom/Btn';
import {Colors} from '../../constants/Colors';

type Props = {
  navigation: any;
};

const Welcome = ({navigation}: Props) => {
  // a function to handle the btns
  const handleBtn = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={[CustomStyles.container, styles.bady]}>
      <Logo />
      <View style={styles.imgContainer}>
        <View style={styles.imgConted}>
          <Image
            source={require('../../components/screens/login/assets/image/wok.png')}
            style={[CustomStyles.img, styles.img]}
          />
        </View>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.SubTitle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        inventore aut nesciunt at molestiae cumque, odit veritatis non adipisci
        quasi.
      </Text>

      <Btn
        contedContainerStyle={styles.btn}
        contedTextStyle={styles.btnText}
        text="login"
        onPress={() => handleBtn('Login')}
      />
      <Btn
        contedContainerStyle={{backgroundColor: Colors.secondary}}
        contedTextStyle={{color: Colors.white}}
        text="get start"
        onPress={() => handleBtn('Register')}
      />

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>
      {/*social media bottoms  */}
      <SocialMediaBottoms />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  bady: {
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  imgContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgConted: {
    width: 200,
    height: 300,
    borderRadius: 100,
  },
  img: {
    resizeMode: 'contain',
  },

  SubTitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins-Boold',
    marginBottom: 50,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: '#000',
  },
  or: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
  },

  btn: {
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  btnText: {
    color: Colors.text.secondary,
  },
});
