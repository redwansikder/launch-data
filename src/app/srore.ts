import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import formReducer from '../form/formReducer'
import '../form/formReducer'

export const store = configureStore({
  reducer: {
    form: formReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
