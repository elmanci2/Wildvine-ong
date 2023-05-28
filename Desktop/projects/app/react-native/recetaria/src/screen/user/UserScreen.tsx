import {StyleSheet, Text} from 'react-native';
import React from 'react';
import AnimatedScreen from '../util/AnimatedScreen';
import {CustomStyles} from '../../styles/Styles';
import {MotiImage, View} from 'moti';
import {RAMDOM_USER} from '../../constants/util';
import {Colors} from '../../constants/Colors';

const UserScreen = () => {
  return (
    <AnimatedScreen>
      <View style={styles.headerCOnted}>
        <View style={styles.header}>
          <View style={styles.imgConted}>
            <MotiImage
              from={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                type: 'timing',
                duration: 1000,
              }}
              source={{uri: RAMDOM_USER}}
              style={[CustomStyles.img, styles.img]}
            />
          </View>
          <Text style={CustomStyles.title}>Andres Felipe</Text>
          <Text>usuario no premiun</Text>
        </View>
        <View style={styles.hedearInfo}>
          <Text>hola</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.card}></View>
      </View>
    </AnimatedScreen>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 300,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  hedearInfo: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.secondary,
    marginTop: -25,
    zIndex: -1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imgConted: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
  },
  img: {
    borderRadius: 100,
  },
  headerCOnted: {
    backgroundColor: Colors.iconContainer,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.iconContainer,
    padding: 6,
  },

  card: {
    marginTop: 20,
    width: '100%',
    height: 200,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
});
