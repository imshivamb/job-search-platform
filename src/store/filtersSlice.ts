import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterCriteria } from '../types/types';

const initialState: FilterCriteria = {
  experience: 0,
  companyName: '',
  location: '',
  remoteOrOnsite: '',
  techStack: '',
  role: '',
  minBasePay: '',
};

// Create the Redux slice for filters
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterCriteria>) => {
      return action.payload;
    },
  },
});

// Export the actions and reducer from the slice
export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;