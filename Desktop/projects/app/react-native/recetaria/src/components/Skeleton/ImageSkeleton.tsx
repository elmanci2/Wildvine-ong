import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Skeleton} from 'moti/skeleton';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ImageSkeleton = () => {
  return (
    <View>
      <SkeletonPlaceholder>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
          }}></View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default ImageSkeleton;

const styles = StyleSheet.create({});
