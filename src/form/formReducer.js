import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  timeBlock: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.search = action.payload
    },
    date: (state, action) => {
      state.timeBlock = action.payload
    },
  },
})

export const { searchTerm, date } = formSlice.actions

export default formSlice.reducer
