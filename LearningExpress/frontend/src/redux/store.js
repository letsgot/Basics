import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from './slices/WorkoutSlice.js'


export const store = configureStore({
  reducer: {
    workout: workoutReducer,
  },
})