import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_RECIPE_BY_CATEGORY_QUERY} from '../gql/Query';
import {RenderItemSliderHorizontal} from '../components/screens/home/RenderItemSliderHorizontal';
import {RecipeType} from '../types/Types';
import {Colors} from '../constants/Colors';
import Categoris from '../components/screens/home/Categoris';
import {Height, Width} from '../constants/Dimensions';
import {useAppSelector} from '../Redux/app/hooks';
import LoadingScree from './util/loading/LoadingScree';
import Lottie from 'lottie-react-native';
import {CustomStyles} from '../styles/Styles';
import {FlashList} from '@shopify/flash-list';
import {NotFaoudSearchScreen} from './util/Error/notFaoudSearchScreen';

type DatosType = {
  recipes: [
    {
      results: RecipeType[];
    },
  ];

  results: RecipeType[];
};

const CategoriScreen = ({route}: any) => {
  const {searchTerm} = route?.params;
  const {filter} = useAppSelector(state => state);

  console.log(filter);

  // infinite scroll with apollo client

  const [currenPage, setCurrenPage] = useState(1);
  const [resipes, setResipes] = useState([]);
  //  const [loading, setLoading] = useState(true);
  const [searchTermState, setSearchTermState] = useState(searchTerm);

  const onCompleted = (recipes: DatosType) => {
    if (data?.results) {
      const newResipes = [...resipes, ...recipes?.results];
      const fiterRepeat = newResipes.filter(
        (movie, index, self) => index === self.indexOf(movie),
      );
      setResipes(fiterRepeat as any);
    }
  };

  const {
    data,
    loading: load,
    refetch,
  } = useQuery(GET_RECIPE_BY_CATEGORY_QUERY, {
    variables: {
      term: searchTermState,
      page: currenPage,
      filters: filter?.filters[0],
    },
    onCompleted,
  });

  const windowsSize = Width - 20;

  const handleLoadMore = () => {
    setCurrenPage(prevPage => prevPage + 1);
  };

  const handleKeyWord = (term: string) => {
    setSearchTermState(term);
    setCurrenPage(1);
    setResipes([]);
    refetch();
  };

  ///   stract keywords from the search items
  const stractKeywords = Array.isArray(resipes)
    ? resipes?.map(({keywords}: any) =>
        keywords?.map(({keyword}: any) => keyword),
      )
    : [];

  const removeDuplicatesKeywords = new Set(stractKeywords?.flat(Infinity));
  const arrayKeywords: any = [...removeDuplicatesKeywords]?.reverse();

  if (load && currenPage === 1) {
    return <LoadingScree />;
  }

  if (data?.results?.length === 0 && currenPage === 1) {
    return <NotFaoudSearchScreen term={searchTerm} />;
  }
  const widthItem = Width / 2 - 5;

  const renderItem = ({item, index}: any) => {
    return (
      <RenderItemSliderHorizontal
        imageContainerStyles={{height: 150} as any}
        contedContainerStyle={{width: widthItem}}
        item={item}
        index={index}
        key={index}
      />
    );
  };

  return (
    <View style={CustomStyles.container}>
      <Categoris
        action={(term: string) => handleKeyWord(term)}
        data={arrayKeywords}
      />

      <View style={{width: windowsSize, height: Height}}>
        <FlashList
          showsVerticalScrollIndicator={false}
          estimatedItemSize={widthItem}
          numColumns={2}
          data={resipes ?? []}
          keyExtractor={(item, index) => index?.toLocaleString()}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={handleLoadMore}
          ListFooterComponentStyle={styles.footerList}
          ListFooterComponent={
            <View style={styles.miniLoading}>
              <Lottie
                style={styles.lottie}
                source={require('../assets/lottie/mini-loader.json')}
                autoPlay
                loop
              />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default CategoriScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginVertical: 10,
    textTransform: 'capitalize',
  },
  relacionadoText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.icon,
    marginBottom: -5,
  },
  flatList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  miniLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    hegith: 50,
  },

  lottie: {width: 100, height: 100},
  footerList: {marginBottom: 100},
});
