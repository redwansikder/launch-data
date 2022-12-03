import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/' }),

  endpoints: (builder) => ({}),
})
