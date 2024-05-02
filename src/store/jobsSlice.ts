import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobListing } from '../types/types';

interface JobsState {
  jobs: JobListing[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
}



const initialState: JobsState = {
  jobs: [],
  totalCount: 0,
  isLoading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<{ jobs: JobListing[]; totalCount: number }>) => {
      state.jobs = action.payload.jobs;
      state.totalCount = action.payload.totalCount;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Export the actions and reducer from the slice
export const { setJobs, setIsLoading, setError } = jobsSlice.actions;
export default jobsSlice.reducer;