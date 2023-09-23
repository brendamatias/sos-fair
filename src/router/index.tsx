import { createBrowserRouter } from 'react-router-dom'

import { SignIn, Home, FairDetails } from '@/pages'
import { PrivateRoute } from './PrivateRoute'

const routes = [
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/fairs/:id',
    element: (
      <PrivateRoute>
        <FairDetails />
      </PrivateRoute>
    ),
  },
]

const router = createBrowserRouter(routes)

export default router
