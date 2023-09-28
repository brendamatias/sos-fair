import { Category, Measure, Product } from '../types'

import api from './api'

const DOMAIN = (fair: string) => `fairs/${fair}/products`

type CreateOrEditProduct = {
  name?: string
  qty?: number
  measure?: Measure
  category?: Category
  price?: number
  bought?: boolean
}

const getProductList = (fair: string): Promise<{ data: Product[] }> =>
  api.get(`${DOMAIN(fair)}`)

const createProduct = (
  fair: string,
  payload: CreateOrEditProduct,
): Promise<{ data: Product }> => api.post(`${DOMAIN(fair)}`, payload)

const createProducts = (
  fair: string,
  url: string,
): Promise<{ data: Product }> => api.post(`${DOMAIN(fair)}/nf`, { url })

const updateProduct = (
  fair: string,
  product: string,
  payload: CreateOrEditProduct,
): Promise<{ data: Product }> => api.put(`${DOMAIN(fair)}/${product}`, payload)

const deleteProduct = (id: string, fair: string): Promise<void> =>
  api.delete(`${DOMAIN(fair)}/${id}`)

const ProductService = {
  getProductList,
  createProduct,
  createProducts,
  updateProduct,
  deleteProduct,
}

export default ProductService
