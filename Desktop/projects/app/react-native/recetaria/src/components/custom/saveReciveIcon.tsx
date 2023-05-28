import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CreateAndSaveRercipeOrDiet} from './modals/BottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';

export const SaveReciveIcon = () => {
  // create ref

  const [ref, setref] = useState<BottomSheet>(null);

  const openCrete = () => {
    ref?.current?.expand();
  };

  return (
    <View style={styles.conted}>
      <TouchableOpacity onPress={openCrete}>
        <FontAwesome name="heart-o" size={30} color="red" />
      </TouchableOpacity>
      <View style={{width: '100%', height: '100%', position: 'absolute'}}>
        <CreateAndSaveRercipeOrDiet getRef={r => setref(r)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conted: {
    flex: 1,
  },
});
