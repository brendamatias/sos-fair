import { Fair } from '../types'
import api from './api'

const DOMAIN = 'fairs'

const getFair = (id: string): Promise<{ data: Fair }> =>
  api.get(`${DOMAIN}/${id}`)

const getFairList = (): Promise<{ data: Fair[] }> => api.get(`${DOMAIN}`)

const createFair = (payload: {
  name: string
  template: string | null
}): Promise<{ data: Fair }> => api.post(`${DOMAIN}`, payload)

const FairService = {
  getFair,
  getFairList,
  createFair,
}

export default FairService
