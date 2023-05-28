import React from 'react';
import CustomScreens from './util/CustomScreens';
import Menu from '../components/screens/home/Menu';
import Header from '../components/screens/home/Header';
import {useQuery} from '@apollo/client';
import {GET_CATEGORI_QUERY} from '../gql/Query';
import Categoris from '../components/screens/home/Categoris';
import Swiper from '../components/screens/home/Swiper';
import {useNavigation} from '@react-navigation/native';
import LoadingScree from './util/loading/LoadingScree';
import {MyBottomTabs} from '../routes/bottomTabs/Mybottomtabs';
import AnimatedScreen from './util/AnimatedScreen';
import {View} from 'react-native';

const HomeScreen = () => {
  const {data, loading, refetch} = useQuery(GET_CATEGORI_QUERY);

  const navegation = useNavigation<any>();

  const handleCategori = (item: any) => {
    navegation.navigate('categori', {searchTerm: item});
  };

  if (loading) {
    return <LoadingScree />;
  }

  return (
    <AnimatedScreen>
      <Menu />
      <Header />
      <Swiper />
      <Categoris
        action={handleCategori}
        data={data?.categorias ?? []}
        loading={loading}
      />
    </AnimatedScreen>
  );
};

export default HomeScreen;
