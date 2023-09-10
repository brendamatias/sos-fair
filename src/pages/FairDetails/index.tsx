import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import classNames from 'classnames'

import { Input, QuantitySelect, CategorySelect, Dropdown } from '@/components'
import {
  Container,
  Form,
  Button,
  ProductItem,
  ProductInfo,
  Tag,
  ProductPrice,
} from './styles'
import {
  categoryBackground,
  categoryColor,
  categoryIcon,
  categoryLabel,
  measureLabel,
} from '@/constants'
import { Fair, Product } from '@/types'
import { formatPrice } from '@/utils/format'
import FairService from '@/services/fair.service'
import ProductService from '@/services/product.service'

export const FairDetails: React.FC = () => {
  const { id = '' } = useParams()
  const [fair, setFair] = useState<Fair>()
  const [products, setProducts] = useState<Product[]>([])

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

  const deleteProduct = async (productId: string) => {
    try {
      await ProductService.deleteProduct(productId, id)

      getProducts()
      toast.success('Produto deletado com sucesso!')
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
          <ProductItem
            key={product.name}
            className={classNames({ bought: product.bought })}
          >
            <div>
              <ProductInfo className={classNames({ bought: product.bought })}>
                <input type="checkbox" checked={product.bought} />
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {product.qty}{' '}
                    {`${measureLabel[product.measure]}${
                      product.measure !== 'kilo' && product.qty > 1 ? 's' : ''
                    }`}
                  </span>
                </div>
              </ProductInfo>

              <ProductPrice className={classNames({ bought: product.bought })}>
                <strong>{formatPrice(product.price)}</strong>
                <span>Valor individual</span>
              </ProductPrice>

              <ProductPrice className={classNames({ bought: product.bought })}>
                <strong>{formatPrice(product.price)}</strong>
                <span>Valor total</span>
              </ProductPrice>

              <div className="left">
                <Tag
                  style={{
                    color: categoryColor[product.category],
                    background: categoryBackground[product.category],
                  }}
                  className={classNames({ bought: product.bought })}
                >
                  {categoryIcon[product.category]}
                  {categoryLabel[product.category]}
                </Tag>

                <Dropdown
                  options={[
                    { label: 'Editar', onClick: () => {} },
                    {
                      label: 'Remover',
                      onClick: () => deleteProduct(product._id),
                    },
                  ]}
                />
              </div>
            </div>
          </ProductItem>
        ))}
      </ul>
    </Container>
  )
}
