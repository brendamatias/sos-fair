import { FormEvent, useEffect, useState } from 'react'
import { Plus, Save, X } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Input, QuantitySelect, CategorySelect } from '@/components'
import { Container, Form, Button } from './styles'

import { Category, Fair, Measure, Product as ProductType } from '@/types'
import FairService from '@/services/fair.service'
import ProductService from '@/services/product.service'
import { Product } from '@/components/Product'

export const FairDetails: React.FC = () => {
  const { id = '' } = useParams()
  const [fair, setFair] = useState<Fair>()
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [productId, setProductId] = useState('')

  const [name, setName] = useState('')
  const [price, setPrice] = useState('0')
  const [measure, setMeasure] = useState<Measure>('unit')
  const [quantity, setQuantity] = useState<string>()
  const [category, setCategory] = useState<Category>()

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

  const clearForm = () => {
    setName('')
    setQuantity(undefined)
    setMeasure('unit')
    setCategory(undefined)
    setPrice('0')
    setProductId('')
  }

  const handleEdit = (product: ProductType) => {
    setProductId(product._id)
    setName(product.name)
    setPrice((product.price / 100).toString())
    setMeasure(product.measure)
    setCategory(product.category)
    setQuantity(product.qty.toString())
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name || !quantity || !measure || !category || !price) return

    setLoading(true)

    try {
      const body = {
        name,
        qty: parseInt(quantity, 10),
        measure,
        category,
        price: parseFloat(price) * 100,
      }

      if (productId) {
        await ProductService.updateProduct(id, productId, body)
      } else {
        await ProductService.createProduct(id, body)
      }

      setLoading(false)
      getProducts()

      toast.success(
        `Produto ${productId ? 'editado' : 'cadastrado'} com sucesso`,
      )

      clearForm()
    } catch (error: any) {
      setLoading(false)
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

      <Form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div className="inputs">
          <Input
            id="name"
            label="Valor"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <QuantitySelect
            measure={measure}
            setMeasure={setMeasure}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <CategorySelect value={category} setValue={setCategory} />

          <div className="buttons">
            {productId ? (
              <>
                <Button type="submit" disabled={loading}>
                  <Save />
                </Button>
                <Button>
                  <X />
                </Button>
              </>
            ) : (
              <Button type="submit" disabled={loading}>
                <Plus />
              </Button>
            )}
          </div>
        </div>
      </Form>

      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <Product
              {...product}
              handleEdit={() => handleEdit(product)}
              refresh={getProducts}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
