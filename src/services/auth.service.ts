import { User } from '../types'
import api from './api'

const DOMAIN = 'sessions'

const signIn = (payload: {
  email: string
  password: string
}): Promise<{ data: { token: string; user: User } }> =>
  api.post(`${DOMAIN}`, payload)

const AuthService = {
  signIn,
}

export default AuthService
