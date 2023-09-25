export type Measure = 'unit' | 'liter' | 'kilo'
export type Category = 'fruit' | 'bakery' | 'vegetable' | 'drink' | 'meat'

export interface Fair {
  _id: string
  name: string
  status: 'IN_PROGRESS' | 'FINISHED'
  active: boolean
  createdAt: string
}

export interface Product {
  _id: string
  name: string
  price: number
  qty: number
  bought: boolean
  measure: Measure
  category: Category
  createdAt: string
}

export interface User {
  _id: string
  name: string
  email: string
  createdAt: string
}
