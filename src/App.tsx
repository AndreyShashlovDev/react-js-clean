import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import { BasicRouter } from './common/router/BasicRouter'
import { MainPageView } from './features/main-feature/presentation/MainPageView'

const CounterPageView = lazy(() => import('./features/counter-feature/presentation/CounterPageView'))
const PhonebookPageView = lazy(() => import('./features/phonebook-feature/presentation/PhonebookPageView'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageView />,
  },
  {
    path: 'counters',
    element: (
      <Suspense fallback={<>Lazy loading page fallback</>}>
        <CounterPageView />
      </Suspense>
    ),
  },
  {
    path: 'phonebook',
    element: (
      <Suspense fallback={<>Lazy loading page fallback</>}>
        <PhonebookPageView />
      </Suspense>
    ),
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
