import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  children: ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggedIn = localStorage.getItem('sos-fair')

  if (isLoggedIn) return children

  return <Navigate to="/" />
}
