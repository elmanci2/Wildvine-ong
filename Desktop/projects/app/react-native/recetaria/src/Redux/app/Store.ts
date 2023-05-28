import {configureStore} from '@reduxjs/toolkit';
import searchReducer from '../feactures/SearchSlice';
import filterReducer from '../feactures/Filterslice';
import userReducer from '../feactures/UserSlice';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';

const persisConfig = {
  key: 'storage',
  storage: AsyncStorage,
  whitelist: ['search', 'filter', 'user'],
};

const rootReducer = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
