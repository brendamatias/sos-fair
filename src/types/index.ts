type Measure = 'unit' | 'liter' | 'kilo'
type Category = 'fruit' | 'bakery' | 'vegetable' | 'drink' | 'meat'

export interface Fair {
  _id: string
  name: string
  status: 'IN_PROGRESS' | 'FINISHED'
  createdAt: string
}

export interface FairProduct {
  _id: string
  name: string
  price: number
  qty: number
  bought: boolean
  measure: Measure
  category: Category
  createdAt: string
}
