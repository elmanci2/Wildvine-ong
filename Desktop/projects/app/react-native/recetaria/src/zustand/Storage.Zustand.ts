import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserToken = {
  Token: string | null;
  setToken: (token: string) => void;
};

export const userStorageToken = create(
  persist<UserToken>(
    set => ({
      Token: null,
      setToken: (token: string) => set({Token: token}),
    }),
    {
      name: 'userToken', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
