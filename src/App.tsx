import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import { BasicRouter } from './common/router/BasicRouter'
import { CounterPageView } from './features/counter-feature/presenter/CounterPageView'
import { MainPageView } from './features/main-feature/presenters/MainPageView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageView />,
  },
  {
    path: 'counters',
    element: <CounterPageView />,
  },
])

BasicRouter.router = router

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
