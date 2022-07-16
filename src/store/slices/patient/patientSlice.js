
import { createSlice } from '@reduxjs/toolkit';
export const patientSlice = createSlice({

     name: 'patient',
     initialState: {
        patients: []
},
    reducers: {
      addPatient: (state, action ) => {
      state.patients = [...state.patients, action.payload];
    },

     deletePatient:(state,action) =>{
       state.patients = state.patients.filter(patient => patient.id !== action.payload);
     }

}
});

// Action creators are generated for each case reducer function
export const { addPatient,deletePatient } = patientSlice.actions;