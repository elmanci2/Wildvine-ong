import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {CloseBottom} from './bottoms/CloseBottom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../constants/Colors';

type Props = {
  isVisible: boolean;
  cloesModal: () => void;
  title: string;
  massege: string;
  remove: () => void;
};

const DeleteModal = memo(
  ({isVisible = false, cloesModal, title, massege, remove}: Props) => {
    return (
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.madalContainer}>
          <View style={styles.modalConted}>
            <View style={styles.modalHeader}>
              <CloseBottom onPress={cloesModal} />
            </View>

            <View style={styles.modalBody}>
              <MaterialIcons
                name="error-outline"
                size={40}
                color="red"
                style={styles.iconModal}
              />
              <View>
                <Text style={styles.modalTextTitle}>{title}</Text>
                <Text style={styles.modalTextMassege}>{massege}</Text>
              </View>
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                onPress={cloesModal}
                style={[styles.btnModal, styles.btnCancel]}>
                <Text style={styles.btnTextmodal}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => remove()}
                style={[styles.btnModal, styles.betAcept]}>
                <Text style={[styles.btnTextmodal, styles.removeTextColorBtn]}>
                  Remover
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

export default DeleteModal;

const styles = StyleSheet.create({
  // modal

  madalContainer: {
    flex: 1,
    backgroundColor: Colors.opacity,
    position: 'relative',
  },

  modalConted: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.white,
  },
  modalFooter: {
    backgroundColor: Colors.iconContainer,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  btnModal: {
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 10,
    borderRadius: 10,
  },

  btnCancel: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },

  betAcept: {
    backgroundColor: 'red',
    borderColor: Colors.white,
    borderWidth: 1,
  },
  btnTextmodal: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.icon,
  },
  removeTextColorBtn: {
    color: Colors.white,
  },

  modalHeader: {
    padding: 10,
  },
  modalBody: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 10,
    gap: 10,
  },
  modalTextTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Colors.text.secondary,
  },
  modalTextMassege: {
    color: Colors.text.massage,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  iconModal: {
    backgroundColor: '#ee9098be',
    borderRadius: 50,
    padding: 4,
  },
});
