import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {gql, useMutation, useQuery} from '@apollo/client';
import {Colors} from '../../../constants/Colors';
import {MotiAnimationProp, MotiView} from 'moti';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {CloseBottom} from './bottoms/CloseBottom';
import CustomImputs from '../../screens/login/Imputs';
import {CustomStyles} from '../../../styles/Styles';
import CreateBottom from './bottoms/CreateBottom';
import Lottie from 'lottie-react-native';
import {CREATE_DIET} from '../../../gql/Mutations';
interface Props {
  openCrete: () => void;
}

const CreateDietBottom = ({openCrete}: Props) => {
  return (
    <View style={styles.createDiet}>
      <TouchableOpacity onPress={openCrete} style={styles.createDietPress}>
        <View style={styles.createIconConted}>
          <Ionicons name="add" size={30} color={Colors.icon} />
        </View>
        <Text style={styles.createText}>Create Diet</Text>
      </TouchableOpacity>
    </View>
  );
};

const GET_DIETS = gql`
  query {
    getAllDiets {
      _id
      diet {
        id
        name
        description
      }
    }
  }
`;

type props = {
  getRef: (ref: any) => void;
  isSheetOpen?: boolean;
};

export const CreateAndSaveRercipeOrDiet = ({getRef}: props) => {
  const [getData, setGetData] = React.useState({
    name: '',
    descripcion: '',
  });

  const [createDiet, {data: createData}] = useMutation(CREATE_DIET, {
    variables: {
      name: getData.name,
      description: getData.descripcion,
      recipesId: '6445de79a9fa405f524d3cb7',
    },
  });

  const {data, refetch} = useQuery(GET_DIETS);

  const snapPoints = React.useMemo(() => ['40%', '75%'], []);
  const snapPoints2 = React.useMemo(() => ['98%'], []);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const motiAnimation: MotiAnimationProp<any> = {
    from: {
      backgroundColor: 'transparent',
    },
    exit: {
      backgroundColor: 'transparent',
    },
    animate: {
      backgroundColor: isSheetOpen ? '#0000004f' : 'transparent',
    },
  };

  useEffect(() => {
    refetch();
  }, [createData, refetch]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRef2 = useRef<BottomSheet>(null);

  useEffect(() => {
    getRef(bottomSheetRef);
  }, [bottomSheetRef, getRef]);

  const openSheet2 = useCallback(() => {
    bottomSheetRef2.current?.expand();
  }, []);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
    setIsSheetOpen(true);
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    setIsSheetOpen(false);
  }, []);

  const handelCreateDiet = async () => {
    try {
      await createDiet();
      if (createData) {
        bottomSheetRef2.current?.close();
        setGetData({name: '', descripcion: ''});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const esistName = getData.name.length > 0;

  const miniTextStyles = {fontSize: 17, marginLeft: 20};

  return (
    <MotiView {...motiAnimation} style={styles.conted}>
      <BottomSheet
        footerComponent={() => CreateDietBottom({openCrete: openSheet2})}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsSheetOpen(false)}
        onChange={() => console.log('change')}>
        <BottomSheetScrollView>
          <CloseBottom onPress={closeSheet} />
          {data?.getAllDiets?.length > 0 ? (
            <View>
              {data?.getAllDiets.map((item: any) => (
                <View key={item._id}>
                  <Text>{item.diet[0].name}</Text>
                  <Text>{item.diet[0].description}</Text>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <Lottie
                source={require('../../../assets/lottie/ingredientdBould.json')}
                autoPlay
                loop
                style={styles.Lottie}
              />
              <Text style={styles.massage}>No has creado ninguna dieta</Text>
            </View>
          )}
        </BottomSheetScrollView>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetRef2}
        index={-1}
        snapPoints={snapPoints2}
        enablePanDownToClose={true}>
        <BottomSheetScrollView>
          <View style={styles.headerCheader}>
            <CloseBottom onPress={() => bottomSheetRef2.current?.close()} />
            <Text style={styles.textHeader}>crear una dieta</Text>
            <CreateBottom onPress={handelCreateDiet} isActived={esistName} />
          </View>

          {/* preview  */}

          <Text style={[styles.textHeader, miniTextStyles]}>Preview</Text>

          <View style={styles.createPreview}>
            <View style={styles.imgCreatePreviewConted}>
              <Image
                resizeMode="contain"
                style={[CustomStyles.img, styles.imgCreate]}
                source={{
                  uri: 'https://content-cocina.lecturas.com/medio/2023/05/18/salteado-de-solomillo-de-cerdo-con-pimienta_f3b8b975_900x900.jpg',
                }}
              />
            </View>
            <View style={styles.createTextPreview}>
              <Text numberOfLines={1} style={styles.textHeader}>
                {getData.name}
              </Text>
              <Text numberOfLines={4}>{getData.descripcion}</Text>
            </View>
          </View>

          {/* inputs */}
          <Text style={[styles.textHeader, miniTextStyles]}>Nombre</Text>
          <CustomImputs
            keyboardType="default"
            value={getData.name}
            onChageText={(text: string) => setGetData({...getData, name: text})}
            plaseholder="nombre de la dieta"
            imputStyle={{backgroundColor: Colors.iconContainer}}
            isPassword={false}
          />
          <Text style={[styles.textHeader, miniTextStyles]}>Descripcion</Text>

          <CustomImputs
            keyboardType="default"
            value={getData.descripcion}
            onChageText={(text: string) =>
              setGetData({...getData, descripcion: text})
            }
            plaseholder="nombre de la dieta"
            imputStyle={{
              backgroundColor: Colors.iconContainer,
            }}
            isPassword={false}
            isTextArea={true}
            numberOfLines={5}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  conted: {
    flex: 1,
  },

  /// create diet

  createDiet: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -20,
    },

    elevation: 30,
  },
  createIconConted: {
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: Colors.iconContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  createText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  createDietPress: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  /// lottie
  Lottie: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  massage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.text.massage,
  },

  // header
  headerCheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  // preview
  createPreview: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  imgCreatePreviewConted: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: Colors.iconContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCreate: {
    borderRadius: 10,
  },

  createTextPreview: {
    width: '70%',
    marginLeft: 10,
    alignItems: 'flex-start',
  },
});
