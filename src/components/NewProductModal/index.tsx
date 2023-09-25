import { X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { CategorySelect, Input, QuantitySelect } from '..'
import { Modal, Form, Button } from './styles'
import { Category, Measure, Product } from '@/types'
import ProductService from '@/services/product.service'

interface NewProductModalProps {
  fairId: string
  product?: Product
  isOpen: boolean
  closeModal: () => void
  onSubmit: () => void
}

export const NewProductModal = ({
  fairId,
  product,
  isOpen,
  closeModal,
  onSubmit,
}: NewProductModalProps) => {
  const [loading, setLoading] = useState(false)

  console.log(product)
  const [name, setName] = useState(product?.name)
  const [price, setPrice] = useState(((product?.price || 0) / 100).toString())
  const [measure, setMeasure] = useState<Measure>(product?.measure || 'unit')
  const [quantity, setQuantity] = useState<string | undefined>(
    product?.qty.toString(),
  )
  const [category, setCategory] = useState<Category | undefined>(
    product?.category,
  )

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

      if (product?._id) {
        await ProductService.updateProduct(fairId, product?._id, body)
      } else {
        await ProductService.createProduct(fairId, body)
      }

      toast.success(
        `Produto ${product?._id ? 'editado' : 'cadastrado'} com sucesso`,
      )

      setLoading(false)
      onSubmit()

      closeModal()
    } catch (error: any) {
      setLoading(false)
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        },
      }}
    >
      <div>
        <h1>Novo produto</h1>
        <button onClick={closeModal}>
          <X />
        </button>
      </div>
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
        </div>

        <Button type="submit" disabled={loading}>
          {product?._id ? 'Salvar' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  )
}
