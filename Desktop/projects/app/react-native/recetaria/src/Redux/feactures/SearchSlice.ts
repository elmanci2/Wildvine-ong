import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SearchState {
  term: string;
  seacrhTerms: string[];
}

const initialState: SearchState = {
  term: '',
  seacrhTerms: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },

    addSearchTerm: (state, action: PayloadAction<string>) => {
      state.seacrhTerms.unshift(action.payload);
    },

    removeSearchTerm: (state, action: PayloadAction<string>) => {
      state.seacrhTerms = state.seacrhTerms.filter(
        term => term !== action.payload,
      );
    },
  },
});

export const {setSearchTerm, addSearchTerm, removeSearchTerm} =
  searchSlice.actions;
export default searchSlice.reducer;
