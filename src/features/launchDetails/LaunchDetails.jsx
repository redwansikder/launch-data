import React from 'react'
// import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetSingleLauncheQuery } from './launchDetailsApiSlice'

function LaunchDetails() {
  const { singleLaunch } = useParams()
  console.log(singleLaunch)

  const { data: singleLaunche, isSuccess } =
    useGetSingleLauncheQuery(singleLaunch)

  // const { search, timeBlock } = useSelector((state) => state.form)

  return (
    <div>
      {/* {timeBlock} */}
      {isSuccess && (
        <div>
          <h2>{singleLaunche.mission_name}</h2>
          <p>{singleLaunche.launch_date_utc.split('T')[0]}</p>
          <p>{singleLaunche.launch_site.site_name_long}</p>
        </div>
      )}
    </div>
  )
}

export default LaunchDetails
