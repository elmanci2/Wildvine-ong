import {RefreshControl, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {FlatList} from 'react-native-gesture-handler';

///  props typs
type CustomScreensProps = {
  children: JSX.Element | JSX.Element[];
  loading?: boolean;
  refetch?: () => void;
};

const CustomScreens = ({
  children,
  loading = false,
  refetch,
}: CustomScreensProps) => {
  return (
    <View style={styles.bady}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={<>{children}</>}
      />
    </View>
  );
};

export default CustomScreens;

const styles = StyleSheet.create({
  bady: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
});
