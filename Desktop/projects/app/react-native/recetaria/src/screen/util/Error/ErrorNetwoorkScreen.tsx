import {
  AppRegistry,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CustomStyles} from '../../../styles/Styles';
import Btn from '../../../components/custom/Btn';
import {Colors} from '../../../constants/Colors';
/// reload app

const ErrorNetwoorkScreen = () => {
  const reloadApp = () => {
    AppRegistry.registerComponent('App', () => require('../../../App'));
  };

  const handleOpenSettings = () => {
    reloadApp();
  };

  return (
    <View style={[CustomStyles.container, styles.bady]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.imgConted}>
        <Image
          resizeMode="contain"
          style={CustomStyles.img}
          source={require('../../../assets/image/util/no-internet.png')}
        />
      </View>
      <Text style={CustomStyles.title}>opps!</Text>
      <Text style={CustomStyles.miniTitle}>No hay conexión a Internet</Text>

      <Text style={CustomStyles.massage}>
        Parece que no hay conexión a Internet en este momento. Por favor,
        verifica tu conexión y asegúrate de estar conectado a una red
      </Text>

      <View style={styles.btnContainer}>
        <Btn
          contedContainerStyle={styles.btn}
          text="Reintentar"
          onPress={handleOpenSettings}
        />
      </View>
    </View>
  );
};

export default ErrorNetwoorkScreen;

const styles = StyleSheet.create({
  bady: {
    alignItems: 'center',
  },
  imgConted: {
    width: 250,
    height: 200,
    marginTop: 100,
  },

  btnContainer: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.secondary,
  },
});
