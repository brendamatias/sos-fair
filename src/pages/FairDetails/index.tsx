import { useEffect, useState } from 'react'
import { MoreVertical, Plus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import classNames from 'classnames'

import { Input, QuantitySelect, CategorySelect } from '@/components'
import {
  Container,
  Form,
  Button,
  Product,
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
import { Fair, FairProduct } from '@/types'
import { formatPrice } from '@/utils/format'
import FairService from '@/services/fair.service'
import FairProductService from '@/services/fairProduct.service'

export const FairDetails: React.FC = () => {
  const { id = '' } = useParams()
  const [fair, setFair] = useState<Fair>()
  const [products, setProducts] = useState<FairProduct[]>([])

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

  const getFairProducts = async () => {
    try {
      const { data } = await FairProductService.getFairProductList(id)

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
    getFairProducts()
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
          <Product
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

                <button>
                  <MoreVertical />
                </button>
              </div>
            </div>
          </Product>
        ))}
      </ul>
    </Container>
  )
}
