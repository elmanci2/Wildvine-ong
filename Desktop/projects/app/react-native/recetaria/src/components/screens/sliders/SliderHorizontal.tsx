import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Subtext from '../../custom/Subtext';

type Props = {
  data: any;
  RenderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
  isSubtitle?: boolean;
  isSeemore?: boolean;
  subTitleText?: string;
  onSeeMore?: () => void;
  isHorizontal?: boolean;
};

const SliderHorizontal = ({
  data,
  RenderItem,
  isSubtitle = true,
  isSeemore = false,
  onSeeMore,
  subTitleText,
  isHorizontal = true,
}: Props) => {
  return (
    <View>
      {isSubtitle && (
        <Subtext
          text={subTitleText ?? ''}
          isSeeMore={isSeemore}
          onSeeMore={onSeeMore}
          TextStyle={{
            fontSize: 16,
          }}
          seeMoreStyle={{
            fontSize: 14,
          }}
        />
      )}
      <FlatList
        contentContainerStyle={{gap: 10, paddingVertical: 3}}
        horizontal={isHorizontal}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </View>
  );
};

export default SliderHorizontal;
