import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterCriteria } from '../types/types';

const initialState: FilterCriteria = {
  experience: 0,
  companyName: '',
  location: '',
  remoteOrOnsite: [],
  techStack: [],
  role: [],
  minBasePay: '',
};


const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterCriteria>) => {
      return action.payload;
    },
  },
});


export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;