import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FilterState {
  filters: [
    {
      dietas: string[];
      dificulta: string[];
      tecnica: string[];
    },
  ];
}

const initialState: FilterState = {
  filters: [
    {
      dietas: [],
      dificulta: [],
      tecnica: [],
    },
  ],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addItemFiter: (state, action: PayloadAction<any>) => {
      if (action.payload.type === 'dietas') {
        state.filters[0].dietas.push(action.payload.item);
      } else if (action.payload.type === 'dificulta') {
        state.filters[0].dificulta.push(action.payload.item);
      } else if (action.payload.type === 'tecnica') {
        state.filters[0].tecnica.push(action.payload.item);
      }
    },
    removeItemFiter: (state, action: PayloadAction<any>) => {
      if (action.payload.type === 'dietas') {
        state.filters[0].dietas = state.filters[0].dietas.filter(
          item => item !== action.payload.item,
        );
      } else if (action.payload.type === 'dificulta') {
        state.filters[0].dificulta = state.filters[0].dificulta.filter(
          item => item !== action.payload.item,
        );
      } else if (action.payload.type === 'tecnica') {
        state.filters[0].tecnica = state.filters[0].tecnica.filter(
          item => item !== action.payload.item,
        );
      }
    },
  },
});

export const {addItemFiter, removeItemFiter} = filterSlice.actions;
export default filterSlice.reducer;
