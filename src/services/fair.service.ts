import { Fair } from '../types'
import api from './api'

const DOMAIN = (fair: string) => `fairs/${fair}`

const getFair = (fair: string): Promise<{ data: Fair }> =>
  api.get(`${DOMAIN(fair)}`)

const FairService = {
  getFair,
}

export default FairService
