import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import filtersReducer from './filtersSlice';

// Combine the reducers
const rootReducer = {
  jobs: jobsReducer,
  filters: filtersReducer,
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export default store;