import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import classNames from 'classnames'

import { Dropdown } from '@/components'
import { Container, ProductInfo, Tag } from './styles'
import {
  categoryBackground,
  categoryColor,
  categoryIcon,
  categoryLabel,
  measureAbbreviation,
} from '@/constants'
import { Product as ProductType } from '@/types'
import { formatPrice } from '@/utils/format'
import ProductService from '@/services/product.service'

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
          <input type="checkbox" checked={bought} />
          <div>
            <strong>{name}</strong>
            <span>
              {qty}
              {measureAbbreviation[measure]} x {formatPrice(price)} ={' '}
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
