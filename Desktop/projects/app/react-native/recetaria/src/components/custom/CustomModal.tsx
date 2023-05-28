import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Colors} from '../../constants/Colors';

type Props = {
  isopen: boolean;
  close: () => void;
  clindrem: JSX.Element | JSX.Element[];
};

const CustomModal = ({isopen = false, close, clindrem}: Props) => {
  return (
    <>
      <Modal
        onRequestClose={close}
        aria-hidden
        animationType="slide"
        transparent={true}
        visible={isopen}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={close}
            style={styles.closStyles}
          />
          <View style={styles.modal}>
            <View style={styles.closeContainer}>
              <View style={styles.bottomClose}>
                <Ionicons
                  name="close"
                  size={30}
                  onPress={close}
                  color={Colors.icon}
                />
              </View>
            </View>

            {clindrem}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  closStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  modal: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
  },

  bottomClose: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: Colors.iconContainer,
    borderRadius: 20,
    padding: 5,
    maxWidth: 40,
    maxHeight: 40,
  },
});
