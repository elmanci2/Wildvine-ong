import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CategoriSkeletom = () => {
  const numOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <SkeletonPlaceholder>
        <View>
          {numOfItems.map((item, index) => (
            <View
              key={index}
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
                gap: 20,
              }}>
              <View
                style={{
                  width: 170,
                  height: 130,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <View
                style={{
                  width: 170,
                  height: 130,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
          ))}
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default CategoriSkeletom;
