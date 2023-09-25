import { Category, Measure, Product } from '../types'
import api from './api'

const DOMAIN = (fair: string) => `fairs/${fair}/products`

const getProductList = (fair: string): Promise<{ data: Product[] }> =>
  api.get(`${DOMAIN(fair)}`)

const createProduct = (
  fair: string,
  payload: {
    name: string
    qty: number
    measure: Measure
    category: Category
    price: number
  },
): Promise<{ data: Product }> => api.post(`${DOMAIN(fair)}`, payload)

const deleteProduct = (id: string, fair: string): Promise<void> =>
  api.delete(`${DOMAIN(fair)}/${id}`)

const ProductService = {
  getProductList,
  createProduct,
  deleteProduct,
}

export default ProductService
