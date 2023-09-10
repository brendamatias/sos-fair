import { Product } from '../types'
import api from './api'

const DOMAIN = (fair: string) => `fairs/${fair}/products`

const getProductList = (fair: string): Promise<{ data: Product[] }> =>
  api.get(`${DOMAIN(fair)}`)

const deleteProduct = (id: string, fair: string): Promise<void> =>
  api.delete(`${DOMAIN(fair)}/${id}`)

const ProductService = {
  getProductList,
  deleteProduct,
}

export default ProductService
