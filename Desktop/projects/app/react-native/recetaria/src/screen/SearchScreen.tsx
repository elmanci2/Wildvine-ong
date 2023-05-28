import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SearchImput from '../components/custom/SearchImput';
import {useAppSelector} from '../Redux/app/hooks';
import Subtext from '../components/custom/Subtext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/Colors';
import {removeSearchTerm} from '../Redux/feactures/SearchSlice';
import {useAppDispatch} from '../Redux/app/hooks';
import AnimatedScreen from './util/AnimatedScreen';
import {useNavigation} from '@react-navigation/native';
import DeleteModal from '../components/custom/modals/DeleteModal';

const SearchScreen = () => {
  const navigation = useNavigation<any>();

  const {seacrhTerms} = useAppSelector(state => state.search);

  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [itemRemoveTerm, setItemRemoveTerm] = useState<string>('');

  const handleRemoveTerm = (term: string) => {
    setItemRemoveTerm(term);
    setModalVisible(true);
  };

  const handleRemoveTermConfirm = () => {
    dispatch(removeSearchTerm(itemRemoveTerm));
    setModalVisible(false);
    console.log('remove term ');
  };

  const handleSearch = (term: string) => {
    navigation.navigate('categori', {
      searchTerm: term,
    });
  };

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.recentSearch}
        onPress={() => handleSearch(item)}
        onLongPress={() => handleRemoveTerm(item)}
        key={index}>
        <View style={styles.itemsContainer}>
          <Ionicons name="time-outline" size={20} color={Colors.icon} />
          <Text style={styles.lastText}>{item}</Text>
        </View>
        <Ionicons
          onPress={() => handleRemoveTerm(item)}
          name="close-outline"
          size={20}
          color={Colors.icon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <AnimatedScreen>
      <View style={styles.bady}>
        <SearchImput autoFocus={true} />
        <View>
          {/*  <Subtext text={'Últimas búsquedas'} TextStyle={styles.Subtext} /> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlist}
            data={seacrhTerms}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
      <DeleteModal
        isVisible={modalVisible}
        cloesModal={() => setModalVisible(false)}
        title="Remover búsqueda"
        massege=" sí elimina esto ya no podrá recuperarlo  está seguro de
        eliminar ?"
        remove={handleRemoveTermConfirm}
      />
    </AnimatedScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  Subtext: {
    fontSize: 17,
  },
  recentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    gap: 10,
    width: '95%',
  },
  lastText: {
    fontSize: 17,
    color: Colors.text.secondary,
  },
  bady: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flatlist: {
    paddingBottom: 100,
  },
});
