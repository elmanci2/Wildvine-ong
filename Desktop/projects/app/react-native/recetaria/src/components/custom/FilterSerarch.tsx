import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Subtext from './Subtext';
import {gql, useQuery} from '@apollo/client';
import {Colors} from '../../constants/Colors';
import {FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../Redux/app/hooks';
import {addItemFiter, removeItemFiter} from '../../Redux/feactures/Filterslice';
import {useNavigation} from '@react-navigation/native';

const getFilterInfo = gql`
  query {
    info: getRecipeMetaInfo {
      dietas
      dificultades
      tecnica
      temporada
    }
  }
`;

type getInfoTypes = {
  info: {
    dietas: string[];
    dificultades: string[];
    tecnica: string[];
    temporada: string[];
  };
};

type RenderFilterListProps = {
  datos: string[];
  action?: any;
  text: string;
  type: string;
};

const RenderFilterList = ({
  datos,
  text = '',
  type = 'dietas',
}: RenderFilterListProps) => {
  const {filter} = useAppSelector(state => state);

  const dispacher = useAppDispatch();

  //navigation

  const handleAddFilterElements = (item: string) => {
    if (!filter?.filters[0][type]?.includes(item)) {
      dispacher(
        addItemFiter({
          type,
          item,
        }),
      );
    } else {
      dispacher(
        removeItemFiter({
          type,
          item,
        }),
      );
    }
  };

  return (
    <View>
      <Subtext text={text} TextStyle={styles.subtextText} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={datos}
        contentContainerStyle={styles.contenContainerStyleFilter}
        renderItem={({item}) => {
          const isSelected = filter?.filters[0][type]?.includes(item);
          return (
            <TouchableOpacity
              onPress={() => handleAddFilterElements(item)}
              style={[
                {
                  backgroundColor: isSelected
                    ? Colors.tertiary
                    : Colors.iconContainer,
                },
                styles?.filterItemContainer,
              ]}>
              {isSelected && (
                <Ionicons name="checkmark" size={20} color={Colors.icon} />
              )}
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const FilterSerarch = () => {
  const {data, loading} = useQuery<getInfoTypes>(getFilterInfo);

  const navigation = useNavigation<any>();

  const handleSearch = () => {
    navigation.navigate('categori', {
      searchTerm: '',
    });
    return;
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <RenderFilterList
        type="dietas"
        text="Dietas"
        datos={data?.info?.dietas ?? ['']}
      />
      <RenderFilterList
        type="dificulta"
        text="Dificultad"
        datos={data?.info?.dificultades ?? ['']}
      />
      <RenderFilterList
        type="tecnica"
        text="Técnica"
        datos={data?.info?.tecnica ?? ['']}
      />
      <TouchableOpacity onPress={handleSearch} style={styles?.searchBottom}>
        <Text style={styles?.searchBottomText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterSerarch;

const styles = StyleSheet.create({
  container: {},
  subtextText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text.secondary,
  },
  SubtextStyle: {
    marginVertical: 2,
  },
  filterText: {
    color: Colors.icon,
    fontSize: 15,
    fontWeight: 'bold',
  },
  filterItemContainer: {
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contenContainerStyleFilter: {gap: 10},
  searchBottom: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  searchBottomText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
