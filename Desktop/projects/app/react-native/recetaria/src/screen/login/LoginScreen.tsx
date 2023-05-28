import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomStyles} from '../../styles/Styles';
import CustomImputs from '../../components/screens/login/Imputs';
import Btn from '../../components/custom/Btn';
import {Colors} from '../../constants/Colors';
import LoginOCreate from './LoginOCreate';
import Toast from 'react-native-toast-message';
import {gql, useMutation} from '@apollo/client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStorageToken} from '../../zustand/Storage.Zustand';

type Props = {
  navigation: any;
};

const mutationLogin = gql`
  mutation ($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      value
    }
  }
`;

export default function LoginScreen({navigation}: Props) {
  const [getData, setGetData] = useState({
    email: '',
    password: '',
  });

  // save token in local storage

  const {setToken} = userStorageToken(state => state);

  const MassageAlert = (text1: string, text2: string) => {
    Toast.show({
      position: 'bottom',
      autoHide: true,

      type: 'error',
      text1: text1,
      text2: text2,
    });
  };

  // get user token

  const [getUser, {data}] = useMutation(mutationLogin, {
    variables: {
      email: getData.email,
      password: getData.password,
    },
  });

  const [inputChek, setInputChek] = useState(false);

  useEffect(() => {
    const {email, password} = getData;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = password.length >= 6;

    // validate the imputs alerts massage

    if (emailRegex.test(email) && passwordRegex) {
      setInputChek(false);
    } else {
      setInputChek(true);
    }
  }, [getData]);

  const hadlebtDisableAlerts = () => {
    const {email, password} = getData;

    const emailRegex = /\S+@\S+\.\S+/;

    if (password.length < 6) {
      MassageAlert(
        'Error en la contraseña',
        'La contraseña debe tener minimo 6 caracteres',
      );
      return;
    }

    if (!emailRegex.test(email)) {
      MassageAlert('Error en el correo', 'El correo no es valido');
      return;
    }
  };

  const handleBtn = async () => {
    await getUser();
    if (data) {
      await AsyncStorage.setItem('Token', data?.loginUser.value);
      setToken(data?.loginUser.value);
      navigation.navigate('tabs');
    }
    return;
  };

  return (
    <View style={[CustomStyles.container, styles.bady]}>
      <Text style={CustomStyles.title}>LoginScreen</Text>
      <Text style={CustomStyles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <View style={styles.inputContainer}>
        <CustomImputs
          plaseholder="Correo"
          onChageText={text => setGetData({...getData, email: text})}
          onEndEditing={() => {}}
          value={getData.email}
          keyboardType="email-address"
        />
        <CustomImputs
          plaseholder="Contraseña"
          onChageText={text => setGetData({...getData, password: text})}
          onEndEditing={() => {}}
          value={getData.password}
          isPassword={true}
        />
      </View>
      <Btn
        disabled={inputChek}
        contedContainerStyle={{backgroundColor: Colors.secondary}}
        text="Login"
        onPress={handleBtn}
        onDisabled={hadlebtDisableAlerts}
      />
      <LoginOCreate
        onPress={() => navigation.navigate('Register')}
        Subtitle="Registrate"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bady: {
    alignItems: 'center',
    paddingTop: 30,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
