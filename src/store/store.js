import { configureStore } from '@reduxjs/toolkit';
import { patientSlice } from './slices/patient/patientSlice';

export const store = configureStore({
    reducer: {
      patients:patientSlice.reducer
    },
  
  })