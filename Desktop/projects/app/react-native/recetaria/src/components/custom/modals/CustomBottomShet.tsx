import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {MotiView, MotiAnimationProp} from 'moti';

interface Props {
  bottomSheetRef: React.MutableRefObject<BottomSheet | null>;
}

const CustomBottomSheet = ({bottomSheetRef}: Props) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const motiAnimation: MotiAnimationProp<any> = {
    from: {
      backgroundColor: 'transparent',
    },
    exit: {
      backgroundColor: 'transparent',
    },
    animate: {
      backgroundColor: isSheetOpen ? '#0000004f' : 'transparent',
    },
  };

  const snapPoints = useMemo(() => ['25%', '70%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    setIsSheetOpen(true);
  }, []);

  return (
    <MotiView {...motiAnimation} style={[styles.container]}>
      <BottomSheet
        onClose={() => setIsSheetOpen(false)}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </MotiView>
  );
};

export default CustomBottomSheet;
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
