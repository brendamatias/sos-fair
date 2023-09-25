import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '@/components'

type PrivateRouteProps = {
  children: ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggedIn = localStorage.getItem('sos-fair')

  if (isLoggedIn)
    return (
      <>
        <Header />
        {children}
      </>
    )

  return <Navigate to="/" />
}
