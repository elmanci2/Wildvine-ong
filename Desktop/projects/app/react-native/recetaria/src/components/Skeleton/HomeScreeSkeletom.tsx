import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import CustomScreens from '../../screen/util/CustomScreens';

const HomeScreeSkeletom = () => {
  return (
    <CustomScreens>
      <SkeletonPlaceholder>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <View
              style={{
                width: 100,
                height: 20,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 30,
                  borderRadius: 4,
                  gap: 20,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    marginLeft: 10,
                    width: 100,
                    height: 20,
                    borderRadius: 4,
                  }}
                />
              </View>

              <View
                style={{
                  marginLeft: 10,
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{marginTop: 20, width: '90%', height: 50, borderRadius: 4}}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View style={{width: '17%', height: 100, borderRadius: 4}} />
            <View style={{width: '60%', height: 130, borderRadius: 4}} />
            <View style={{width: '17%', height: 100, borderRadius: 4}} />
          </View>

          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View style={{width: 100, height: 35, borderRadius: 4}} />
            <View style={{width: 100, height: 35, borderRadius: 4}} />
            <View style={{width: 100, height: 35, borderRadius: 4}} />
            <View style={{width: 100, height: 35, borderRadius: 4}} />
            <View style={{width: 100, height: 35, borderRadius: 4}} />
            <View style={{width: 100, height: 35, borderRadius: 4}} />
            <View style={{width: 100, height: 35, borderRadius: 4}} />
          </View>

          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View style={{width: 100, height: 25, borderRadius: 4}} />
            <View style={{width: 60, height: 25, borderRadius: 4}} />
          </View>

          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View style={{width: 150, height: 170, borderRadius: 4}} />
            <View style={{width: 150, height: 170, borderRadius: 4}} />
            <View style={{width: 150, height: 170, borderRadius: 4}} />
            <View style={{width: 150, height: 170, borderRadius: 4}} />
            <View style={{width: 150, height: 170, borderRadius: 4}} />
            <View style={{width: 150, height: 170, borderRadius: 4}} />
            <View style={{width: 150, height: 170, borderRadius: 4}} />
          </View>

          <View
            style={{
              marginTop: 30,
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              marginBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <View style={{width: 100, height: 100, borderRadius: 4}} />
              <View style={{width: 300, height: 100, borderRadius: 4}} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <View style={{width: 100, height: 100, borderRadius: 4}} />
              <View style={{width: 300, height: 100, borderRadius: 4}} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </CustomScreens>
  );
};

export default HomeScreeSkeletom;
