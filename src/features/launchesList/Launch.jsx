import React from 'react'
import { Link } from 'react-router-dom'

function Launch({ launch }) {
  return (
    <div>
      <Link to={`${launch.flight_number}`} style={{ textDecoration: 'none' }}>
        <React.Fragment>
          <h2>{launch.mission_name}</h2>
          <p>{launch.launch_date_utc}</p>
          <p>{launch.launch_site.site_name_long}</p>
        </React.Fragment>
      </Link>
    </div>
  )
}

export default Launch
