import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import classNames from 'classnames'
import { Check } from 'lucide-react'

import { Dropdown } from '@/components'
import {
  categoryBackground,
  categoryColor,
  categoryIcon,
  categoryLabel,
} from '@/constants'
import ProductService from '@/services/product.service'
import { Product as ProductType } from '@/types'
import { capitalize, formatPrice } from '@/utils/format'

import { Container, ProductInfo, Tag } from './styles'

interface ProductProps extends ProductType {
  refresh: () => Promise<void>
  handleEdit: () => void
}

export const Product = ({
  _id,
  name,
  bought,
  price,
  qty,
  measure,
  category,
  refresh,
  handleEdit,
}: ProductProps) => {
  const { id = '' } = useParams()

  const handleCheck = async (productId: string, bought: boolean) => {
    try {
      await ProductService.updateProduct(id, productId, {
        bought,
      })

      refresh()
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

      refresh()
      toast.success('Produto deletado com sucesso!')
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  return (
    <Container className={classNames({ bought })}>
      <div>
        <ProductInfo className={classNames({ bought })}>
          <button
            className={classNames({ bought })}
            onClick={() => handleCheck(_id, !bought)}
          >
            {bought && <Check size={12} />}
          </button>
          <div>
            <strong>{name}</strong>
            <span>
              {qty}
              {capitalize(measure)} x {formatPrice(price)} ={' '}
              <strong>{formatPrice(price * qty)}</strong>
            </span>
          </div>
        </ProductInfo>

        <div>
          <Tag
            style={{
              color: categoryColor[category],
              background: categoryBackground[category],
            }}
            className={classNames({ bought })}
          >
            {categoryIcon[category]}
            <span>{categoryLabel[category]}</span>
          </Tag>

          <Dropdown
            options={[
              { label: 'Editar', onClick: handleEdit },
              {
                label: 'Remover',
                onClick: () => deleteProduct(_id),
              },
            ]}
          />
        </div>
      </div>
    </Container>
  )
}
