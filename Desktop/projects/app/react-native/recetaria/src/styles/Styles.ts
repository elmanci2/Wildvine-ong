import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const CustomStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#0000004f',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    elevation: 40,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 27,
    fontFamily: 'Poppins-Bold',
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: 20,
  },

  massage: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.text.massage,
    textAlign: 'center',
    marginTop: 20,
  },

  miniTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: 10,
  },
});
