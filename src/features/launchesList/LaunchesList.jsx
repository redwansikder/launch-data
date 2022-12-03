import React from 'react'
import { Avatar, List } from 'antd'

import { useGetAllLaunchesQuery } from './launchesListApiSlice'
import Launch from './Launch'

import { useSelector } from 'react-redux'

function LunchesList() {
  const {
    data: allLunches,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllLaunchesQuery()

  const search = useSelector((state) => state.form.search)
  const timeBlock = useSelector((state) => state.form.timeBlock)

  let content
  if (isLoading) content = <p>Loading...</p>
  if (isError) {
    content = <p className='errmsg'>{error?.data?.message}</p>
  }

  return (
    <div className='App'>
      {content}

      {isSuccess
        ? allLunches
            .filter(
              (singleLaunch) =>
                singleLaunch.mission_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) &&
                singleLaunch.launch_date_utc.split('T')[0].includes(timeBlock)
            )

            .map((launch) => (
              <Launch key={launch.mission_name} launch={launch} />
            ))
        : null}
    </div>
  )
}

export default LunchesList
