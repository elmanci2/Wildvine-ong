import React, {useEffect, useState} from 'react';
import {MyStacksContainers} from './routes/routes';
import {StatusBar} from 'react-native';

import {ApolloProvider} from '@apollo/client';

import {Provider} from 'react-redux';
import {store} from './Redux/app/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorNetwoorkScreen from './screen/util/Error/ErrorNetwoorkScreen';

//check network
import NetInfo from '@react-native-community/netinfo';

function App(): JSX.Element {
  const persistor = persistStore(store);
  const [Token, setToken] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('Token');
      if (token) {
        setToken(token);
      }
    };
    getToken();
  }, []);

  /// check network

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state?.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  const bererToket = Token ? `bearer ${Token}` : '';

  const client = new ApolloClient({
    uri: 'https://recetari.fly.dev/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: bererToket,
    },
  });

  console.log(bererToket);

  if (!isConnected) {
    return <ErrorNetwoorkScreen />;
  }
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <MyStacksContainers />
          <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        </ApolloProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
