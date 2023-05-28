import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomStyles} from '../../styles/Styles';
import CustomImputs from '../../components/screens/login/Imputs';
import Btn from '../../components/custom/Btn';
import {Colors} from '../../constants/Colors';
import Toast from 'react-native-toast-message';
import {gql, useMutation} from '@apollo/client';
import LoginOCreate from './LoginOCreate';

const MutationcreateUser = gql`
  mutation (
    $name: String!
    $email: String!
    $password: String!
    $role: String!
    $isPremium: Boolean!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      role: $role
      isPremium: $isPremium
    ) {
      email
    }
  }
`;

type Props = {
  navigation: any;
};

export default function RegisterScreen({navigation}: Props) {
  ///  get the data from the imputs
  const [getDateFromInputs, setGetDateFromInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  /// execute mutation gql
  const [createUer, {data, error}] = useMutation(MutationcreateUser, {
    variables: {
      name: getDateFromInputs.name,
      email: getDateFromInputs.email,
      password: getDateFromInputs.password,
      role: 'user',
      isPremium: false,
    },
  });

  //  Massage
  const MassageAlert = (text1: string, text2: string) => {
    Toast.show({
      position: 'bottom',
      autoHide: true,

      type: 'error',
      text1: text1,
      text2: text2,
    });
  };

  if (error) {
    MassageAlert('Error', error.message);
  }

  console.log(data);

  // handle btn

  const handleBtn = () => {
    createUer();
    return null;
  };
  const hadlebtDisableAlerts = () => {
    const {name, email, password} = getDateFromInputs;

    const emailRegex = /\S+@\S+\.\S+/;

    if (password.length < 6) {
      MassageAlert(
        'Error en la contraseña',
        'La contraseña debe tener minimo 6 caracteres',
      );
      return;
    }

    if (name.length < 2) {
      MassageAlert(
        'Error en el nombre',
        'El nombre debe tener minimo 2 caracteres',
      );
      return;
    }

    if (!emailRegex.test(email)) {
      MassageAlert('Error en el correo', 'El correo no es valido');
      return;
    }
  };

  // handle btn deactive

  useEffect(() => {
    const {name, email, password} = getDateFromInputs;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = password.length >= 6;
    const nameRegex = /^[a-zA-Z ]{2,30}$/;

    // validate the imputs alerts massage

    if (nameRegex.test(name) && emailRegex.test(email) && passwordRegex) {
      setInputChek(false);
    } else {
      setInputChek(true);
    }
  }, [getDateFromInputs]);

  //  validate the imputs

  const [inputChek, setInputChek] = useState(true);

  return (
    <View style={[CustomStyles.container, styles.bady]}>
      <Toast position="bottom" bottomOffset={20} />

      <Text style={CustomStyles.title}>!Crea una cunta gratis</Text>
      <Text style={CustomStyles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <View style={styles.imputContainer}>
        <CustomImputs
          plaseholder="Nombre"
          onChageText={text =>
            setGetDateFromInputs({...getDateFromInputs, name: text})
          }
          onEndEditing={() => {}}
          value={getDateFromInputs.name}
        />

        <CustomImputs
          keyboardType="email-address"
          plaseholder="Correo"
          onChageText={text =>
            setGetDateFromInputs({...getDateFromInputs, email: text})
          }
          onEndEditing={() => {}}
          value={getDateFromInputs.email}
        />

        <CustomImputs
          keyboardType="default"
          plaseholder="Contraseña"
          onChageText={text =>
            setGetDateFromInputs({...getDateFromInputs, password: text})
          }
          onEndEditing={() => {}}
          value={getDateFromInputs.password}
          isPassword={true}
        />
      </View>
      <Btn
        disabled={inputChek}
        contedContainerStyle={{backgroundColor: Colors.secondary}}
        onPress={handleBtn}
        onDisabled={hadlebtDisableAlerts}
        text="Registrate"
      />
      <LoginOCreate
        onPress={() => navigation.navigate('Login')}
        Subtitle="Inicia sesion"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bady: {
    alignItems: 'center',
    paddingTop: 30,
  },
  imputContainer: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imputTitle: {
    color: '#8d8d8d',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  imputStyle: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
