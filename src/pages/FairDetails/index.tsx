import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Input, QuantitySelect, CategorySelect } from '@/components'
import { Container, Form, Button } from './styles'

import { Fair, Product as ProductType } from '@/types'
import FairService from '@/services/fair.service'
import ProductService from '@/services/product.service'
import { Product } from '@/components/Product'

export const FairDetails: React.FC = () => {
  const { id = '' } = useParams()
  const [fair, setFair] = useState<Fair>()
  const [products, setProducts] = useState<ProductType[]>([])

  const getFair = async () => {
    try {
      const { data } = await FairService.getFair(id)

      setFair(data)
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  const getProducts = async () => {
    try {
      const { data } = await ProductService.getProductList(id)

      setProducts(data)
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  useEffect(() => {
    getFair()
    getProducts()
  }, [])

  return (
    <Container>
      <h1>{fair?.name}</h1>
      <Form>
        <Input id="name" label="Item" />
        <QuantitySelect />
        <CategorySelect />

        <div>
          <Button>
            <Plus color="#fff" />
          </Button>
        </div>
      </Form>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <Product {...product} refresh={getProducts} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
