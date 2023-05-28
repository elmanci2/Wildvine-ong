import {
  StyleSheet,
  Image,
  Text,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_RECIPE_QUERY} from '../gql/Query';
import {RecipeType} from '../types/Types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Father from 'react-native-vector-icons/Feather';
import {Colors} from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {Height} from '../constants/Dimensions';
import LoadingScree from './util/loading/LoadingScree';

type Types = {
  getRecipe: RecipeType;
  loading: boolean;
  error: Error;
  refetch: () => Promise<RecipeType>;
};

const PreviwScreen = ({route}: any) => {
  const {id} = route?.params;

  const {data, loading} = useQuery<Types>(GET_RECIPE_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <LoadingScree />;
  }

  return (
    <ScrollView style={styles.ScroolView}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.bady}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImage}>
            <Image
              style={styles.image}
              source={{
                uri: data?.getRecipe?.image,
              }}
            />
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', 'white']}
            />
          </View>
        </View>
        <View style={styles.subBady}>
          <View style={styles.headerIconstTop}>
            <Ionicons name="chevron-back-circle" size={30} color="black" />
            <View style={styles.headerIconstRhing}>
              <AntDesign name="staro" size={25} color="black" />
              <Ionicons name="share-outline" size={25} color="black" />
              <Father name="more-horizontal" size={25} color="black" />
            </View>
          </View>

          <View style={styles.textTitleContainer}>
            <Text style={styles.textTitle}>{data?.getRecipe?.title}</Text>
          </View>

          <View>
            <Text style={styles.Parrafos}>{data?.getRecipe?.preview}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const cuarentaPorceinto = Height * 0.4;

const styles = StyleSheet.create({
  ScroolView: {height: '100%', width: '100%', backgroundColor: 'white'},
  bady: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    height: cuarentaPorceinto,
  },

  headerIconstTop: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerIconstRhing: {
    flexDirection: 'row',
    gap: 10,
  },

  headerImage: {
    width: '100%',
    height: '100%',

    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    bottom: 0,
  },
  subBady: {
    width: '100%',
    paddingHorizontal: 10,
  },
  textTitleContainer: {
    width: '100%',
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: Colors.text.secondary,
  },

  Parrafos: {
    fontSize: 15,
  },
});

export default PreviwScreen;
