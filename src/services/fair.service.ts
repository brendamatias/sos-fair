import { Fair } from '../types'
import api from './api'

const DOMAIN = 'fairs'

const getFair = (id: string): Promise<{ data: Fair }> =>
  api.get(`${DOMAIN}/${id}`)

const getFairList = (): Promise<{ data: Fair[] }> => api.get(`${DOMAIN}`)

const FairService = {
  getFair,
  getFairList,
}

export default FairService
