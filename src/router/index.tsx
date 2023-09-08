import { createBrowserRouter } from 'react-router-dom'

import { Home, FairDetails } from '@/pages'

const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/fairs/:id',
    element: <FairDetails />,
  },
]

const router = createBrowserRouter(routes)

export default router
