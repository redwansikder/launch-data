// import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

// const launcheDetailsAdapter = createEntityAdapter({})
// const initialState = launcheDetailsAdapter.getInitialState()

export const launchDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleLaunche: builder.query({
      query: (flight_number) => `launches/${flight_number}`,
    }),
  }),
})

export const { useGetSingleLauncheQuery } = launchDetailsApiSlice

// returns the query result object
// export const selectLunchesListResult =
//   lunchesListApiSlice.endpoints.getAllLaunches.select()

// creates memoized selector
// const selectLunchesListData = createSelector(
//   selectLunchesListResult,
//   (lunchesListResult) => lunchesListResult.data // normalized state object with ids & entities
// )

//getSelectors creates these selectors and we rename them with aliases using destructuring

// export const obj = lunchesListAdapter.getSelectors(
//   (state) => selectLunchesListData(state) ?? initialState
// )
