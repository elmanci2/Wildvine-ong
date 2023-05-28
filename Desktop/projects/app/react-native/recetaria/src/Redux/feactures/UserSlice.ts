import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  image?: string;
}

const initialState: UserState = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const {setToken} = userSlice.actions;
export default userSlice.reducer;
