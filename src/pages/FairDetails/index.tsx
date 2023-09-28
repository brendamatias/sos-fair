import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Search } from 'lucide-react'

import { Input, NewProductModal, QrcodeScanner } from '@/components'
import { Product } from '@/components/Product'
import FairService from '@/services/fair.service'
import ProductService from '@/services/product.service'
import { Fair, Product as ProductType } from '@/types'

import { Button, Container, SearchContainer } from './styles'

export const FairDetails: React.FC = () => {
  const { id = '' } = useParams()
  const [fair, setFair] = useState<Fair>()
  const [products, setProducts] = useState<ProductType[]>([])
  const [currentProduct, setCurrentProduct] = useState<ProductType>()
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scannerOpen, setScannerOpen] = useState(false)

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

  const handleEdit = (product: ProductType) => {
    setCurrentProduct(product)
    setIsModalOpen(true)
  }

  useEffect(() => {
    getFair()
    getProducts()
  }, [])

  return (
    <>
      <Container>
        <div>
          <h1>{fair?.name}</h1>
          {/* <button onClick={() => setIsModalOpen(true)}>
            Adicionar produto
          </button> */}
          <button type="button" onClick={() => setScannerOpen(true)}>
            Adicionar produto NF
          </button>
        </div>

        <SearchContainer>
          <Input
            id="name"
            placeholder="Buscar produto"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div>
            <Button>
              <Search />
              <span>Buscar</span>
            </Button>
          </div>
        </SearchContainer>

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

      {isModalOpen && (
        <NewProductModal
          fairId={id}
          product={currentProduct}
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          onSubmit={getProducts}
        />
      )}

      {scannerOpen && (
        <QrcodeScanner
          isOpen={scannerOpen}
          closeModal={() => setScannerOpen(false)}
          fairId="64c6f8c625ae5cde0d44e78a"
          onSubmit={getProducts}
        />
      )}
    </>
  )
}
