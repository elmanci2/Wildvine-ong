import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },

  icontContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  labelTab: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  iconItemConted: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  IconBackgoundAnimated: {
    width: 90,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    height: '74%',
    marginLeft: 10,
    marginRight: 10,
  },
});
