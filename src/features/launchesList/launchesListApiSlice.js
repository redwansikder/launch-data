// import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

// const launchesListAdapter = createEntityAdapter({})
// const initialState = launchesListAdapter.getInitialState()

export const launchesListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getAllLaunches: builder.query<any, void>({
    getAllLaunches: builder.query({
      query: () => 'launches',
    }),
  }),
})

export const { useGetAllLaunchesQuery } = launchesListApiSlice

// returns the query result object
// export const selectLaunchesListResult =
//   launchesListApiSlice.endpoints.getAllLaunches.select()

// creates memoized selector
// const selectLaunchesListData = createSelector(
//   selectLaunchesListResult,
//   (lunchesListResult) => lunchesListResult.data // normalized state object with ids & entities
// )

//getSelectors creates these selectors and we rename them with aliases using destructuring

// export const obj = launchesListAdapter.getSelectors(
//   (state) => selectLaunchesListData(state) ?? initialState
// )
