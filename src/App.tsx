import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LaunchesList from './features/launchesList/LaunchesList'
import LaunchDetails from './features/launchDetails/LaunchDetails'
import Shared from './Shared'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shared />}>
          <Route index element={<LaunchesList />} />
          <Route path=':singleLaunch' element={<LaunchDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
