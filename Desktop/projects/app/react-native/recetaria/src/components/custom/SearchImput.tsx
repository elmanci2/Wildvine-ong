import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Text,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/Colors';
import {useAppDispatch} from '../../Redux/app/hooks';
import {setSearchTerm, addSearchTerm} from '../../Redux/feactures/SearchSlice';

import {MotiView, MotiAnimationProp} from 'moti';
import {gql, useQuery} from '@apollo/client';

const imputColor: string = Colors.iconContainer;
const imputHeight: number = 40;
const impustShadow: object = {
  elevation: 1,
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
};

type Props = {
  autoFocus?: boolean;
};

const motiAnimation: MotiAnimationProp<any> = {
  from: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 100,
    type: 'timing',
    delay: 300,
    loop: false,
    repeat: 0,
  },
  exit: {
    opacity: 0,
    scale: 0,
    delay: 300,
  },
};
const motiTermANimation: MotiAnimationProp<any> = {
  from: {
    transform: [{translateX: -1000}],
    opacity: 0.1,
  },
  animate: {
    transform: [{translateX: 0}],
    opacity: 1,
  },
};

const GET_SUGGESTION = gql`
  query ($input: String!) {
    sugget: getAutocompleteSuggestions(input: $input) {
      title
      id
      _id
    }
  }
`;

const SearchImput = ({autoFocus = false}: Props) => {
  const navigate = useNavigation<any>();

  const inputRef = React.useRef<any>(null);
  const [TextShear, setTextShear] = useState('');

  // sugerns
  const {data} = useQuery(GET_SUGGESTION, {
    variables: {
      input: TextShear,
    },
  });

  console.log(data);

  const dispatch = useAppDispatch();

  /// update text in redux

  const handleSearch = () => {
    navigate.navigate('search');
    return null;
  };

  const handleText = () => {
    if (TextShear === '') {
      return null;
    }
    dispatch(setSearchTerm(TextShear));
    dispatch(addSearchTerm(TextShear));
    navigate.navigate('categori', {
      searchTerm: TextShear,
    });
    setTextShear('');
    return null;
  };

  const handleClear = () => {
    setTextShear('');
    inputRef.current.focus();
    return null;
  };

  return (
    <View>
      <KeyboardAvoidingView behavior="padding" style={styles.imputsContainer}>
        <View style={styles.input}>
          <Ionicons name="search" size={20} color={Colors.icon} />
          <TextInput
            ref={inputRef}
            value={TextShear}
            onChangeText={text => setTextShear(text)}
            autoFocus={autoFocus}
            onFocus={handleSearch}
            style={styles.inputElemet}
            placeholder="Qué buscas?"
            onSubmitEditing={handleText}
            returnKeyType="search"
            keyboardType="web-search"
          />
          {TextShear?.length > 0 && (
            <MotiView {...motiAnimation}>
              <TouchableOpacity onPress={handleClear}>
                <Ionicons name="close" size={20} color={Colors.icon} />
              </TouchableOpacity>
            </MotiView>
          )}
        </View>

        <TouchableOpacity style={styles.Filter}>
          <Ionicons name="filter" size={20} color={Colors.icon} />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {TextShear?.length > 0 && (
        <View style={styles.sugerContainer}>
          <FlatList
            contentContainerStyle={{gap: 10}}
            keyExtractor={item => item.id}
            data={data?.sugget}
            renderItem={({item, index}) => {
              return (
                <>
                  {
                    <MotiView
                      transition={{
                        type: 'timing',
                        duration: 300,
                        loop: false,
                        delay: index * 100,
                      }}
                      {...motiTermANimation}>
                      <TouchableOpacity>
                        <Text numberOfLines={2} style={styles.suggetText}>
                          {item?.title
                            .split(' ')
                            .map((word: string, index: number) => (
                              <Text
                                key={item._id + index}
                                style={
                                  word.toLowerCase() ===
                                  TextShear?.toLowerCase()?.trim()
                                    ? {color: Colors.secondary}
                                    : null
                                }>
                                {word + ' '}
                              </Text>
                            ))}
                        </Text>
                      </TouchableOpacity>
                    </MotiView>
                  }
                </>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchImput;

const styles = StyleSheet.create({
  imputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
    position: 'relative',
  },
  input: {
    height: imputHeight,
    width: '84%',
    backgroundColor: imputColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    ...impustShadow,
  },
  Filter: {
    height: imputHeight,
    backgroundColor: imputColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    ...impustShadow,
  },
  inputElemet: {
    flex: 1,
    backgroundColor: imputColor,
    borderRadius: 10,
  },

  //  sugeren styles
  sugerContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Colors.iconContainer,
    borderRadius: 10,
    marginTop: 70,
    paddingHorizontal: 10,
    paddingVertical: 10,
    zIndex: 10,
  },

  suggetText: {
    width: '90%',
    color: Colors.icon,
    fontSize: 13,
    paddingVertical: 5,
    fontFamily: 'Poppins-Medium',
  },

  highlightedWord: {
    color: Colors.secondary,
  },
});
