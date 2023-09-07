import { FairProduct } from '../types'
import api from './api'

const DOMAIN = (fair: string) => `fairs/${fair}/products`

const getFairProductList = (fair: string): Promise<{ data: FairProduct[] }> =>
  api.get(`${DOMAIN(fair)}`)

const FairProductService = {
  getFairProductList,
}

export default FairProductService
